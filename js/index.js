'use strict';

const submitBtn = document.querySelector('#submit');
const email = document.querySelector('#email');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const warning = document.querySelector('.warning');
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.value.match(validEmail) || email.value === "") {
        email.style.border = '2px solid red';
        warning.classList.remove('hidden');
    } else if (email.value.match(validEmail)) {
        email.style.border = '1px solid hsl(223, 100%, 88%)';
        warning.classList.add('hidden');
    }
})