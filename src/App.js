import React, {useState,useEffect} from "react";
import axios from 'axios'
import "./style.css";

import Banner from './components/Banner'
import DayInfo from './components/DayInfo'
import WeekInfo from "./components/WeekInfo";
import ExtraDetails from "./components/ExtraDetails";

export default function App() {
  const[info, setInfo] = useState([])

  const getData = async () => {
    const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=35360d18e86c4006a60111222212904&q=giza');
    const data = await response.data;
      setInfo(data)
  }
  useEffect(() => {
    getData()
  },[])

  function convertTime (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join ('');
}

  return (
    <div>
      {info.length !== 0 ? <div >
      <Banner 
        time ={info.location.localtime.slice(11, 16)}
        name ={info.location.name} 
        temp_c={info.current.temp_c} 
        icon ={info.current.condition.icon} 
        text={info.current.condition.text} 
        convertTime = {convertTime}
        />
      <ExtraDetails
        windKPH ={info.current.wind_kph}
        windDegree ={info.current.wind_degree}
        windDir ={info.current.wind_dir}
        pressureIn ={info.current.pressure_in}
        humidity ={info.current.humidity}
        cloud ={info.current.cloud}
        feelsLikeC ={info.current.feelslike_c}
        visibility ={info.current.vis_km}
        uv ={info.current.uv}
        gust ={info.current.gust_kph}
      />  
      <DayInfo infos={info.forecast.forecastday[0]} convertTime={convertTime}/>
    </div> : console.log('false')}
    <WeekInfo />
    </div>
  );
}
