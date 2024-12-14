const API_KEY = "b80be07a026e03e0b0eb006cec666bf1";

//아래의 fetch 다시 공부하기

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`
    }); // javaScript를 통해서 API로 다른 서버에 요청하는 것
}
//역시나 그래왔듯, javaScript가 인자로 더 많은 내용을 넘겨줄 것이다.

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
//브라우저에 이미 geolocation이 있다