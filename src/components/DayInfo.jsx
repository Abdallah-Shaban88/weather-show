import React from 'react'
import Hour from './Hour'

import styles from '../styles/styles.module.css'

const DayInfo = ({infos}) => {
    return (
        <div className={styles.dayContainer}>
            {infos.hour.map(item => 
            <Hour 
                time = {item.time.slice(11, 16)}
                icon ={item.condition.icon} 
                text ={item.condition.text} 
                temp_c ={item.temp_c} 
            />)}
        </div>
    )
}

export default DayInfo
