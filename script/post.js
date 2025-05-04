document.addEventListener("DOMContentLoaded", function() {
    const postContainer = document.getElementById('post-container');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // Массив статей (можно вынести в отдельный файл или использовать API)
    const blogPosts = [
        {
            id: 1,
            title: "GIT",
            content: "Что такое Git?",
            text: "GIt - это распределённая система контроля версий. Контроль версий - это способ сохранять изменения с течением времени, не презаписывая предыдущие версии. Распределённость означает, что у каждого разработчика, работающего с репозиторием Git, есть копия всего репозитория - каждого коммита, каждой ветки и файла.",
            subtitle: "Зачем использовать Git?",
            category: "git",
            date: "2025-05-03"
        }
    ];

    // Находим статью по ID
    const post = blogPosts.find(p => p.id.toString() === postId);

    if (post) {
        postContainer.innerHTML = `
            <article class="full-post">
                <h2 class="full-post-title">${post.title}</h2>
                <div class="full-post-content">${post.content}</div>
                <p class= full-post-text>${post.text}</p>
                <h4 class= full-post-subtitle>${post.subtitle}</h4>
                <div class="full-post-meta">
                    <span class="full-post-category">${post.category.toUpperCase()}</span>
                    <span class="full-post-date">${new Date(post.date).toLocaleDateString('ru-RU')}</span>
                </div>
                <a href="blog.html" class="back-link">← Назад к статьям</a>
            </article>
        `;
    } else {
        postContainer.innerHTML = '<p class="error">Статья не найдена</p>';
    }
});