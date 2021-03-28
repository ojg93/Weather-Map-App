var cityInput = document.getElementById('search-input').value;
var searchBtn = document.getElementById("button-addon2");
var apiKey = "77a4ff562f526079987059470ce3f460"
var url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
var lat = 0; 
var lon = 0;
var cityNameEl = document.getElementById("name");
var tempEL = document.getElementById("temp");
var windSpeedEL = document.getElementById("wind-speed");
var uvIndexEL = document.getElementById("uv-index");
var humidityEL = document.getElementById("humidity");
var humidity5DayEl1 = document.getElementById("5dayhumidity1")
var humidity5DayEl2 = document.getElementById("5dayhumidity2")
var humidity5DayEl3 = document.getElementById("5dayhumidity3")
var humidity5DayEl4 = document.getElementById("5dayhumidity4")
var humidity5DayEl5 = document.getElementById("5dayhumidity5")




//create event listener for when search button is pressed
searchBtn.addEventListener("click", function(){
    
    var cityInput = document.getElementById('search-input').value;
 
        console.log("clicked")
        getLatLong(cityInput)
        getFiveDays(cityInput)
       
        
})

//function to get the current city data from Api
function getCurrentCity(cityName){
 fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={alert}&appid=" + apiKey).then(function(response){
    return response.json()
 }).then(function(data){
     console.log(data);
     showWeather(data);
     showFiveDaysIcon(data);
     showFiveDaysTemp(data);
 })
}
//get the lat and long of each city
function getLatLong(cityName){

var geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q="+ cityName + "&limit=5&appid=" + apiKey;

fetch(geoUrl).then(function(response){
  return response.json()  

}).then(function(data){
    lat = data[0].lat
    lon = data[0].lon
    console.log(data)
    getCurrentCity(cityName)
    saveToLocal()
    
    
}).catch(e => {
    console.log(e);
})
}

// function getFiveDays(cityName){
//    var fiveDayUrl = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
//    fetch(fiveDayUrl).then(function(response){
//     return response.json()  
  
//   }).then(function(data){
//       console.log(data)
// })

//saves input to local storage and appends to "save box"
function saveToLocal(){
    var results = cityInput.value
    localStorage.setItem("city", results);
    console.log(results)  
}

//function to save search and loop through new inputs from search
// function showFromLocal{

// }


///append function
function showWeather(data){
console.log(data)
    tempEL.append(data.current.temp);
    windSpeedEL.append(data.current.wind_speed);
    uvIndexEL.append(data.current.uvi);
    humidityEL.append(data.current.humidity);
}


 function showFiveDaysIcon(data){
    var iconEL1 = document.getElementById("icon1")
    var iconEL2 = document.getElementById("icon2")
    var iconEL3 = document.getElementById("icon3")
    var iconEL4 = document.getElementById("icon4")
    var iconEL5 = document.getElementById("icon5")

    iconEL1.append(data.current.weather[0].icon);
    iconEL2.append(data.current.weather[0].icon);
    iconEL3.append(data.current.weather[0].icon);
    iconEL4.append(data.current.weather[0].icon);
    iconEL5.append(data.current.weather[0].icon);
    return;
 }

 function showFiveDaysTemp(data){
    var temp5DayEL1 = document.getElementById("5daytemp1");
    var temp5DayEL2 = document.getElementById("5daytemp2");
    var temp5DayEL3 = document.getElementById("5daytemp3");
    var temp5DayEL4 = document.getElementById("5daytemp4");
    var temp5DayEL5 = document.getElementById("5daytemp5");

    temp5DayEL1.append(data.daily[0].temp.day)
    temp5DayEL2.append(data.daily[0].temp.day)
    temp5DayEL3.append(data.daily[0].temp.day)
    temp5DayEL4.append(data.daily[0].temp.day)
    temp5DayEL5.append(data.daily[0].temp.day)
}
