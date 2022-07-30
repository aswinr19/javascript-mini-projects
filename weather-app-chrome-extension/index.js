//console.log("hello world!")
const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const weatherEl = document.getElementById("weather-el")

let defaultCity = "london"
let city = inputEl.value
let weatherInfo = null
let apiKey = "0948f20a73a2b3003cd577539adef7fc"

async function fetchData(cityName){
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
	const data = await response.json()
	console.log(data.weather[0].description)
	return data
	}

 fetchData("london")


function checkWeather(city){

}

function render(){


}

	
// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));




//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=0948f20a73a2b3003cd577539adef7fc
