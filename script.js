const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", function () {
  const phoneRegex =
    /^(?!.*[^\d\s\(\)\-])(?:(?:\+?1\s?)?(?:\(\d{3}\)|\d{3}))[.\-\s]?\d{3}[.\-\s]?\d{4}$/;
  const phoneNumber = userInput.value.trim();

  if (userInput.value === "") {
    alert("Please provide a phone number");
  }

  if (phoneRegex.test(phoneNumber)) {
    resultsDiv.innerText = `Valid US number: ${phoneNumber}`;
  } else {
    resultsDiv.innerText = `Invalid US number: ${phoneNumber} `;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerText = "";
});
