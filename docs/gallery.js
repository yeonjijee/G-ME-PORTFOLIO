import { completionData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');

    if (!galleryGrid) return;

    const uniqueProjects = {};

    completionData.forEach(project => {
        if (project.dud || !project.result.images || project.result.images.length === 0) {
            return;
        }
        
        // Use title as the key to identify unique projects
        const title = project.result.title;
        if (!uniqueProjects[title]) {
            uniqueProjects[title] = project;
        }
    });

    for (const title in uniqueProjects) {
        const project = uniqueProjects[title];
        const thumbnailSrc = project.result.images[0];

        const link = document.createElement('a');
        
        // If there are multiple lines, use the first one for the link.
        const lineKey = Array.isArray(project.lines) ? project.lines[0] : project.line;
        const lineParam = encodeURIComponent(lineKey);
        const beadsParam = encodeURIComponent(JSON.stringify(project.beads));
        
        link.href = `index.html?line=${lineParam}&beads=${beadsParam}`;
        link.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = thumbnailSrc;
        img.alt = title;
        img.loading = 'lazy';

        const titleOverlay = document.createElement('div');
        titleOverlay.className = 'title-overlay';
        titleOverlay.textContent = title;

        link.appendChild(img);
        link.appendChild(titleOverlay);
        galleryGrid.appendChild(link);
    }
});