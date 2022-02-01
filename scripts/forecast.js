const key = "DxONpcNPvw3q7yaZjOkR7Bgp5pi02mur";

//get weather info
const getWeather = async (id) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${id}?apikey=${key}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};


// get city info
const getCity = async (city) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};

// getCity("manchester")
//   .then((data) => getWeather(data.Key))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// getWeather("329260");
