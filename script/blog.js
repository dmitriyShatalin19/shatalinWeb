document.addEventListener("DOMContentLoaded", function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const categoryLinks = document.querySelectorAll('.header-navbar_link a');
    // Массив статей блога
    const blogPosts = [
        {
            id: 1,
            title: "GIT",
            excerpt: "Git - это систеам контроля версий...",
            category: "git",
            date: "2025-05-03"
        }
    ];
    // Функция для отображения статей
    function displayPosts(posts) {
        blogPostsContainer.innerHTML = '';
        
        if (posts.length === 0) {
            blogPostsContainer.innerHTML = '<p class="no-posts">Статьи не найдены</p>';
            return;
        }
        
        // Сортируем по дате (новые сначала)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-post';
            postElement.dataset.category = post.category;
            
            // Добавляем ссылку вокруг содержимого статьи
            postElement.innerHTML = `
                <a href="post.html?id=${post.id}" class="post-link">
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta">
                        <span class="post-category">${post.category.toUpperCase()}</span>
                        <span class="post-date">${formatDate(post.date)}</span>
                    </div>
                </a>
            `;
            
            blogPostsContainer.appendChild(postElement);
        });
    }
    // Функция для форматирования даты
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('ru-RU', options);
    }
    // Обработчики для фильтрации по категориям
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех ссылок
            categoryLinks.forEach(l => l.classList.remove('active'));
            // Добавляем активный класс текущей ссылке
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            if (category === 'all') {
                displayPosts(blogPosts);
            } else {
                const filteredPosts = blogPosts.filter(post => post.category === category);
                displayPosts(filteredPosts);
            }
        });
    });
    // При загрузке показываем все статьи
    displayPosts(blogPosts);
});