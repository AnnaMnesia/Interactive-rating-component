const submitBtn = document.querySelector('.submit-btn');
const firstCardContent = document.querySelector('.first-card-content');
const secondCardContent = document.querySelector('.second-card.content');
const ratingBtns = document.querySelector('.rating-btn');
const selected = document.querySelector('.selected');
let starsSelected = 4;


submitBtn.addEventListener('click', onSubmit);
ratingBtns.forEach(btn => {
    btn.addEventListener('click', selectRatingBtnClick);
});

const onSubmit = () => {
    firstCardContent.classList.add('hide');
    selected.textContent = starsSelected;
    secondCardContent.classList.remove('hide');
};

const selectRatingBtnClick = (event) => {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    if (event.target.classList.contains('rating-btn')) {
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    starsSelected = event.target.textContent;
    // console.log(starsSelected);
};

// console.log(ratingBtns);
