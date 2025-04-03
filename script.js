// const input = document.querySelector("input");
// const btninput = document.getElementById("btn");
// const icon = document.querySelector(".icon");
// const weather = document.querySelector(".weather");
// const temperature = document.querySelector(".temperature");
// const description = document.querySelector(".description");


// btninput.addEventListener("click",()=>{
//     let city = input.value;
//     getWeather(city);
//     console.log(input.value);
// });

// function getWeather(city){
//     console.log(city);
//     fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={92212a85b7e134706fa76e5bb965fcf6}').then(Response.json()).then(data => console.log(data))

// }

const input = document.querySelector("input");
const btninput = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btninput.addEventListener("click", () => {
    const city = input.value;
    getWeather(city);
    console.log(city);
});

function getWeather(city) {
    const apiKey = '92212a85b7e134706fa76e5bb965fcf6'; // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            const iconcode=data.weather[0].icon;
            icon.innerHTML=`<img src="http://openweathermap.org/img/w/${iconcode}.png" alt="Weather Icon"/> `;

            const weatherCity = data.name;
            const weatherCountry= data.sys.country;
            weather.innerHTML=`${weatherCity},${weatherCountry}`;

            const weatherTep = data.main.temp;
            // weatherTep = weatherTep - 273;
            // const temp = weatherTep.toFixed(2);
            temperature.innerHTML=`${weatherTep}°C`;

            const weatherDesc=data.weather[0].description;
            description.innerHTML=`${weatherDesc}`;
            // temperature.textContent = `Temperature: ${data.main.temp}°C`;
            // description.textContent = `Description: ${data.weather[0].description}`;
            // weather.textContent = `Weather: ${data.weather[0].main}`;
            // icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('City not found or API error.');
        });
}
