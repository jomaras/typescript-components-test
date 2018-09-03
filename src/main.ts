import { EmailValidatorRenderer } from './email-validator/EmailValidator';

console.log("Executed")
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    EmailValidatorRenderer.render(main);
});