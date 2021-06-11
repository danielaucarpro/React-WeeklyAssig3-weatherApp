
import WeatherAPI from './components/API/WeatherAPI';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <>

      <WeatherAPI>
        <CurrentWeather />
      </WeatherAPI>

    </>
  );
}

export default App;
