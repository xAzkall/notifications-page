const notification = document.querySelectorAll(".notification");
const btnReadAll = document.querySelector(".btn-read-all");

notification.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.remove("new");
  });
});

btnReadAll.addEventListener("click", () => {
  notification.forEach((item) => item.classList.remove("new"));
});
