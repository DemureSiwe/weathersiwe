import WeatherIcon from "./WeatherIcon";
import "./Weatherforecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherforecast-day">Thu</div>
          <WeatherIcon code="01d" size={38} />
          <div className="weatherForecast-temperatures">
            <span className="weatherForecast-temperatures-max">19°</span>
            <span className="weatherForecats-temperature-min">4°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
