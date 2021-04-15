const personImg = document.querySelector(".person-img");
const personName = document.querySelector(".person-name");
const personJob = document.querySelector(".job");
const personInfo = document.querySelector(".description");

const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  const { img, name, job, text } = reviews[currentItem];
  setPerson(img, name, job, text);
});

//Sets single person
const setPerson = (img, name, job, text) => {
  personImg.src = img;
  personName.textContent = name;
  personJob.textContent = job;
  personInfo.textContent = text;
};
const showPerson = (person) => {
  const { img, name, job, text } = reviews[person];
  setPerson(img, name, job, text);
};

prevButton.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});
nextButton.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});
