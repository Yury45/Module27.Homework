function getFeedback() {
    let feedbackData = {};

    feedbackData['userName'] = prompt('Введите ваше имя:');

    feedbackData['comment'] = prompt('Введите текст комментария:');

    feedbackData['date'] = new Date().toLocaleString();   

    setFeedbackBlock(feedbackData);
}

function setFeedbackBlock(feedbackData) {
    if (feedbackData['userName'] == null || feedbackData['comment'] == null) return;

    document.getElementsByClassName('feedback-space')[0].innerHTML += '<div class="feedback-block">\n' +
        `<p> <i> <b>${feedbackData['userName']}</b>  ${feedbackData['date']}</i></p>` +
        `<p>${feedbackData['comment']}</p>` +
        '</div>';
        
}