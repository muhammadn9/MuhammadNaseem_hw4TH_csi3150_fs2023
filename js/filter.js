const filterForm = document.getElementById("filterForm");
const priceMinInput = document.getElementById("priceMin");
const priceMaxInput = document.getElementById("priceMax");
const makeFilter = document.getElementById("makeFilter");
const colorFilter = document.getElementById("colorFilter");

document.getElementById("filterButton").addEventListener("click", filterC1);

function filterC1() {
  const minPrice = parseFloat(priceMinInput.value);
  const maxPrice = parseFloat(priceMaxInput.value);

  const selectedMake = makeFilter.value;
  const selectedColor = colorFilter.value;

  const c1 = document.querySelectorAll(".c1");

  c1.forEach((c1) => {
    const c1Price = parseFloat(c1.getAttribute("data-price"));
    const c1Make = c1.getAttribute("data-make");
    const c1Color = c1.getAttribute("data-color");

    if (
      c1Price >= minPrice &&
      c1Price <= maxPrice &&
      (selectedMake === "AllMakes" || c1Make === selectedMake) &&
      (selectedColor === "AllColors" || c1Color === selectedColor)
    ) {
      c1.style.display = "block";
    } else {
      c1.style.display = "none";
    }
  });
}
