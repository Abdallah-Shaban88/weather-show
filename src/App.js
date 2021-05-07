import React, {useState,useEffect} from "react";
import axios from 'axios'
import "./style.css";

import Banner from './components/Banner'
import DayInfo from './components/DayInfo'
import WeekInfo from "./components/WeekInfo";

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
  return (
    <div>
      {info.length !== 0 ? <div >
      <Banner 
        name ={info.location.name} 
        temp_c={info.current.temp_c} 
        icon ={info.current.condition.icon} 
        text={info.current.condition.text} />
      <DayInfo infos={info.forecast.forecastday[0]} />
    </div> : console.log('false')}
    <WeekInfo />
    </div>
  );
}
