let eyeIcon = document.getElementById("hidden");
let password = document.getElementById("password");

eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};
// Link Navigation
const activePage = window.location.pathname;
const navLink = document.querySelectorAll("ul li a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
