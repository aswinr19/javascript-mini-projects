//get city name
//use city name to lookup weather
//fetch needed things from weather info
//display weather details

const errorEl = document.getElementById("error-el")
const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const weatherEl = document.getElementById("weather-el")

errorEl.innerHTML = `<p> </p>`

let weatherInfo = null
let apiKey = "0948f20a73a2b3003cd577539adef7fc"

function fetchWeather(cityName){
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
		.then((res) => res.json())
		.then((data) => renderWeather(data))
		.catch((err) => console.log(err))
}

function renderWeather(data){
	weatherEl.innerHTML = `<p> ${data.weather[0].description} </p>`
	console.log(data.weather[0])
}
//fetchWeather("london")

submitBtn.addEventListener("click",function(){

	errorEl.innerHTML = `<p>   </p>`

	if(inputEl.value){
		fetchWeather(inputEl.value)
	}
	else {
		errorEl.innerHTML  = `<p>Please enter a city name</p>`
	}

}
)
