const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => {
    const sectionId = button.dataset.section;

    document.querySelectorAll(".section").forEach(section => {
      section.classList.remove("active-section");
    });

    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add("active-section");
      section.scrollIntoView({ behavior: "smooth" });
    }

    sidebar.classList.remove("open");
  });
});
