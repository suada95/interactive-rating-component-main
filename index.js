const ratings = document.querySelectorAll('.rating');
const button = document.querySelector('.button');
const cardInitial = document.querySelector('.card-initial');
const cardThankYou = document.querySelector('.card-thank-you');
const selectedRatingSpan = document.querySelector('.selected-rating');

ratings.forEach((rating) => {
    rating.addEventListener('click', function (event) {
        event.preventDefault();

        ratings.forEach((rating) => {
            rating.classList.remove('selected');
        });

        this.classList.add('selected');
    });
});

button.addEventListener('click', function (event) {
    event.preventDefault();

    const selectedRating = document.querySelector('.rating.selected');
    const selectedRatingValue =
        selectedRating !== null ? selectedRating.getAttribute('data-val') : 0;

    if (selectedRating === null) {
        alert('Please select a rating before clicking submit');
        return false;
    }

    cardInitial.classList.add('hidden');
    selectedRatingSpan.innerHTML = selectedRatingValue;
    cardThankYou.classList.remove('hidden');
});