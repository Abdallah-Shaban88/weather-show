import React,{useEffect, useState} from 'react'
import axios from 'axios'

import Day from './Day'

const WeekInfo = () => {
    const[week,setWeek] = useState([])
    const getData = async () => {
        const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=35360d18e86c4006a60111222212904&q=giza&days=7');
        const data = await response.data.forecast.forecastday;
          setWeek(data)
      }
      useEffect(() => {
        getData()
      },[])
    return (
        <div>
            {week.map(day => 
                <Day 
                  icon={day.day.condition.icon}
                  text={day.day.condition.text}
                  maxtemp={day.day.maxtemp_c}  
                  mintemp={day.day.mintemp_c}  
                  date={day.date} 
                />)}
        </div>
    )
}

export default WeekInfo
