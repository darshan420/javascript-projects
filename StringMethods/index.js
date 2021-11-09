//HTMl elements DOM selection
const stringFormInput = document.getElementById("string-input");
const stringOutput = document.getElementById("string-output");
const methodSelect = document.querySelector("#method-select");
const firstParameterInput = document.querySelector("#first-parameter-input");
const secondParameterInput = document.querySelector("#second-parameter-input");
const form = document.querySelector("form");

//Variables declaration
let stringInput;
let selectedMethod;
let selectedMethodPos;

//Hiding the parameter input
firstParameterInput.style.display = "none";
secondParameterInput.style.display = "none";

//Function to display the output
const displayOutput = (string) => {
  stringOutput.textContent = string;
};

function setInputParameter(show, hide, placeholderText) {
  firstParameterInput.style.display = show;
  secondParameterInput.style.display = hide;

  firstParameterInput.placeholder = placeholderText;
  secondParameterInput.placeholder = placeholderText;
}

//This function gets called whenever the selected options changes
function selectedMethodFunction(selection) {
  firstParameterInput.value = secondParameterInput.value = "";
  selectedMethodPos = selection.selectedIndex;
  if (
    selectedMethodPos === 3 ||
    selectedMethodPos === 4 ||
    selectedMethodPos === 6 ||
    selectedMethodPos === 7
  ) {
    if (selectedMethodPos === 6) {
      setInputParameter(
        "block",
        "none",
        "Enter the string/char you want to get index of  "
      );
    } else if (selectedMethodPos === 7) {
      setInputParameter(
        "block",
        "none",
        "Enter the string/char you want to concat  "
      );
    } else {
      setInputParameter("block", "none", "Enter a number ");
    }
  } else if (selectedMethodPos === 5) {
    setInputParameter("block", "block", "Enter a number ");
  } else {
    setInputParameter("none", "none", "");
  }
}

//Event listener added to form so whenever the form gets submitted we get to see the output
form.addEventListener("submit", (e) => {
  e.preventDefault();
  selectedMethod = methodSelect.selectedIndex;
  stringInput = stringFormInput.value;

  switch (selectedMethod) {
    case 0:
      displayOutput(stringInput.toUpperCase());
      break;
    case 1:
      displayOutput(stringInput.toLowerCase());
      break;
    case 2:
      displayOutput(stringInput.trim());
      break;
    case 3:
      displayOutput(stringInput.charAt(+firstParameterInput.value));
      break;
    case 4:
      displayOutput(stringInput.substr(+firstParameterInput.value));
      break;
    case 5:
      displayOutput(
        stringInput.substr(
          +firstParameterInput.value,
          +secondParameterInput.value
        )
      );
      break;
    case 6:
      displayOutput(stringInput.indexOf(firstParameterInput.value));
      break;
    case 7:
      displayOutput(stringInput.concat(firstParameterInput.value));
      break;
  }
});
