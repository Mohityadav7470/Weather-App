let cityName;
const ApiKey = "Enter your key";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&"
function getCityName(){
    cityName = document.getElementById("search-box");
    let name = (cityName.value).toLowerCase();
    console.log(name);
    getInfo(name,ApiKey);
}

const imgUrl = "images/";

async function getInfo(cityName,ApiKey) {
    try{
        const data = await fetch(ApiUrl + `q=${cityName}` + `&appid=${ApiKey}`);
        const realData = await data.json();
        const temp = realData.main.temp;
        const humid = realData.main.humidity;
        const wind = realData.wind.speed;
        const whCon = realData.weather[0].main;
        const country = realData.sys.country;
        document.getElementById("city").innerHTML = cityName + `, ${country}`;
        document.getElementById("temp").innerHTML = Math.floor(temp)+ '°C';
        console.log(temp);
        document.getElementById("humid").innerHTML = humid;
        console.log(humid);
        document.getElementById("wind").innerHTML = wind + "km/h";
        console.log(wind);
        console.log(whCon);
        
        document.getElementById("whImg").src= `images/${whCon}.png`;
    }
    catch(err){
        console.log(err);
        window.alert("Invalid Location");  
    }
}

async function futurePrediction(cityName) {
    let cnt = 4;
    try{
        const data = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=${cnt}&appid=${ApiKey}`);
        const realdata = await data.json();
        

    }
    catch(err){
        
    }
}

// https://api.openweathermap.org/data/2.5/weather?q=Bhopal&appid=440c1e9fad803d4c57ca72ed341a577a
// https://api.openweathermap.org/data/2.5/weather?&units=metric&bhopal&appid=440c1e9fad803d4c57ca72ed341a577a
