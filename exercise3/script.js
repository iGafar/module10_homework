const message = document.querySelector(".message");
const submit = document.querySelector(".submit");
const geolocation = document.querySelector(".geolocation");
const chatEmpty = document.querySelector(".chat-empty");
const chat = document.querySelector(".chat");
const echoUrl = "wss://echo-ws-service.herokuapp.com";
const geolocationUrl = "https://www.openstreetmap.org/#map=18/";

let geoLink = document.createElement("a");
geoLink.target = "_blank";

let echo = new WebSocket(echoUrl);
echo.onopen = function () {};

echo.onmessage = function (evt) {
  let serverMessage = document.createElement("p");
  serverMessage.className = "server-message";
  serverMessage.textContent = evt.data;
  chat.append(serverMessage);
};

echo.onerror = function (error) {
  alert("Ошибка сервера");
};



submit.addEventListener("click", function () {
  if (message.value == "Закрыть чат") {
    chat.innerHTML = '';
    return echo.onclose = function(){
      alert('finish')
    };
  }
  chatEmpty.style.display = "none";
  echo.send(message.value);
  let userMessage = document.createElement("p");
  userMessage.className = "user-message";
  userMessage.textContent = message.value;
  chat.append(userMessage);
});

const error = () => {
  geoLink.textContent = "Невозможно получить ваше местоположение";
};

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  geoLink.textContent = "Ваше местоположение";
  geoLink.href = `${geolocationUrl}${latitude}/${longitude}`;
};

geolocation.addEventListener("click", () => {
  chatEmpty.style.display = "none";
  geoLink.textContent = "";
  chat.append(geoLink);
  geoLink.href = "";

  if (!navigator.geolocation) {
    geoLink.textContent = "Не поддерживается вашим браузером";
  } else {
    geoLink.textContent = "Определение местоположения";
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
