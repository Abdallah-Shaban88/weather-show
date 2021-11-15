import React from 'react'
import styled from 'styled-components'
import {WiWindDeg, WiStrongWind, WiCloud, WiHumidity, WiDust, WiCelsius} from "react-icons/wi";

const ItemsContainer = styled.div`
    width : 70%;
    height: 350px;
    margin-left: auto;   
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    background-color: rgba(255, 255, 255, 0.404);
`;

const Item = styled.div`
    width: 250px;
    height: 70px;
    justify-self: center;
    display: flex;
    align-items: center;
    background: none;
    border-radius: 30px;
    color: #fff;
    font-size: 1.5rem;
`;


const ExtraDetails = ({windKPH, windDegree, windDir, pressureIn, humidity, cloud, feelsLikeC,visibility, uv, gust}) => {
    return (
        <ItemsContainer>
            <Item><WiStrongWind style={{fontSize: "3.5rem"}}/> {windKPH}</Item>
            <Item><WiWindDeg style={{fontSize: "3.5rem"}}/>     {windDegree}</Item>
            <Item>Wind Direction: {windDir}</Item>
            <Item>Pressure: {pressureIn}</Item>
            <Item><WiHumidity style={{fontSize: "3.5rem"}}/> {humidity}</Item>
            <Item><WiCloud style={{fontSize: "3.5rem"}}/> {cloud}</Item>
            <Item>{feelsLikeC}  <WiCelsius style={{fontSize: "3rem"}}/></Item>
            <Item>Visibility {visibility}</Item>
            <Item>VC {uv}</Item>
            <Item><WiDust style={{fontSize: "3.5rem"}}/> {gust}</Item>    
        </ItemsContainer>
    )
}

export default ExtraDetails
