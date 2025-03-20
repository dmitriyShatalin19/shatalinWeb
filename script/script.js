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
