// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.content');
    const nameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const button = document.querySelector('button');
    
    // Создаем контейнеры для ошибок под каждым полем
    const nameError = document.createElement('div');
    nameError.className = 'error-message';
    nameInput.parentNode.appendChild(nameError);
    
    const passwordError = document.createElement('div');
    passwordError.className = 'error-message';
    passwordInput.parentNode.appendChild(passwordError);
    
    // Функция валидации имени (только Рита)
    function validateName() {
        const name = nameInput.value.trim();
        
        if (name === '') {
            showError(nameInput, nameError, 'Напиши имя самой лучшей девушки 💕');
            return false;
        } else if (name.toLowerCase() !== 'рита') {
            showError(nameInput, nameError, 'Ой, а кто это? Не правельно... 😢');
            return false;
        } else {
            hideError(nameInput, nameError);
            return true;
        }
    }
    
    // Функция валидации пароля
    function validatePassword() {
        const password = passwordInput.value;
        
        if (password === '') {
            showError(passwordInput, passwordError, 'Пароль тоже нужен 😊');
            return false;
        } else if (password.length < 4) {
            showError(passwordInput, passwordError, 'Пароль слишком короткий 🙈');
            return false;
        } else {
            hideError(passwordInput, passwordError);
            return true;
        }
    }
    
    // Функция показа ошибки
    function showError(input, errorElement, message) {
        input.style.borderColor = '#FF4444';
        input.style.boxShadow = '0 0 0 3px rgba(255, 68, 68, 0.1)';
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Анимация тряски при ошибке
        input.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }
    
    // Функция скрытия ошибки
    function hideError(input, errorElement) {
        input.style.borderColor = '#FFB6C1';
        input.style.boxShadow = 'none';
        errorElement.style.display = 'none';
    }
    
    // Валидация при вводе
    nameInput.addEventListener('input', validateName);
    passwordInput.addEventListener('input', validatePassword);
    
    // Валидация при потере фокуса
    nameInput.addEventListener('blur', validateName);
    passwordInput.addEventListener('blur', validatePassword);
    
    // Валидация при отправке
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isPasswordValid = validatePassword();
        
        if (isNameValid && isPasswordValid) {
            // Меняем сердечко в кнопке
            button.querySelector('a').textContent = '💕';
            
            // Имитация перехода
            setTimeout(() => {
                window.location.href = '/love.html';
            }, 500);
        }
    });
});