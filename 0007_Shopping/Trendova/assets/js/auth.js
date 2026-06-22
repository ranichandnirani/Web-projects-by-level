"use strict";

const authForm = document.querySelector("[data-auth-form]");
const feedback = document.querySelector("[data-auth-feedback]");
const password = document.querySelector("#signup-password");
const confirmPassword = document.querySelector("#signup-confirm-password");

if (authForm && feedback) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.hidden = true;

    if (confirmPassword && password) {
      confirmPassword.setCustomValidity(
        confirmPassword.value === password.value ? "" : "Passwords do not match.",
      );
    }

    if (!authForm.reportValidity()) return;

    feedback.textContent = authForm.hasAttribute("data-signup-form")
      ? "Your details look good. Account creation is a demo and is not connected to a server."
      : "Your details look good. Sign-in is a demo and is not connected to a server.";
    feedback.hidden = false;
  });

  authForm.addEventListener("input", (event) => {
    if (event.target === password || event.target === confirmPassword) {
      confirmPassword?.setCustomValidity("");
    }
    feedback.hidden = true;
  });
}
