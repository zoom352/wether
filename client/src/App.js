import { useEffect, useState } from 'react';
import PostService from './api';
import './App.css';
import LocationMarker from './components/location';

function App() {
  const [state, setState] = useState([])
  const [bigsCity, setBigsCity] = useState([])
  const [city, setCity] = useState([
    {lat: 59.9386300, lng: 30.3141300},
    {lat: 55.7887400, lng: 49.1221400},
    {lat: 56.8519000, lng: 60.6122000},
    {lat: 53.2000700, lng: 50.1500000},
    {lat: 48.7193900, lng: 44.5018300},
    {lat: 47.2313500, lng: 39.7232800},
    {lat: 43.5991700, lng: 39.7256900},
    {lat: 50.6107400, lng: 36.5801500},
    {lat: 54.9924400, lng: 73.3685900},
    {lat: 55.7522, lng: 37.6156}, 
  ])
  const [position, setPosition] = useState({ latitude: 59.9298763315512, longitude: 30.315399169921 });
  let mas = []

  function delay() {
    return new Promise(resolve => setTimeout(resolve, 0))
  }

  async function delayedLog(item, item1) {
    const response = await PostService.getСitys(item, item1)
    mas.push(response.data)
    if(mas.length === 10) {
      setBigsCity(mas)
    }
    await delay()
  }
  
  async function getAllCitys(city) {
    city.map(async (item) => {
      await delayedLog(item.lat, item.lng)
    })
  }

  async function getWether(lat, lon) {
    const response = await PostService.getСoordinates(lat, lon)
    setState(response.data)
  }

  useEffect(() => {
    getAllCitys(city)
  }, [city])

  return (
    <div className="App">
      <LocationMarker
        certainCity={[state]}
        state={state}
        bigsCity={bigsCity}
        city={city}
        position={position}
        getWether={getWether}
      />
    </div>
  );
}

export default App;
