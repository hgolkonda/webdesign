import React, { useEffect, useState } from 'react'
import * as action from '../../store/action/index';
import { connect } from 'react-redux';
import './days.css'
import Card from '../../components/card/card'
import { useNavigate } from 'react-router-dom';
import Search from '../../components/search/search'
// import Search from '../../components/search'
 function Days(props) {
    let navigate = useNavigate();
    const [dayWeather, setDayWeather] = useState([]);
   // const [cityName, setCityName] = useState("");
    useEffect(()=>{
        setDayWeather(props.weatherState.dayWiseWeather);
    },[props.weatherState.dayWiseWeather])
    
    function weatherClickHandler(day){
        console.log(day)
        navigate(`/timeWiseReport/${day}`)
    }
    function searchHandler(searchData){
        const [lat,lon] = searchData.value.split(" ");
        props.changeCityName(searchData.label)
        const param = {
            lat:lat,
            lon:lon
        }
        props.fetchWeather(param);

    }
    let cardItems = [];
    if(dayWeather.length>0){
        cardItems = Array.from(dayWeather).map(e=>{
            return( 
             <li onClick={()=>weatherClickHandler(e.day)}>
             <Card desc1={e.day} desc2={e.date} img={e.icon} maxTemp={e.maxTemp} minTemp={e.minTemp} />
             </li>
            )
        })
    }
 
     


  return (
   <>
   <div className='dayWeather'>
    <Search searchHandler={searchHandler}  />
    <br></br>
        <h4>{props.weatherState.cityName}</h4>
     <ul>
     {cardItems}
     </ul>
   </div>

   </>
      )
}

const mapStateToProps = (state)=>{
    return {
        weatherState:state.dayWeather
    }
}

const mapDispatcherToProps = (dispatch) =>{
    return {
        changeName: (name)=>dispatch(action.onChangeName(name)),
        fetchWeather : (data)=>dispatch(action.fetchWeatherData(data)),
        changeCityName : (cityName)=>dispatch(action.changeCityName(cityName))
    }
}


export default connect(mapStateToProps,mapDispatcherToProps)(Days)