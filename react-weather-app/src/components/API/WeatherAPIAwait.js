import React from 'react';

const Context = React.createContext(); //INITIALIZING CONTEXT INSTANCE

class WeatherAPI extends React.Component {
    state = {
        weatherData: [],
        api: 'af2e529daf727ec2cbec62e2e2a2484b',
        city: 'Vancouver'
    }

    componentDidMount = async () => {
        try {
            const weatherRes = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.api}`)
            if (!weatherRes.ok) {
                throw weatherRes.statusText;
            } else {
                const weather = await weatherRes.json();
                this.setState({
                    weatherData: weather,
                })
            }
        } catch (err) {
            console.log(`Error= ${err}: Failed to fetch data`);
        }
    }

    render() {
        console.log(this.state.weatherData);
        return (
            <>
                <Context.Provider value={this.state.WeatherAPI}>
                    {this.props.children}
                </Context.Provider>
            </>
        );
    }
}

export default WeatherAPI;

export const Consumer = Context.Consumer;