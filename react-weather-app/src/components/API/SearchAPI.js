import React from 'react';

const Context = React.createContext(); //INITIALIZING CONTEXT INSTANCE

class SearchWeather extends React.Component {
    state = {
        weatherData: [],
        api: 'a0c47b6ab43944f8aad03257211106',
        city: 'Vancouver'
    }

    componentDidMount = async () => {
        try {
            const weatherRes = await fetch(`http://api.weatherapi.com/v1/search.json?key=${this.state.api}&q=${this.state.city}`)
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