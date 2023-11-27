import {combineReducers} from 'redux'
import * as dayWeatherReducer from './dayReducer'

export const rootReducer  = combineReducers({
    dayWeather : dayWeatherReducer.reducer
  });
