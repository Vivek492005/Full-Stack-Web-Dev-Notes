document.addEventListener('DOMContentLoaded', () => {
    const notesGrid = document.getElementById('notesGrid');
    const searchBox = document.getElementById('searchBox');
    const sidebarBtns = document.querySelectorAll('.sidebar-btn');
    const mainTitle = document.getElementById('mainTitle');

    // Initial Render
    renderNotes(notesData);

    // Sidebar Navigation
    sidebarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update UI State
            sidebarBtns.forEach(b => {
                b.classList.remove('sidebar-item-active', 'bg-sky-500/10', 'text-sky-500');
                b.classList.add('text-slate-400');
            });
            btn.classList.add('sidebar-item-active', 'bg-sky-500/10', 'text-sky-500');
            btn.classList.remove('text-slate-400');

            const category = btn.getAttribute('data-category');
            
            // Animation Trigger
            notesGrid.style.opacity = '0';
            notesGrid.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                const filtered = category === 'all' 
                    ? notesData 
                    : notesData.filter(n => n.category === category);
                
                renderNotes(filtered);
                notesGrid.style.opacity = '1';
                notesGrid.style.transform = 'translateY(0)';
            }, 300);

            // Update Title
            updateMainTitle(category);
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
            notesGrid.innerHTML = \`
                <div class="col-span-full py-20 text-center">
                    <i data-lucide="search-x" class="w-16 h-16 text-slate-700 mx-auto mb-4"></i>
                    <p class="text-slate-500 text-lg">No matching modules found in the database.</p>
                </div>
            \`;
            lucide.createIcons();
            return;
        }

        data.forEach((note, index) => {
            const card = document.createElement('div');
            card.className = 'group relative p-8 rounded-3xl glass border border-slate-800 hover:border-sky-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10 opacity-0 transform translate-y-4';
            card.style.animation = \`fadeInUp 0.6s ease-out forwards \${index * 0.1}s\`;
            
            card.innerHTML = \`
                <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="p-2 rounded-xl bg-slate-800/50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all">
                        <i data-lucide="copy" class="w-4 h-4"></i>
                    </button>
                </div>
                
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 flex items-center justify-center border border-sky-500/20 group-hover:border-sky-500/50 transition-colors">
                        <i data-lucide="\${getIcon(note.category)}" class="w-6 h-6 text-sky-400"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">\${note.title}</h3>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500">\${note.category} module</span>
                    </div>
                </div>

                <p class="text-slate-400 text-sm leading-relaxed mb-6">\${note.description}</p>

                <div class="relative">
                    <div class="absolute top-2 right-2 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">\${note.language}</div>
                    <pre class="rounded-2xl overflow-hidden border border-slate-800/50 !bg-slate-950/50 p-4"><code class="language-\${note.language}">\${escapeHtml(note.content)}</code></pre>
                </div>

                \${note.table ? renderTable(note.table) : ''}
            \`;
            notesGrid.appendChild(card);
        });

        lucide.createIcons();
        if (window.Prism) Prism.highlightAll();
    }

    function renderTable(tableData) {
        return \`
            <div class="mt-6 overflow-hidden rounded-xl border border-slate-800/50">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-800/30 text-slate-400 uppercase tracking-wider">
                        <tr>
                            <th class="px-4 py-2 font-bold">Feature</th>
                            <th class="px-4 py-2 font-bold">Let</th>
                            <th class="px-4 py-2 font-bold">Const</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/50">
                        \${tableData.map(row => \`
                            <tr class="hover:bg-sky-500/5 transition-colors">
                                <td class="px-4 py-2 text-slate-300">\${row.feature}</td>
                                <td class="px-4 py-2 text-sky-400">\${row.let}</td>
                                <td class="px-4 py-2 text-indigo-400">\${row.const}</td>
                            </tr>
                        \`).join('')}
                    </tbody>
                </table>
            </div>
        \`;
    }

    function updateMainTitle(category) {
        const titles = {
            all: 'Full-Stack <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Knowledge Hub</span>',
            javascript: 'Mastering <br/><span class="text-yellow-400">JavaScript</span> Core',
            html: 'Structure with <br/><span class="text-orange-500">HTML5</span>',
            css: 'Art of <br/><span class="text-sky-500">CSS3 Styling</span>',
            react: 'Component <br/><span class="text-cyan-400">Architecture</span>',
            nextjs: 'The <br/><span class="text-white">Next.js</span> Paradigm',
            nodejs: 'Scalable <br/><span class="text-green-500">Node.js</span> Engines',
            database: 'Modern <br/><span class="text-emerald-400">Data Storage</span>'
        };
        mainTitle.innerHTML = titles[category] || category;
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

    // Custom CSS Animation
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
    \`;
    document.head.appendChild(style);
});
