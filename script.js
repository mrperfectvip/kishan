// alert("Hello Welcome to My Page");

let bar = document.querySelector(".nav-list i");
let sidebar = document.querySelectorAll(".sidebar a");

bar.addEventListener("click", function () {
  const content = document.querySelector(".sidebar");
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
});

sidebar.forEach((all) => {
  all.addEventListener("click", (e) => {
    alert("Rukk jaa BSDK Code Kar raha hu😂😂\nWhy in rush ??");
  });
});
