import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import weathersiwe2 from "./assets/weathersiwe2.jpg";
import "./App.css";

export default function App() {
  const coverStyle = {
    backgroundImage: `url(${weathersiwe2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  };

  return (
    <section style={coverStyle}>
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
            <a href="https://reactweathersiwe.netlify.app//" target="blank">
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}
