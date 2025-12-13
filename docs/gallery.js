import { completionData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');

    if (!galleryGrid) return;

    const uniqueProjects = {};

    // De-duplicate projects based on title
    completionData.forEach(project => {
        if (project.dud) return;
        const title = project.result.title;
        if (!uniqueProjects[title]) {
            uniqueProjects[title] = project;
        }
    });

    for (const title in uniqueProjects) {
        const project = uniqueProjects[title];
        
        const link = document.createElement('a');
        const lineKey = Array.isArray(project.lines) ? project.lines[0] : project.line;
        const lineParam = encodeURIComponent(lineKey);
        const beadsParam = encodeURIComponent(JSON.stringify(project.beads));
        
        link.href = `index.html?line=${lineParam}&beads=${beadsParam}`;
        link.className = 'gallery-item';

        if (project.result.images && project.result.images.length > 0) {
            // Project with images
            const thumbnailSrc = project.result.images[0];
            const img = document.createElement('img');
            img.src = thumbnailSrc;
            img.alt = title;
            img.loading = 'lazy';

            const titleOverlay = document.createElement('div');
            titleOverlay.className = 'title-overlay';
            titleOverlay.textContent = title;

            link.appendChild(img);
            link.appendChild(titleOverlay);
        } else {
            // Text-only project
            link.classList.add('text-only');
            link.textContent = title;
        }
        
        galleryGrid.appendChild(link);
    }
});
