const toggleButtons = document.querySelectorAll(".toggleButton");
const additionalInfos = document.querySelectorAll(".additionalInfo");

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (additionalInfos[index].style.display === "none") {
      additionalInfos[index].style.display = "block";
      button.textContent = "Hide Info";
    } else {
      additionalInfos[index].style.display = "none";
      button.textContent = "Info";
    }
  });
});
