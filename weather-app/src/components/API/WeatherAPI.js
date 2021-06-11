import React from 'react';

const Context = React.createContext(); //INITIALIZING CONTEXT INSTANCE

class WeatherAPI extends React.Component {
    state = {
        weatherData: [],
        api: 'af2e529daf727ec2cbec62e2e2a2484b',
        city: 'Vancouver'
    }

    componentDidMount = () => {
        
        fetch("api.openweathermap.org/data/2.5/weather?q=vancouver&appid=af2e529daf727ec2cbec62e2e2a2484b").then((res) => {
            if (res.status !== 200) {
                console.log(`This is a Error ${res.status}`);
            }

            res.json().then((data) => {
                console.log(data);
                this.setState({
                    weatherData: data
                });
            })
                .catch((error) => {
                    console.log(`this is a error ${error}`);
                });
        });
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