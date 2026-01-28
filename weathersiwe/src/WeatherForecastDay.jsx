import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props.data);
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return day[day];
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="weatherForecast-temperatures">
        <span className="weatherForecast-temperatures-max">
          {maxTemperature()}°
        </span>
        <span className="weatherForecats-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
