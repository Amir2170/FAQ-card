let faq = document.querySelector('.faq');

faq.addEventListener('click', function(event) {
    let target = event.target;

    if(target.tagName != 'IMG') return;

    target.classList.toggle('rotate');

    let question = target.parentElement.parentElement;

    question.classList.toggle('question-clicked');

    let answer = target.parentElement.parentElement.nextElementSibling;

    answer.hidden = !(answer.hidden);
})
