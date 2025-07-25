document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".study-item.has-details");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  });
});
