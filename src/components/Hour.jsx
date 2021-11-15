import React from 'react'

import styles from '../styles/styles.module.css'


const Hour = ({text, icon, temp_c, time, convertTime}) => {
    
    return (
      
        <div className={styles.hour}>
            <span>{convertTime(time)}</span>
            <img src={icon} alt={text}/>
            <span>{text}</span>
            <span>{temp_c}</span>
        </div>
    )
}

export default Hour
