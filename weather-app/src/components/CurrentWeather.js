import React from 'react';
import { Consumer } from "./API/WeatherAPI";

export default class CurrentWeather extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    return(
                        <>
                        {/* <p>city: {value.weatherData.name}</p> */}
                        {/* {value.weatherData.map((weather) =>
                            <div className='weather-wrap'>
                                <p>{weather.main}</p>

                            </div>
                        )} */}
                        </>
                    );
                }
                }
            </Consumer>
        );
    }
}