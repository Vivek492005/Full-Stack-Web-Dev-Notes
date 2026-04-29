document.addEventListener('DOMContentLoaded', () => {
    const notesGrid = document.getElementById('notesGrid');
    const searchBox = document.getElementById('searchBox');
    const navLinks = document.querySelectorAll('.nav-link[data-category]');
    const mainTitle = document.getElementById('mainTitle');

    // Initial Render
    renderNotes(notesData);

    // Navigation Logic
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update Active State
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const category = link.getAttribute('data-category');
            
            // Update Title
            if (category === 'all') {
                mainTitle.textContent = "Full-Stack Excellence";
            } else {
                mainTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            }

            // Filter Data
            const filtered = category === 'all' 
                ? notesData 
                : notesData.filter(n => n.category === category);
            
            renderNotes(filtered);
        });
    });

    // Search Logic
    searchBox.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = notesData.filter(n => 
            n.title.toLowerCase().includes(query) || 
            n.description.toLowerCase().includes(query) ||
            n.category.toLowerCase().includes(query)
        );
        renderNotes(filtered);
    });

    function renderNotes(data) {
        notesGrid.innerHTML = '';
        
        if (data.length === 0) {
            notesGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #94a3b8; margin-top: 2rem;">No notes found matching your search.</div>';
            return;
        }

        data.forEach(note => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-title">
                    <i data-lucide="${getIcon(note.category)}"></i>
                    ${note.title}
                </div>
                <p class="card-content" style="margin-bottom: 1rem;">${note.description}</p>
                <pre class="language-${note.language}"><code class="language-${note.language}">${escapeHtml(note.content)}</code></pre>
            `;
            notesGrid.appendChild(card);
        });

        // Re-initialize Icons and Prism
        lucide.createIcons();
        if (window.Prism) {
            Prism.highlightAll();
        }
    }

    function getIcon(category) {
        const icons = {
            javascript: 'code-2',
            html: 'file-code',
            css: 'palette',
            react: 'atom',
            nextjs: 'zap',
            nodejs: 'server',
            database: 'database'
        };
        return icons[category] || 'book-open';
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
