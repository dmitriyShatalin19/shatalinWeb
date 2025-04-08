document.addEventListener("DOMContentLoaded", function() {
    const text = "Вход в систему... Добро пожаловать в мою цифровую лабораторию 🟢";
    const speed = 100; // Скорость печати (мс)
    let i = 0;
    const typingElement = document.querySelector(".typing-text");

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Добавляем класс, чтобы убрать мигающий курсор
            typingElement.classList.add("finished");
        }
    }

    typeWriter();
});


document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-icon");
  const mobileMenu = document.getElementById("burger-menu");
  const closeBtn = document.getElementById("close-menu");
  const body = document.body;

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    body.classList.add("menu-open"); // Блокируем скролл
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    body.classList.remove("menu-open"); // Разблокируем скролл
  });
});




// Плавная прокрутка для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Закрываем мобильное меню, если открыто
      const mobileMenu = document.getElementById('burger-menu');
      mobileMenu.classList.remove('active');
      
      // Плавная прокрутка
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          
          // Добавляем хэш в URL без прыжка
          history.pushState(null, null, targetId);
      }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const content = item.querySelector('.accordion-content');

      // Если элемент уже раскрыт, сворачиваем его
      if(item.classList.contains('active')) {
        content.style.maxHeight = null;
        item.classList.remove('active');
      } else {
        // Раскрываем элемент: устанавливаем max-height равным scrollHeight
        content.style.maxHeight = content.scrollHeight + "px";
        item.classList.add('active');
      }
    });
  });
});
