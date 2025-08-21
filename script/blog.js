// смена темы для блога
const ThemeLightBlog = document.querySelectorAll('.js-theme-light_blog');
const ThemeDarkBlog = document.querySelectorAll('.js-theme-dark_blog');

ThemeLightBlog.forEach(btn => {
    btn.addEventListener('click', function() {
        document.body.classList.add('theme-light_blog');
        document.body.classList.remove('theme-dark_blog');
    });
});
ThemeDarkBlog.forEach(btn => {
    btn.addEventListener('click', function() {
        document.body.classList.add('theme-dark_blog');
        document.body.classList.remove('theme-light_blog');
    })
});