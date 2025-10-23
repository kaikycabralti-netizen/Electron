document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const pageContents = document.querySelectorAll('.page-content');
    const pageTitleElement = document.getElementById('page-title');

    // Função para alternar o conteúdo da página
    function showPage(pageId, title) {
        // 1. Oculta todas as páginas
        pageContents.forEach(content => {
            content.classList.remove('active-page');
        });

        // 2. Mostra a página desejada
        const targetPage = document.getElementById('page-' + pageId);
        if (targetPage) {
            targetPage.classList.add('active-page');
            pageTitleElement.textContent = title; // Atualiza o título do cabeçalho
        }
    }

    // Adiciona o event listener a cada item da navegação
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            // 1. Remove a classe 'active' de todos os itens
            navItems.forEach(i => i.classList.remove('active'));

            // 2. Adiciona a classe 'active' ao item clicado
            this.classList.add('active');

            // 3. Obtém o ID da página e o título
            const pageId = this.getAttribute('data-page');
            const pageTitle = this.textContent.trim();
            
            // 4. Exibe a nova página
            showPage(pageId, pageTitle);
        });
    });

    // Inicia na página 'Início' por padrão ao carregar
    const initialPage = document.querySelector('.nav-item.active');
    if (initialPage) {
        const pageId = initialPage.getAttribute('data-page');
        const pageTitle = initialPage.textContent.trim();
        showPage(pageId, pageTitle);
    }
});