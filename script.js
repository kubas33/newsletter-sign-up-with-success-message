const submit = document.getElementById("submit-btn");
const dismiss = document.getElementById("dismiss-btn");
const signUpSect = document.querySelector("section.sign-up");
const confirmSect = document.querySelector("section.confirmation");
const form = document.querySelector("form");


function toggleVisibility() {
    signUpSect.classList.toggle("hidden");
    confirmSect.classList.toggle("hidden");
}

form.addEventListener("click", (event) => {
    toggleVisibility();
    event.preventDefault();
});

dismiss.addEventListener("click", (event) => {
    toggleVisibility();
});
