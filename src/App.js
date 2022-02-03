import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const api = {
    key: "5527139157a2b9b20479bb14dce071ab",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [City, setCity] = useState("");
  const [weather, setWeather] = useState("");
 
  function handleChange(event){
    let z= event.target.value

    setCity(z)
  }
  function handleTemp() {

  fetch(`${api.base}weather?q=${City}&units=metric&appid=${api.key}`)
  .then((data) => data = data.json())
  .then((info) => {setWeather(info)})
  console.log(weather.main.temp);
  document.getElementById("myTemp").innerHTML = weather.main.temp

}


  return (
    <div className="App">
      <div className='weather-app'>
      <input placeholder='Enter City Name...' value={City} onChange={handleChange}></input>
      <button onClick={handleTemp}>SUBMIT</button>
      <h2 id='myTemp'></h2>
      </div>
    </div>
  );
}

export default App;
