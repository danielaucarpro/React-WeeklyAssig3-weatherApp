import WeatherAPI from './components/API/WeatherAPI';
import CurrentWeather from './components/CurrentWeather';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const saveSearchHandler = (value) => {
    console.log('In APP');
    console.log(value);
    setSearchValue(value);
  }

  return (
    <>
      <WeatherAPI citySearched={searchValue}>
        <CurrentWeather>
          onSaveSearch = {saveSearchHandler}
        </CurrentWeather>
      </WeatherAPI>
      <Footer />
    </>
  );
}

export default App;
