const form = document.querySelector('#form');
const input = document.querySelector('#city');
let high = document.getElementById('high')
let low = document.getElementById('low')
let average = document.getElementById('average')
let humid = document.getElementById('humid')
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let todaysdate = document.getElementById('todaysdate')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let cityName = event.target.children[0].value
    let jsonData = getWeather(cityName)
})


async function getWeather(cityName) {
    let APIKey = '6c386d2933d273cc964e6c791d621181';
    let request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIKey}`);
    let result = await fetch(request);
    let response = await result.json();
    let rounder = Math.round(response.main.temp_max)
    let rounder2 = Math.round(response.main.temp_min)
    console.log(response);
    high.innerText = rounder
    low.innerText = rounder2
    let average2 = Math.round((rounder + rounder2) / 2)
    average.innerText = average2 
    todaysdate.innerText = `${mm}/${dd}/${yyyy}`
    humid.innerText = response.main.humidity
    console.log(response.main.temp_min);
    console.log(response.main.temp_max);
}