const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-section");

    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    sections.forEach((section) => {
      section.classList.remove("active-section");
    });

    const selectedSection = document.getElementById(target);

    if (selectedSection) {
      selectedSection.classList.add("active-section");
      selectedSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    sidebar.classList.remove("open");
  });
});

/* View Projects button */
document.querySelectorAll('[data-go="projects"]').forEach((button) => {
  button.addEventListener("click", () => {
    const projectNav = document.querySelector(
      '[data-section="projects"]'
    );

    if (projectNav) {
      projectNav.click();
    }
  });
});

/* Contact button */
document.querySelectorAll('[data-go="contact"]').forEach((button) => {
  button.addEventListener("click", () => {
    const contactNav = document.querySelector(
      '[data-section="contact"]'
    );

    if (contactNav) {
      contactNav.click();
    }
  });
});

/* Change profile/logo photo */
const logoInput = document.getElementById("logoInput");
const mainLogo = document.getElementById("mainLogo");

if (logoInput && mainLogo) {
  logoInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        mainLogo.src = event.target.result;
      };

      reader.readAsDataURL(file);
    }
  });
}
