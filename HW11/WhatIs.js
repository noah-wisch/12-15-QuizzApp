let q = {
    answer: null,
    qValue: null,
};

let score = 0;

function init() {
    newQuestion();

    let button = document.querySelector('#guess');
    // button.addEventListener('click', newQuestion);
    button.addEventListener('click', checkAnswer);
}

function newQuestion() {
    let request = new XMLHttpRequest();

    request.open('GET', 'http://jservice.io/api/random');
    request.addEventListener('load', function () {
        console.log('here is the question:')
        let response = JSON.parse(request.responseText);
        let bloop = response[0];
        console.log(bloop); //this shows the object in the console

        showQuestion(bloop);
        q.answer = bloop.answer;
        q.qValue = bloop.value;
    });

    request.send();
    console.log('question sent');
}

function showQuestion(subject) {
    let question = document.querySelector('#qText');
    question.textContent = subject.question;

    let category = document.querySelector('#cat');
    category.textContent = subject.category.title;
    // console.log(subject.category.title);

    let value = document.querySelector('#point');
    point.textContent = subject.value;
}

function checkAnswer() {
    let textBox = document.querySelector('input');
    let answer = textBox.value;
    textBox.value = '';

    // score = document.querySelector('#score');
    // score.textContent = ;

    if (answer === q.answer) {
        console.log('Nice, you got it!')
        score = score + q.qValue;
        document.querySelector('#score').textContent = score;
    } else {
        console.log('Nah, try again!')
        score === score + 0;
    }
    console.log(answer);
    console.log(score);

    newQuestion();
}

window.addEventListener('load', init);