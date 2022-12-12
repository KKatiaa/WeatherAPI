import { Component } from "react";

import Form from '../form/form';
import Weather from '../weather/weather';

const API_KEY = "a1bc8049ce061633c0436c0cc03cbb53";


class App extends Component {

    state = {
        temp:undefined,
        feelsLike:undefined,
        city:undefined,
        country:undefined,
        sunrise:undefined,
        sunset:undefined,
        error:undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            this.setState({
                temp: data.main.temp,
                feelsLike: data.main.feels_like,
                city: data.name,
                country: data.sys.country,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                error: undefined
            });
            console.log(data);
        } else {
            this.setState({
                temp:undefined,
                feelsLike:undefined,
                city:undefined,
                country:undefined,
                sunrise:undefined,
                sunset:undefined,
                error: "Maybe you enter the wrong city name"
            });
        }
    }

    render() {
        return(
            <div>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                temp={this.state.temp}
                feelsLike={this.state.feelsLike}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}/>
            </div>
        )
    }
}

export default App;