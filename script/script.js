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

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Аккордеон
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
      const toggle = item.querySelector('.accordion-toggle');
      
      toggle.addEventListener('click', () => {
          // Закрываем все другие открытые элементы
          accordionItems.forEach(otherItem => {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                  otherItem.classList.remove('active');
                  otherItem.querySelector('.accordion-content').style.maxHeight = '0';
              }
          });
          
          // Переключаем текущий элемент
          const isActive = item.classList.toggle('active');
          const content = item.querySelector('.accordion-content');
          content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0';
      });
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