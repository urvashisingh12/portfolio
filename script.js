const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  toggleBtn.textContent = body.classList.contains("light-mode")
    ? "🌚 Dark Mode"
    : "🌙 Light Mode";
});
