import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import weathersiwebg from "./assets/Image/weathersiwebg.jpg";
import "./App.css";

export default function App() {
  const coverStyle = {
    backgroundImage: `url(${weathersiwebg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100px",
    width: "100 %",
    opacity,
  };

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />

        <footer>
          This project is open sourced on{" "}
          <a
            href="https://github.com/DemureSiwe/weatherreact.git"
            target="blank"
          >
            Github
          </a>{" "}
          by Busisiwe Tsetseng and hosted on{" "}
          <a href="https://reactweather-siwe.netlify.app/" target="blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
