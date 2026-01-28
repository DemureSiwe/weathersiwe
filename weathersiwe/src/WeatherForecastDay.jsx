import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props.data);

  // Check if props.data is defined and has necessary properties
  if (!props.data || !props.data.temperature || !props.data.dt) {
    return <div>Loading...</div>;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let dayIndex = date.getDay(); // This gets the index of the day
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[dayIndex]; // Use dayIndex to access the correct day name
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="weatherForecast-temperatures">
        <span className="weatherForecast-temperatures-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-temperatures-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
