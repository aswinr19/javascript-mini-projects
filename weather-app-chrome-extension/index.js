
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


let apiKey = ""

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
		const id = data.weather[0].id
		const description = data.weather[0].description
		const temprature = data.main.temp - 273.15
		const humidity = data.main.humidity
		const city = data.name
		const country = data.sys.country

		renderWeather(description,id,temprature,humidity,city,country)
	}
}
function renderError(err){
	
	if(err){

		infoEl.classList.remove("wait")
		infoEl.classList.add("err")
		infoEl.textContent = err
	}
}

function renderWeather(desc,id,temp,humid,city,country){

	infoEl.textContent = ""
	contentEl.style.display = "none"
	weatherEl.style.display = "block"

	if(id == 800){
		weatherImg.src = "icons/clear.svg";
	}else if(id >= 200 && id <= 232){
		weatherImg.src = "icons/storm.svg";  
	}else if(id >= 600 && id <= 622){
		weatherImg.src = "icons/snow.svg";
	}else if(id >= 701 && id <= 781){
		weatherImg.src = "icons/haze.svg";
	}else if(id >= 801 && id <= 804){
		weatherImg.src = "icons/cloud.svg";
	}else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
		weatherImg.src = "icons/rain.svg";
	}

	weatherDesc.textContent = desc
	weatherLoc.innerHTML = `<img src="pin.png" > ${city} , ${country}`
	weatherTemp.innerHTML = `${temp.toFixed(1)} &deg; C`
	weatherHum.innerHTML = `<img src="hum.png" > ${humid} % `
}


submitBtn.addEventListener("click",function(){

	infoEl.classList.add("wait")
	infoEl.textContent = "Fetching weather data..."
	
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
	inputEl.value = ""

})
