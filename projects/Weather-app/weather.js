const form = document.querySelector('form');

const inputText = document.querySelector("input[type='text']");

const icon = document.querySelector("#weather-icon");

const desc = document.querySelector("#description");

const city = document.querySelector("#location");

const degree = document.querySelector("#degree");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&units=metric&appid=a4fdb97329e04a468a85dfbc5bb6d33e`)
	.then(res => res.json())
	.then(data => {
		const icon2 = data.weather[0].icon;
		city.textContent = data.name;
		degree.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>C`;
		icon.src = `http://openweathermap.org/img/wn/${icon2}.png`;
		desc.innerHTML = data.weather[0].description;
	})
})