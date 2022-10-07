console.clear();

const bookmark = document.querySelector('[data-js="bookmark-button"]');
const icon = document.querySelector('[data-js="bookmark-icon"]');

bookmark.addEventListener("click", () => {
  icon.classList.toggle("bookmark--active");
});

/*2nd card */

const bookmarkTwo = document.querySelector(
  '[data-js="bookmark-button-second"]'
);
const iconTwo = document.querySelector('[data-js="bookmark-icon-second"]');

bookmarkTwo.addEventListener("click", () => {
  iconTwo.classList.toggle("bookmark--active");
});

/*3rd card */

const bookmarkThree = document.querySelector(
  '[data-js="bookmark-button-third"]'
);
const iconThree = document.querySelector('[data-js="bookmark-icon-third"]');

bookmarkThree.addEventListener("click", () => {
  iconThree.classList.toggle("bookmark--active");
});

/*card1 answer*/

const answerButton = document.querySelector('[data-js="button-answer"]');
const answerParagraph = document.querySelector('[data-js="card-answer-text"]');
answerButton.addEventListener("click", () => {
  answerParagraph.classList.toggle("card__answer--active");
});

/*card2 answer */

const answerButtonTwo = document.querySelector('[data-js="button-answer-two"]');
const answerParagraphTwo = document.querySelector(
  '[data-js="card-answer-text-two"]'
);
answerButtonTwo.addEventListener("click", () => {
  answerParagraphTwo.classList.toggle("card__answer--active");
});

/*card3 answer */

const answerButtonThree = document.querySelector(
  '[data-js="button-answer-three"]'
);
const answerParagraphThree = document.querySelector(
  '[data-js="card-answer-text-three"]'
);
answerButtonThree.addEventListener("click", () => {
  answerParagraphThree.classList.toggle("card__answer--active");
});
