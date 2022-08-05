
const infoEl = document.getElementById("info-el")
const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const weatherImg = document.getElementById("weather-img")
const weatherDesc = document.getElementById("weather-description")
const weatherLoc = document.getElementById("weather-location")
const weatherTemp = document.getElementById("weather-temprature")
const weatherHum = document.getElementById("weather-humidity")
const weatherEl = document.querySelector(".weather")
const contentEl = document.querySelector(".content")
const backBtn = document.getElementById("back-btn")

let apiKey = "0948f20a73a2b3003cd577539adef7fc"

function fetchWeather(cityName){
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
		.then((res) => res.json())
		.then((data) => onSuccess(data))
		.catch((err) => renderError(err))
}

function onSuccess(data){

	if(data.cod == "404"){
		err = "Please enter a valid city name!"
		renderError(err)
	}
	else{
		const description = data.weather[0].description
		const temprature = data.main.temp
		const humidity = data.main.humidity
		const city = data.name
		const country = data.sys.country

		renderWeather(description,temprature,humidity,city,country)
	}
}
function renderError(err){
	
	if(err){
		infoEl.classList.add("err")
		infoEl.textContent = err
	}
}

function renderWeather(desc,temp,humid,city,country){

	infoEl.textContent = ""
	contentEl.style.display = "none"
	weatherEl.style.display = "block"
	weatherDesc.textContent = desc
	weatherLoc.textContent = `${city} , ${country}`
	weatherTemp.textContent = temp
	weatherHum.textContent = humid
}


submitBtn.addEventListener("click",function(){

	infoEl.textContent = "Fetching weather data..."
	infoEl.classList.add("wait")
	
	if(inputEl.value){
		fetchWeather(inputEl.value)
	}
	else {
		err = "Please enter a city name!"
		renderError(err)
}
}
)

backBtn.addEventListener("click", function(){
	weatherEl.style.display = "none"
	contentEl.style.display = "block"
})
