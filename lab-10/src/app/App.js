import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Days from './pages/days/days';
import Hours from './pages/hourlyWeather/hourlyWeather'
import axios from 'axios';
import {BrowserRouter,Routes,Route, json} from 'react-router-dom'
import { useEffect } from 'react';
import data from './data.json'
import { connect } from 'react-redux';
import * as action from './store/action/index';



function App(props) {
  useEffect(()=>{
   // props.fetchWeatherData();
  },[])
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path = "/" element = {<Days/>}></Route>
      <Route path = "/timeWiseReport/:day" element = {<Hours/>}></Route>
    </Routes>

    </div>
    </BrowserRouter>

  );
}
const mapStateToProps = (state)=>{
  return {
      weatherState:state.dayWeather
  }
}

const mapDispatcherToProps = (dispatch) =>{
  return {
      fetchWeatherData: ()=>dispatch(action.fetchWeatherData())
  }
}
export default connect(mapStateToProps,mapDispatcherToProps)(App)
