import * as TYPE from '../type'
const intialState = {
    cityName:"Search for City",
    timeWiseWeather:[],
    dayWiseWeather:[]
 }

export const reducer = (state={...intialState}, action)=>{
     switch(action.type){
        case TYPE.DAY_TYPE:
            return {
                ...state,
            }
           break;
        case TYPE.DAY_WEATHER:
            return {
                ...state,
                dayWiseWeather:action.dayArray
            }
           break;
        case TYPE.TIME_WEATHER:
            return {
                ...state,
                timeWiseWeather:action.timeWiseWeather
            }
           break;
        case TYPE.CITY_CHANGE:
            return {
                ...state,
                cityName:action.cityName
            }
                break;    
     }
     return state;
}