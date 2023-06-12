

function checkAge() {
    let age = prompt('Пожалуйста, укажите ваш возраст:')
    if (age < 18) {
        alert('Данный ресурс предназначен для лиц достигших 18 лет.')
        window.location.href = "http://www.google.com";
    }
    else alert('Приветсвтуем на LifeSpot!\nСегодня: ' + new Date().toLocaleString());
}


function inputSearching() {
    let query = document.getElementsByName('searchString')[0].value.toLowerCase();
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (videoText.toLowerCase().includes(query)) elements[i].style.display = 'inline-block';
        else elements[i].style.display = 'none';
    }
}
