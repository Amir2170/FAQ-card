let faq = document.querySelector('.faq');

faq.addEventListener('click', function(event) {
    let target = event.target;

    if(!target.classList.contains('question')) {
        if(target.tagName != 'IMG'){
            return;
        }
    }

    let question, answer, arrow;

    if(target.tagName == 'IMG') {
        arrow = target;
        question = target.parentElement.parentElement;
        answer = target.parentElement.parentElement.nextElementSibling;
    } else {
        question = target;
        answer = target.nextElementSibling;
        arrow = target.querySelector('span > img');
    }

    arrow.classList.toggle('rotate');

    question.classList.toggle('question-clicked');

    answer.hidden = !(answer.hidden);
});
