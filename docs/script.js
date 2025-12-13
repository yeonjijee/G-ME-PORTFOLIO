import { itemData, goodMatchData, dudBeadMessages, completionData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const plateBox = document.querySelector('.plate-box');
    const beadButtons = document.querySelectorAll('.bead-button');
    const mainScreen = document.querySelector('.main-screen');
    const mainCircles = document.querySelectorAll('.main-screen .circle');
    const itemImageContainer = document.querySelector('.item-image-container');
    const lineButtons = document.querySelectorAll('.line-button');
    const recipeButton = document.querySelector('.recipe-button');
    const completeButton = document.querySelector('.complete-button');
    const clearButton = document.getElementById('clear-button');
    const descName = document.getElementById('desc-name');
    const descAttribute = document.getElementById('desc-attribute');
    const descText = document.getElementById('desc-text');
    const goodMatchImageContainer = document.querySelector('.good-match-image-container');

    // --- State Management ---
    let currentLine = null;
    const circleStates = [
        { element: mainCircles[0], beadSrc: null }, { element: mainCircles[1], beadSrc: null },
        { element: mainCircles[2], beadSrc: null }, { element: mainCircles[3], beadSrc: null }
    ];

    // --- Modal and UI Functions ---
    function showModal(innerHtml) {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.innerHTML = innerHtml;
        document.body.appendChild(modalOverlay);

        setTimeout(() => {
            modalOverlay.classList.add('visible');
        }, 10);

        const closeButton = modalOverlay.querySelector('.modal-close-button');
        function closeModal() {
            modalOverlay.classList.remove('visible');
            modalOverlay.addEventListener('transitionend', () => {
                modalOverlay.remove();
            }, { once: true });
        }

        closeButton.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        const slider = modalOverlay.querySelector('.slider-container');
        if (slider) {
            initSlider(slider);
        }
    }

    function initSlider(sliderContainer) {
        const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
        const prevButton = sliderContainer.querySelector('.slider-prev');
        const nextButton = sliderContainer.querySelector('.slider-next');
        const slides = sliderWrapper.querySelectorAll('.slide');
        let currentIndex = 0;

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
            nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        updateSlider();
    }

    function showResultModal(resultData, isDud, hashtags, selectedBeads) {
        const isNoImage = !resultData.images || resultData.images.length === 0;
        const dudLayoutClass = isDud ? 'dud-layout' : '';

        let textContentHtml;
        if (isDud) {
            const uniqueBeads = [...new Set(selectedBeads)];
            textContentHtml = uniqueBeads.map(bead => `<p>${dudBeadMessages[bead] || ''}</p>`).join('');
        } else {
            textContentHtml = resultData.text;
        }

        let linkOrButtonHtml = '';
        if (resultData.link) {
            const links = Array.isArray(resultData.link) ? resultData.link : [resultData.link];
            const linkButtons = links.map(link => {
                let imgSrc = 'instagram.jpg'; // Default
                if (link.includes('notion.so')) {
                    imgSrc = 'notion.png';
                } else if (link.includes('github.io') || link.includes('hankyung.com') || link.includes('soundcloud.com')) {
                    imgSrc = 'website.jpg';
                }
                return `<a href="${link}" target="_blank" class="result-link"><img src="${imgSrc}" alt="Link"></a>`;
            }).join('');
            linkOrButtonHtml = `<div class="result-links-container">${linkButtons}</div>`;
        }

        let mediaHtml;
        if (!isDud && !isNoImage) {
            if (resultData.images.length > 1) {
                const slides = resultData.images.map(src => {
                    const isVideo = src.endsWith('.mp4') || src.endsWith('.mov');
                    return `<div class="slide">${isVideo ? `<video src="${src}" controls></video>` : `<img src="${src}" alt="${resultData.title}">`}</div>`;
                }).join('');
                mediaHtml = `<div class="slider-container"><div class="slider-wrapper">${slides}</div><button class="slider-prev">&lt;</button><button class="slider-next">&gt;</button></div>`;
            } else {
                const src = resultData.images[0];
                const isVideo = src.endsWith('.mp4') || src.endsWith('.mov');
                mediaHtml = isVideo ? `<video src="${src}" controls></video>` : `<img class="result-image" src="${src}" alt="${resultData.title}">`;
            }
        } else {
            mediaHtml = '';
        }

        const resultModalContent = `
            <div class="modal-content result-modal-content ${dudLayoutClass} ${isNoImage || isDud ? 'no-image-layout' : ''}">
                <h2 class="result-title">${resultData.title}</h2>
                ${resultData.subtitle ? `<p class="result-subtitle">${resultData.subtitle}</p>` : ''}
                ${resultData.year && !isDud ? `<p class="result-year">${resultData.year}</p>` : ''}
                <div class="result-body">
                    <div class="result-left">${mediaHtml}</div>
                    <div class="result-right">
                        <p class="result-hashtags">${isDud ? '' : hashtags}</p>
                        <div class="result-text-wrapper">${textContentHtml}</div>
                        ${linkOrButtonHtml}
                    </div>
                </div>
                <button class="modal-close-button">&times;</button>
            </div>
        `;
        showModal(resultModalContent);
    }

    function randomizePositions() {
        if (!plateBox) return;
        const containerWidth = plateBox.clientWidth;
        const containerHeight = plateBox.clientHeight;
        const placedButtons = [];
        beadButtons.forEach(button => {
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;
            let positionFound = false;
            let attempts = 0;
            const maxAttempts = 100;
            while (!positionFound && attempts < maxAttempts) {
                attempts++;
                const randomX = Math.random() * (containerWidth - buttonWidth);
                const randomY = Math.random() * (containerHeight - buttonHeight);
                const newButtonRect = { x: randomX, y: randomY, width: buttonWidth, height: buttonHeight };
                let hasOverlap = false;
                for (const placedRect of placedButtons) {
                    if (newButtonRect.x < placedRect.x + placedRect.width && newButtonRect.x + newButtonRect.width > placedRect.x && newButtonRect.y < placedRect.y + placedRect.height && newButtonRect.y + newButtonRect.height > placedRect.y) {
                        hasOverlap = true;
                        break;
                    }
                }
                if (!hasOverlap) {
                    button.style.left = `${randomX}px`;
                    button.style.top = `${randomY}px`;
                    placedButtons.push(newButtonRect);
                    positionFound = true;
                }
            }
            if (!positionFound) {
                button.style.left = `${Math.random() * (containerWidth - buttonWidth)}px`;
                button.style.top = `${Math.random() * (containerHeight - buttonHeight)}px`;
            }
        });
    }

    function updateDescriptionBox(key) {
        if (!descName || !descAttribute || !descText) return;
        const data = itemData[key];
        if (data) {
            descName.textContent = data.name;
            descAttribute.textContent = data.attribute;
            descText.textContent = data.description;
        } else {
            descName.textContent = '';
            descAttribute.textContent = '';
            descText.textContent = '';
        }
    }

    function updateGoodMatchBox(beadKey) {
        if (!goodMatchImageContainer) return;
        goodMatchImageContainer.innerHTML = '';
        const matches = goodMatchData[beadKey];
        if (matches) {
            matches.forEach(matchKey => {
                const matchImg = document.createElement('img');
                matchImg.src = `beads/${matchKey}.png`;
                matchImg.classList.add('good-match-bead');
                goodMatchImageContainer.appendChild(matchImg);
            });
        }
    }

    function updateItemBox(imageSrc, altText, key) {
        if (itemImageContainer) {
            itemImageContainer.innerHTML = '';
            if (imageSrc) {
                const displayImage = document.createElement('img');
                displayImage.src = imageSrc;
                displayImage.alt = altText;
                itemImageContainer.appendChild(displayImage);
            }
        }
        updateDescriptionBox(key);
        if (goodMatchData[key]) {
            updateGoodMatchBox(key);
        } else {
            if (goodMatchImageContainer) goodMatchImageContainer.innerHTML = '';
        }
    }

    function updateBeadSelectionState() {
        const activeBeadSrcs = circleStates.map(state => state.beadSrc).filter(src => src !== null);
        beadButtons.forEach(button => {
            const beadImage = button.querySelector('img');
            if (beadImage && activeBeadSrcs.includes(beadImage.src)) {
                button.classList.add('bead-selected');
            } else {
                button.classList.remove('bead-selected');
            }
        });
    }

    // --- Event Listeners ---
    beadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const beadImage = button.querySelector('img');
            if (!beadImage) return;

            const clickedBeadSrc = beadImage.src;
            const beadKey = decodeURIComponent(clickedBeadSrc.split('/').pop().replace('.png', ''));
            updateItemBox(clickedBeadSrc, beadImage.alt, beadKey);

            if (button.dataset.beadType === 'blank') {
                const isAlreadyFilledWithBlank = circleStates.some(state => state.beadSrc && state.beadSrc.includes('blank.png'));
                if (isAlreadyFilledWithBlank) {
                    circleStates.forEach(state => {
                        if (state.beadSrc && state.beadSrc.includes('blank.png')) {
                            state.element.innerHTML = '';
                            state.beadSrc = null;
                        }
                    });
                } else {
                    circleStates.forEach(state => {
                        if (state.beadSrc === null) {
                            state.element.innerHTML = '';
                            const newImg = document.createElement('img');
                            newImg.src = clickedBeadSrc;
                            newImg.alt = beadImage.alt;
                            state.element.appendChild(newImg);
                            state.beadSrc = clickedBeadSrc;
                        }
                    });
                }
            } else {
                const existingCircleIndex = circleStates.findIndex(state => state.beadSrc === clickedBeadSrc);
                if (existingCircleIndex > -1) {
                    circleStates[existingCircleIndex].element.innerHTML = '';
                    circleStates[existingCircleIndex].beadSrc = null;
                } else {
                    const emptyCircleIndex = circleStates.findIndex(state => state.beadSrc === null);
                    if (emptyCircleIndex > -1) {
                        const state = circleStates[emptyCircleIndex];
                        state.element.innerHTML = '';
                        const newImg = document.createElement('img');
                        newImg.src = clickedBeadSrc;
                        newImg.alt = beadImage.alt;
                        state.element.appendChild(newImg);
                        state.beadSrc = clickedBeadSrc;
                    }
                }
            }
            updateBeadSelectionState();
        });
    });

    lineButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lineImage = button.querySelector('img');
            if (!lineImage) return;
            const lineKey = decodeURIComponent(lineImage.src.split('/').pop().replace('.png', ''));
            
            mainScreen.style.backgroundImage = '';

            if (currentLine === lineKey) {
                currentLine = null;
                updateItemBox('', '', '');
                updateGoodMatchBox('');
            } else {
                currentLine = lineKey;
                updateItemBox(lineImage.src, lineImage.alt, lineKey);
                updateGoodMatchBox(lineKey);
                mainScreen.style.backgroundImage = `url('${lineImage.src}')`;
            }
        });
    });

    recipeButton.addEventListener('click', () => {
        const regularRecipes = completionData.filter(p => !p.dud && !p.beads.includes('blank'));
        const easterEggRecipes = completionData.filter(p => !p.dud && p.beads.includes('blank'));

        const createRecipeSectionHTML = (title, recipes) => {
            if (recipes.length === 0) return '';
            
            const rows = recipes.map(p => {
                const lineKey = Array.isArray(p.lines) ? p.lines[0] : p.line;
                const lineImg = `<img src="lines/${lineKey}.png" alt="${lineKey}" class="line-img">`;
                const beadImgs = p.beads.map(bead => `<img src="beads/${bead}.png" alt="${bead}" class="bead-img">`).join('');
                const titleHtml = `<div class="recipe-title">${p.result.title}</div>`;
                
                return `<a href="index.html?line=${encodeURIComponent(lineKey)}&beads=${encodeURIComponent(JSON.stringify(p.beads))}" class="recipe-row">
                            <div class="recipe-images">${lineImg}${beadImgs}</div>
                            <span>→</span>
                            ${titleHtml}
                        </a>`;
            }).join('');

            return `<div class="recipe-section"><h3>${title}</h3>${rows}</div>`;
        };

        const regularHtml = createRecipeSectionHTML('Recipes', regularRecipes);
        const easterEggHtml = createRecipeSectionHTML('Easter Eggs', easterEggRecipes);

        const recipeModalContent = `
            <div class="modal-content recipe-modal-content">
                <h2>RECIPE</h2>
                ${regularHtml}
                ${easterEggHtml}
                <button class="modal-close-button">&times;</button>
            </div>
        `;
        showModal(recipeModalContent);
    });

    clearButton.addEventListener('click', () => {
        circleStates.forEach(state => {
            state.element.innerHTML = '';
            state.beadSrc = null;
        });
        currentLine = null;
        mainScreen.style.backgroundImage = '';
        updateItemBox('', '', '');
        updateBeadSelectionState();
    });

    completeButton.addEventListener('click', () => {
        const selectedBeads = circleStates.map(state => state.beadSrc).filter(src => src !== null).map(src => decodeURIComponent(src.split('/').pop().replace('.png', '')));
        
        if (!currentLine) {
            alert("라인을 선택해 주세요");
            return;
        }
        if (selectedBeads.length !== 4) {
            alert("구슬을 선택해주세요");
            return;
        }

        const sortedSelectedBeads = selectedBeads.sort();
        let matchFound = false;
        let resultData;

        for (const combination of completionData) {
            if (combination.dud) continue;
            
            const areBeadsSame = JSON.stringify(combination.beads) === JSON.stringify(sortedSelectedBeads);
            const isLineMatch = Array.isArray(combination.lines)
                ? combination.lines.includes(currentLine)
                : combination.line === currentLine;

            if (isLineMatch && areBeadsSame) {
                resultData = combination.result;
                matchFound = true;
                break;
            }
        }

        const isDud = !matchFound;
        const finalResultData = isDud ? completionData.find(c => c.dud === true).result : resultData;
        const hashtags = isDud ? '' : [...selectedBeads, currentLine].map(item => `#${item.replace(/ : /g, '_')}`).join(' ');
        
        showResultModal(finalResultData, isDud, hashtags, selectedBeads);
    });

    // --- Initial Setup ---
    function handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const line = urlParams.get('line');
        const beads = urlParams.get('beads');

        if (line && beads) {
            try {
                const decodedBeads = JSON.parse(decodeURIComponent(beads));
                const sortedSelectedBeads = decodedBeads.sort();

                for (const combination of completionData) {
                    if (combination.dud) continue;

                    const areBeadsSame = JSON.stringify(combination.beads) === JSON.stringify(sortedSelectedBeads);
                    const isLineMatch = Array.isArray(combination.lines)
                        ? combination.lines.includes(line)
                        : combination.line === line;

                    if (isLineMatch && areBeadsSame) {
                        const hashtags = [...decodedBeads, line].map(item => `#${item.replace(/ : /g, '_')}`).join(' ');
                        showResultModal(combination.result, false, hashtags, decodedBeads);
                        break;
                    }
                }
            } catch (e) {
                console.error("Error processing URL parameters:", e);
            }
        }
    }

    setTimeout(randomizePositions, 100);
    window.addEventListener('resize', randomizePositions);
    handleUrlParams();
});
