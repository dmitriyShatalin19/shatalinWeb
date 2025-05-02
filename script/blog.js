document.addEventListener("DOMContentLoaded", function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const categoryLinks = document.querySelectorAll('.header-navbar_link a');
    // Массив статей блога
    const blogPosts = [
        {
            id: 1,
            title: "Основы HTML5",
            excerpt: "В этой статье мы рассмотрим основные теги HTML5 и их применение.",
            category: "html",
            date: "2025-05-15"
        },
        {
            id: 2,
            title: "Современный JavaScript",
            excerpt: "Разбираем новые возможности ES6+ и как их использовать.",
            category: "js",
            date: "2025-05-10"
        },
        {
            id: 3,
            title: "Основы React",
            excerpt: "Введение в React: компоненты, состояние и свойства.",
            category: "react",
            date: "2025-05-05"
        },
        {
            id: 4,
            title: "Работа с Git",
            excerpt: "Основные команды Git для ежедневной работы разработчика.",
            category: "git",
            date: "2025-04-28"
        },
        {
            id: 5,
            title: "CSS Grid Layout",
            excerpt: "Полное руководство по CSS Grid для создания сложных макетов.",
            category: "html",
            date: "2025-04-20"
        },
        {
            id: 6,
            title: "Асинхронный JavaScript",
            excerpt: "Promise, async/await и другие подходы к асинхронности.",
            category: "js",
            date: "2025-04-15"
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
            
            postElement.innerHTML = `
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-category">${post.category.toUpperCase()}</span>
                    <span class="post-date">${formatDate(post.date)}</span>
                </div>
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