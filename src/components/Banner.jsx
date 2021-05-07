import React from 'react'

import styles from '../styles/styles.module.css'

const Banner = ({name,temp_c, icon, text }) => {
    return (
        <div className={styles.banner}>
            <span>{name}</span>
            <img src={icon} alt={text} />
            <span>{temp_c}</span>
            <span>{text}</span>

        </div>
    )
}

export default Banner
