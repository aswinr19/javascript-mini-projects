
const errorEl = document.getElementById("error-el")
const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const weatherImg = document.getElementById("weather-img")
const weatherDesc = document.getElementById("weather-description")
const weatherLoc = document.getElementById("weather-location")
const weatherTemp = document.getElementById("weather-temprature")
const weatherHum = document.getElementById("weather-humidity")
const weather = document.querySelector(".weather")
const content = document.querySelector(".content")

weather.display = "none"

let weatherInfo = null
let apiKey = "0948f20a73a2b3003cd577539adef7fc"

function fetchWeather(cityName){
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
		.then((res) => res.json())
		.then((data) => renderWeather(data))
		.catch((err) => console.log(err))
}

function renderWeather(data){
	content.style.display = "none"
	weather.style.display = "block"
	errorEl.innerHTML = ""

	if(data.cod == "404"){
		errorEl.innerHTML = "Please enter a valid city name" 
	}else{

		if(data.weather.main == "Clouds"){
			weatherImg.setAttribute('src','/icons/cloud.svg')
		}
		else if(data.weather.main == "Rain"){
			weatherImg.setAttribute('src','/icons/rain.svg')
		}
	weatherDesc.innerHTML = ` ${data.weather[0].description}  `
	weatherLoc.innerHTML = ` ${data.name} , ${data.sys.country} `
	weatherTemp.innerHTML = `${data.main.temp} `
	weatherHum.innerHTML = `${data.main.humidity}`
		console.log(data)
	}
}
//fetchWeather("london")

submitBtn.addEventListener("click",function(){

	errorEl.innerHTML = "Fetching weather data..."
	weatherDesc.innerHTML = ""
	if(inputEl.value){
		fetchWeather(inputEl.value)
	}
	else {
		errorEl.innerHTML  = `<p>Please enter a city name</p>`
	}

}
)
