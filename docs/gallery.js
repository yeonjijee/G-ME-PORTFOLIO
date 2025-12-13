import { completionData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');

    if (!galleryGrid) return;

    completionData.forEach(project => {
        // Skip dud projects and projects with no images
        if (project.dud || !project.result.images || project.result.images.length === 0) {
            return;
        }

        const thumbnailSrc = project.result.images[0];
        const title = project.result.title;

        // Create the link element
        const link = document.createElement('a');
        const lineParam = encodeURIComponent(project.line);
        const beadsParam = encodeURIComponent(JSON.stringify(project.beads));
        link.href = `index.html?line=${lineParam}&beads=${beadsParam}`;
        link.className = 'gallery-item';

        // Create the image element
        const img = document.createElement('img');
        img.src = thumbnailSrc;
        img.alt = title;
        img.loading = 'lazy'; // Lazy load images for performance

        // Create the title overlay
        const titleOverlay = document.createElement('div');
        titleOverlay.className = 'title-overlay';
        titleOverlay.textContent = title;

        // Append elements
        link.appendChild(img);
        link.appendChild(titleOverlay);
        galleryGrid.appendChild(link);
    });
});
