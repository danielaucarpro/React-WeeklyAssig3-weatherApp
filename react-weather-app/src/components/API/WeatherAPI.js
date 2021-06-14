import React from 'react';

const Context = React.createContext(); //INITIALIZING CONTEXT INSTANCE

const reducer = async (state, action) => {
    switch(action.type){
        case 'CHANGE_CITY':
            return{
                ...state,
                city: action.payload,
                weatherData: await fetchWeatherFromApi(action.payload)
            };
            default:
                return state;
    }
};

const ApiKey = 'a0c47b6ab43944f8aad03257211106';

const fetchWeatherFromApi = async (city) => {
    console.log('CALLED');
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}&aqi=no`)
    const data = await response.json();
    return data;
    // fetch(`http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}&aqi=no`).then((res) => {
    //     if (res.status !== 200) {
    //         console.log(`This is a Error ${res.status}`);
    //     }

    //     res.json().then((data) => {
    //         console.log(data);
    //         return data
    //     })
    //         .catch((error) => {
    //             console.log(`this is a error ${error}`);
    //         });
    // });
}

class WeatherAPI extends React.Component {
    state = {
        weatherData: {},
        api: 'a0c47b6ab43944f8aad03257211106',
        city: 'Vancouver',
        dispatch: async (action) => {
            this.setState(async (state) => await reducer(state, action));
            // console.log('IN STATE WEATHER', this.state);
            console.log('IN STATE WEATHER', await reducer(this.state, action));
        }
    }

    componentDidMount = async () => {
        this.setState({weatherData: await fetchWeatherFromApi(this.state.city)})
        console.log("DID MOUNT", await fetchWeatherFromApi(this.state.city));
    }

    render() {
        console.log(this.state.weatherData);
        return (
            <>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </>
        );
    }
}

export default WeatherAPI;

export const Consumer = Context.Consumer;