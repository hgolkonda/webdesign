import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import * as action from '../../store/action/index';
import { connect } from 'react-redux';
import Card from '../../components/card/card'
import './hourlyWeather.css'

 function HourlyWeather(props) {
  const navigate = useNavigate();
  let {day} = useParams();
  const [timeWiseData, setTimeWiseData] = useState([]);
  useEffect(()=>{
    if(day){
      console.log(props.weatherState.timeWiseWeather[day]);
      setTimeWiseData(props.weatherState.timeWiseWeather[day]);

    }
  },[props.weatherState.timeWiseWeather])
  
  function goBackHandler(){
    navigate('/')
  }

  let cardItems = [];
    if(timeWiseData.length>0){
        cardItems = Array.from(timeWiseData).map(e=>{
            return( 
             <li>
             <Card desc1={e.time} desc2={e.date} img={e.icon} maxTemp={e.maxTemp} minTemp={e.minTemp} />
             </li>
            )
        })
    }


  return (
    <div className='timeWeather'>
      <h3>{day}</h3>
      <ul>
      {cardItems}
      </ul>
      <Button variant="primary" onClick={goBackHandler}>Go Back</Button>{' '}
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
      weatherState:state.dayWeather
  }
}
const mapDispatcherToProps = (dispatch) =>{
  return {
      changeName: (name)=>dispatch(action.onChangeName(name))
  }
}
export default connect(mapStateToProps,mapDispatcherToProps)(HourlyWeather)