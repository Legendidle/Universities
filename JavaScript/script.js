var elForm = document.querySelector(".main__form");
var elSelect = document.querySelector(".main__select");
var elInput = document.querySelector(".main__input")
var elOutput = document.querySelector(".main__output");
var elAnswer = document.createElement("p");

elOutput.appendChild(elAnswer)
elAnswer.setAttribute("class", "text-p")

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var inputValue = Number(elInput.value);
  var selectValue = Number(elSelect.value);

  if (inputValue >= 210) {
    elAnswer.textContent = "Congratulations, You win Scholarship"
  }

  else if (inputValue <= 0) {
    elAnswer.textContent = "Please write a number other than 0!"
  }

  else if(inputValue >= selectValue) {
    elAnswer.textContent = "Congratulate you Passed"
  }

  else if (isNaN(inputValue)) {
    elAnswer.textContent = "Please write a number!"
    return;
  }

  else if (isNaN(selectValue)) {
    elAnswer.textContent = "Please choose a university"
    return;
  }

  else if (inputValue < selectValue ) {
    elAnswer.textContent = "Sorry, you failed ("
    return;
  }

})