import * as TYPE from '../type'
import axios from 'axios'
import * as API_DATA from '../../Constants/API_DATA'

export const onChangeName = (name)=>{
    return {
        type: TYPE.DAY_TYPE,
        name:name
    }
}

export const fetchWeatherData = (data) =>{
    let days = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    return dispatch =>{
        axios.get(`${API_DATA.WEATHER_URL}/forecast?lat=${data.lat}&lon=${data.lon}&appid=${API_DATA.API_KEY}&units=metric`).then((response)=>{
            var weatherList = response.data.list;
            let timeWiseWeather = {};
            weatherList.forEach(e=>{
              if(e.dt_txt){
              
                let day = new Date(e.dt_txt);
                let arr = [];
                let obj = {};
                let dayValue = days[day.getDay()];
                obj.time = day.getHours() +":00";
                obj.date = day.toLocaleDateString();
                obj.day = dayValue;
                obj.maxTemp = e.main.temp_max;
                obj.minTemp = e.main.temp_min;
                obj.icon = e.weather[0].icon;
                obj.description= e.weather[0].description;
                if(timeWiseWeather[dayValue]){
                    arr= timeWiseWeather[dayValue];
                }
                arr.push(obj);
                timeWiseWeather[dayValue]=arr;
              }
            });
            console.log(timeWiseWeather);
            let dayArray = [];
            Object.keys(timeWiseWeather).forEach(e=>{
              let arr = timeWiseWeather[e];
              let obj = {};
              obj.minTemp = Number.MAX_VALUE;
              obj.maxTemp = Number.MIN_VALUE;
              (arr).forEach(q => {
                obj = {
                  day : q.day,
                  date : q.date,
                  maxTemp:obj.maxTemp < q.maxTemp ? q.maxTemp : obj.maxTemp,
                  minTemp: obj.minTemp > q.minTemp ? q.minTemp : obj.minTemp,
                  icon: q.icon,
                  description : q.description
                }
              });
              dayArray.push(obj);
            });
            console.log(dayArray);
            dispatch(setDayWeather(dayArray));
            dispatch(setTimeWeather(timeWiseWeather));
        })
    }
}

export const setDayWeather = (dayArray)=>{
    return {
        type: TYPE.DAY_WEATHER,
        dayArray:dayArray
    }
}

export const setTimeWeather = (timeWiseWeather)=>{
    return {
        type: TYPE.TIME_WEATHER,
        timeWiseWeather:timeWiseWeather
    }
}

export const changeCityName = (cityName)=>{
    return {
        type: TYPE.CITY_CHANGE,
        cityName:cityName
    }
}