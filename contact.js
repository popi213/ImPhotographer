document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('ваш_скрипт_обработки_формы.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ошибка отправки сообщения. Пожалуйста, попробуйте позже.');
        });
});