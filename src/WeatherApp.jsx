import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Indore",
        feelsLike: 35.52,
        humidity: 20,
        temp: 37.1,
        tempMax: 37.1,
        tempMin: 37.1,
        weather: "few clouds"
    });

    let updateInfo= (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>
                Weather App
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}