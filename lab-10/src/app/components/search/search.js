import React, { useState } from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import axios from 'axios';
import * as CONSTANT  from '../../Constants/API_DATA'
export default function Search(props) {
    const [searchVal, setSearchVal] = useState("");
  const loadOptions = (inputValue)=>{
    return axios.get(`${CONSTANT.GEO_URL}/direct?q=${inputValue}&limit=5&appid=${CONSTANT.API_KEY}`)
            .then(response=>{
                return{
                    options: response.data.map(e=>{
                        return {
                            value: `${e.lat} ${e.lon}`,
                            label: `${e.name} ${e.country}`
                        }
                    })
                } 
            })
    }
const handleOnChange = (searchData) => {
    setSearchVal(searchData);
    props.searchHandler(searchData);
  };
  
    return (
    <AsyncPaginate
        value={searchVal}
        debounceTimeout={600}
        placeholder="Search for city"
        onChange={handleOnChange}
        loadOptions={loadOptions}
    />
  )
}
