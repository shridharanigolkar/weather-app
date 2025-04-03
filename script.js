

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
    const apiKey = 'your_api_key'; // Your API key
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
            
            temperature.innerHTML=`${weatherTep}°C`;

            const weatherDesc=data.weather[0].description;
            description.innerHTML=`${weatherDesc}`;
            
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('City not found or API error.');
        });
}
