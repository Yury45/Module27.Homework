let session = new Map();

function handletSession(){
    session.set('userAgent', window.navigator.userAgent);
    session.set('currentDate', new Date().toLocaleString());   
}

function checkAge() {
    session.set('userAge', prompt('Пожалуйста, укажите ваш возраст:'));

    if (session.get('userAge') < 18) {
        alert('Данный ресурс предназначен для лиц достигших 18 лет.')
        window.location.href = "http://www.google.com";
    }
    else {
        alert('Приветсвтуем на LifeSpot!\nСегодня: ' + session.get('currentDate'));
    }
    return session;
}

function inputSearching(parseUserInputFunc) {
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (videoText.toLowerCase().includes(parseUserInputFunc())) elements[i].style.display = 'inline-block';
        else elements[i].style.display = 'none';
    }
}

function getUserInput() {
    let userInput = document.getElementsByName('searchString')[0].value.toLowerCase();
    return userInput;
}

const sessionLog = function logSession() {
    for (let property of session) {
        console.log(property);
    }
}

function showSpam() {
    setTimeout(() =>
        alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
        30000);
}