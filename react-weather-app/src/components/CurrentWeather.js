import React from 'react';
import './CurrentWeather.css'
import { Consumer } from "./API/WeatherAPI";
import { Container, Nav } from 'react-bootstrap';

export default class CurrentWeather extends React.Component {
    state = {
        enteredSearch: '',
        isCelsius: true
    }

    changeTemperature = () => {
        console.log(this.state.isCelsius)
        this.setState({
            isCelsius: !this.state.isCelsius
        })
    }

    submitHandler = (e, dispatch) => {
        e.preventDefault();
        console.log(this.state.enteredSearch)
        const newCity = this.state.enteredSearch;
        console.log(newCity);
        dispatch({ type: 'CHANGE_CITY', payload: newCity });
        this.setState({ enteredSearch: '' })
    }

    searchHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            enteredSearch: e.target.value
        })
    }


    render() {
        console.log('In Current Weather C or F');
        console.log(this.state.isCelsius);
        return (
            <Consumer>
                {(value) => {
                    return (
                        <>
                            {/* HEADER */}
                            <Nav>
                                <div className='header-container'>
                                    <h1 className='header-h1'>Weather API</h1>
                                    <form onSubmit={(e) => this.submitHandler(e, value.dispatch)} className='header-form'>
                                        <button onClick={this.changeTemperature} className='degree-button'>C°/F°</button>
                                        <div className='icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="search-icon" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                        <input onChange={this.searchHandler} className='search-input' type="search" placeholder="Search" aria-label="Search" />
                                        <button className='search-button' type="submit">Search</button>
                                    </form>
                                </div>
                            </Nav>
                            <div className='current-wrap'>
                                <Container className='current-container'>
                                    <h2 className='current-title'>Current weather in
                                        <br></br>
                                        {/* {value.city} */}
                                        <span className='current-title-span'>{value.weatherData.location.name}, {value.weatherData.location.region} - {value.weatherData.location.country}</span>
                                        {/* <br></br>
                                <span className='current-lastUpdate'>Last Update: {value.weatherData.current.last_updated}</span> */}
                                    </h2>
                                    <div className='current-temp-wrap'>
                                        <img className='current-icon' src={value.weatherData.current.condition.icon} />
                                        {this.state.isCelsius ? <p className='current-temp'>{value.weatherData.current.temp_c} °C</p>
                                            : <p className='current-temp'>{value.weatherData.current.temp_f} °F</p>}
                                    </div>
                                    <div className='current-feelLike-wrap'>
                                        <p className='current-feelLike'>{value.weatherData.current.condition.text}</p>
                                        {/* FEELS LIKE */}
                                        {this.state.isCelsius ?
                                            <p className='current-feelLike'>Feels Like: {value.weatherData.current.feelslike_c} °C</p>
                                            : <p className='current-feelLike'>Feels Like: {value.weatherData.current.feelslike_f} °F</p>}
                                    </div>
                                    <div className='current-info'>
                                        <p>Local Time: {value.weatherData.location.localtime}</p>

                                        {/* VISION */}
                                        {this.state.isCelsius ?
                                            <p>Vision: {value.weatherData.current.vis_km} km</p>
                                            : <p>Vision: {value.weatherData.current.vis_miles} miles</p>}
                                        {/* WIND SPEED */}

                                        {this.state.isCelsius ?
                                            <p>Wind Speed: {value.weatherData.current.wind_kph} kph</p>
                                            : <p>Wind Speed: {value.weatherData.current.wind_mph} mph</p>}
                                        <p>Wind Direction: {value.weatherData.current.wind_dir}</p>

                                        {/* PRESSURE */}
                                        {this.state.isCelsius ?
                                            <p>Pressure: {value.weatherData.current.pressure_mb} mb</p>
                                            : <p>Pressure: {value.weatherData.current.pressure_in} IN</p>}

                                        <p>UV: {value.weatherData.current.uv}</p>

                                        <p className='current-humidity'>Humidity: {value.weatherData.current.humidity}</p>
                                    </div>
                                </Container>
                            </div>
                        </>
                    );
                }}
            </Consumer>
        );
    }
}