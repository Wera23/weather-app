const API_KEY = "0083b6930a5af544a07904eba6e476c6";

export const getWeather = async (city, country) => {
  await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong ...");
    }
  });
};
