const dismiss = document.getElementById("dismiss-btn");
const form = document.querySelector("form");
const input = document.querySelector("input");
let previousErrorId = null;

function toggleVisibility() {
    const signUpSect = document.querySelector("section.sign-up");
    const confirmSect = document.querySelector("section.confirmation");
    signUpSect.classList.toggle("hidden");
    confirmSect.classList.toggle("hidden");
}

function setError(input, errorId, message) {
    if (previousErrorId !== errorId) {
      const error = form.querySelector(`#${previousErrorId}`);
      if (error) {
        form.removeChild(error);
        console.log(error.getAttribute("id") + " removed");
      }
      previousErrorId = errorId;
    }
    
    const existingError = form.querySelector(`#${errorId}`);
    if (existingError) {
      return;
    }
  
    const newError = document.createElement("p");
    newError.classList.add("error");
    newError.setAttribute("id", errorId);
    newError.textContent = message;
    form.appendChild(newError);
    console.log(newError.getAttribute("id") + " created")
  
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedBy", newError.id);
  }
  
  function removeError(input) {
    const error = form.querySelector(".error");
    if (error) {
      form.removeChild(error);
      previousErrorId = null;
      console.log(error.getAttribute("id") + " removed");
    }
    
    input.classList.remove("invalid");
    input.setAttribute("aria-invalid", "false");
    input.removeAttribute("aria-describedBy");
  }

function handleInput(event) {
  const input = this;
  if (input.validity.valueMissing) {
    setError(input, "val-missing", "Email cannot be empty");
  } else if (input.validity.typeMismatch) {
    setError(input, "wrong-mail", "Valid email required");
  } else {
    removeError(input);
  }
}

input.addEventListener("input", handleInput);
input.addEventListener("click", handleInput);
input.addEventListener("focus", handleInput);

form.addEventListener("submit", e => {
  e.preventDefault();
  handleInput.call(input);
  if (form.checkValidity()) {
    toggleVisibility();
    document.getElementById("email-addr").textContent = input.value;
  }
});

dismiss.addEventListener("click", (event) => {
  form.reset();
  toggleVisibility();
});
