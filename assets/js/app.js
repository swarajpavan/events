const selectedCars = document.getElementById("selectCars");
const companies = [...document.querySelectorAll('.allcars')];

const oncolorchange = (eve) => {
   let selectedColor = eve.target.value;

   companies.forEach(div => div.classList.add('d-none'));

   let selectedDiv = [...document.querySelectorAll("." + selectedColor)];

   selectedDiv.forEach(div => div.classList.remove('d-none'));
}

selectedCars.addEventListener('change', oncolorchange);