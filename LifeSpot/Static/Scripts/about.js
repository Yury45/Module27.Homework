function SetFeedbackData() {
    this.authorName = prompt('Введите ваше имя:');
    if (this.authorName == null) {
        this.empty = true;
        return;
    }

    this.comment = prompt('Введите текст комментария:');
    if (this.comment == null) {
        this.empty = true;
        return;
    }

    let isRated = confirm('Могут ли ваш отзыв оценивать другие пользователи?');
    if (isRated) {
        this.rate = 0;
    }

    this.dateComment = new Date().toLocaleString();
}

function getFeedback() {

    let feedbackData = new SetFeedbackData();
    if (feedbackData.empty) {
        return;
    }

    writeFeedback(feedbackData);
}

const writeFeedback = feedbackData => {
    let rateBlock = '';
    let commentId = Math.random();
    if (feedbackData.hasOwnProperty('rate')) {
        rateBlock += `<button id=${commentId} class="rateButton" onclick="addRate(this.id)">` + `❤️ ${feedbackData.rate}</button>`
    }

    document.getElementsByClassName('feedback-space')[0].innerHTML += '<div class="feedback-block">\n' +
        `<p> <i> <b>${feedbackData['authorName']}</b>  ${feedbackData['dateComment']} ${rateBlock} </i></p>` +
        `<p>${feedbackData['comment']}</p>` + '</div>';

}

function addRate(id) {
    let element = document.getElementById(id);

    let array = element.innerText.split(' ')

    let resultNum = parseInt(array[array.length - 1], 10);

    resultNum += 1

    array[array.length - 1] = `${resultNum}`

    element.innerText = array.join(' ')
}

let currentImageIndex = 0;
let images = document.getElementsByClassName('container-item');
function initialImages() {
    for (let i = 1; i <= images.length; i++) {
        images[i].style.display = "none"
    }
}

function nextImage() {
    if (currentImageIndex >= images.length-1) setDefault();
    else {
        images[currentImageIndex].style.display = "none";
        currentImageIndex++;
        images[currentImageIndex].style = "block";
    }   
}

function prevImage() {
    if (currentImageIndex <= 0) setDefault();
    else {
        images[currentImageIndex].style.display = "none";
        currentImageIndex--;
        images[currentImageIndex].style = "block";
    }
}

function setDefault() {
    if (currentImageIndex >= images.length - 1) {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = 0;
        images[currentImageIndex].style = "block";
    }
    else {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = images.length-1;
        images[currentImageIndex].style = "block";
    }
}
