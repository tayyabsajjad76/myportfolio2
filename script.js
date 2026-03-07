const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const closeMenu = document.getElementById("closeMenu");

if (menuToggle && closeMenu) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

  const navLinks = document.querySelectorAll("#navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}