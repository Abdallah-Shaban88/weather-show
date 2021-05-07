import React from 'react'


const Day = ({icon, text, maxtemp, mintemp, date}) => {
    return (
        <div>
            <img src={icon} alt={text} />
            <span>{`${maxtemp}/${mintemp}`}</span>
            <span>{date}</span>
        </div>
    )
}

export default Day
