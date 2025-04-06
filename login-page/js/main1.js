import { users } from "./credentials.js";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = `${window.location.origin}/edlance/home-page/home1.html?name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(user.email)}`;

    }
});
