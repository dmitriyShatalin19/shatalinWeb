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
            text1: "Контроль версий очень важен — без него вы рискуете потерять свою работу. С помощью Git вы можете создавать «коммиты», или точки сохранения, так часто, как вам удобно. Вы также можете вернуться к предыдущим коммитам. Это снимает с вас напряжение во время работы. Коммитируйте часто и делайте это заранее, и у вас никогда не будет этого неприятного ощущения, когда вы перезаписываете или теряете изменения.",
            subtitle1: "Как работать с Git?",
            text2: "Представь программиста Диму, который создал мини-игру про добычу морковки. 🚜🥕 Игроки довольны, и Дима добавляет новые овощи — картошку и капусту. 🥔🥬 Но тут 💥 БАЦ 💥 — пользователи жалуются на баг! 😱 При сборе картошки и капусты появляется «капустофиль». 👉 Дима не паникует, ведь у него есть Git! Он откатывает игру к стабильной версии (где была только морковка) и спокойно исправляет баг.",
            category: "git",
            date: "2025-05-03"
        },
        {
            id: 2,
            title: "JS",
            content: "...",
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
                <p class= full-post-text>${post.text1}</p>
                <h4 class= full-post-subtitle>${post.subtitle1}</h4>
                <p class= full-post-text>${post.text2}</p>
                <div class= "full-post_code">
                    <p class= "full-post-code_title">📌 Создаём проект</p>
                    <ul class= "full-post-code_block">
                        <li>mkdir my_game # Создаём папку</li>
                        <li>cd my_game # переходим в неё</li>
                        <li>git init  # Инициализируем Git</li>
                        <li>echo "Игрок добывает морковку." > game.txt  # Создаём файл</li>
                        <li>git add game.txt  # Готовим к сохранению</li>
                        <li>git commit -m "Первая версия: морковка"  # Фиксируем</li>
                    </ul>

                    <p class= "full-post-code_title">📌 2. Добавляем обновление (картошка и капуста)</p>
                    <ul class= "full-post-code_block">
                        <li>echo "Игрок добывает морковку, картошку и капусту." > game.txt  </li>
                        <li>git add game.txt </li>
                        <li>git commit -m "Добавлены картошка и капуста"</li>
                    </ul>

                    <p class= "full-post-code_title">📌 3. ОШИБКА! Нужно вернуть старую версию</p>
                    <ul class= "full-post-code_block">
                        <li>git log --oneline  # Смотрим историю изменений</li>
                    </ul>

                    <p class= "full-post-code_title">🔹 История коммитов:</p>
                    <ul class= "full-post-code_block">
                        <li>abc1234 Добавлены картошка и капуста  </li>
                        <li>xyz5678 Первая версия: морковка  </li>
                    </ul>

                    <p class= "full-post-code_title">🔙 Откатываемся к версии без бага:</p>
                    <ul class= "full-post-code_block">
                        <li>git checkout xyz5678 game.txt  # Возвращаем старую версию файла</li>
                        <li>git add game.txt </li>
                        <li>git commit -m "Откат к версии с морковкой"</li>
                    </ul>
                    <p class= "full-post-code_title">P.S git - это твоя машина времени. 🤫</p>
                </div>
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