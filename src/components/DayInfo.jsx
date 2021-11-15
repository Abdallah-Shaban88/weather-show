import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Hour from './Hour'

import styles from '../styles/styles.module.css'

const Slider = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    transform: ${({slidingAmount}) => slidingAmount && `translateX(-${slidingAmount}px)`};
    transition: all 1.5s ease-in;
`;

const SliderButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    text-align: center;
    line-height: 50px;
    z-index: 2;
`;

const DayInfo = ({infos, convertTime}) => {
    const [slidingAmount, setSlidingAmount] = useState(0);
    const slider =  useRef("div");

    const slidingRight = () => {
        if(slidingAmount <= slider.current.scrollWidth - slider.current.clientWidth ){
        setSlidingAmount(( slidingAmount + slider.current.clientWidth ))}
        console.log(slider.current.scrollWidth)
        console.log(slidingAmount)
    }
    
    const slidingLeft = () => {
        if(slidingAmount !== 0 ){
        setSlidingAmount(( slidingAmount - slider.current.clientWidth ))}
        console.log(slider.current.scrollWidth)
        console.log(slidingAmount)
    }
    return (
        <div style={{display: 'flex', justifyContent:"space-between", alignItems: 'center'}}>
            <SliderButton className="leftBtn" onClick={slidingLeft}>L</SliderButton>
            <div style={{ overflow:"scroll"}}>
            <Slider slidingAmount={slidingAmount} ref={slider}>
            {infos.hour.map(item => 
            <Hour 
                time = {item.time.slice(11, 16)}
                icon ={item.condition.icon} 
                text ={item.condition.text} 
                temp_c ={item.temp_c} 
                convertTime ={convertTime}
            />)}
        </Slider>
            </div>
            
            <SliderButton className="rightBtn" onClick={slidingRight}>R</SliderButton>
        </div>
    )
}

export default DayInfo
