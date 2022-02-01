const cityForm = document.querySelector(".change-location");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");


const updateUI = (data) => {

  const {cityDets, weather} = data;

  //Update Ui
  details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3"${weather.weatherText}</div>
        <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>
    `;

  // update the night/day icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  let timeSrc = weather.isDayTime ? 'img/day.svg' : 'img/night.svg';

  time.setAttribute('src', timeSrc);

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove("d-none")
  }

}

const updateCity = async (city) => {

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);


  return {
    cityDets,
    weather
  }
}



cityForm.addEventListener("submit", e => {
  //Prevent default action
  e.preventDefault();

  // GEt city name
  let city = cityForm.city.value;
  cityForm.reset();

  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});
