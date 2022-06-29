import React,{useState,useEffect} from'react'

//import { NativeSelect } from '@material-ui/core '

import styles from './CountryPicker.module.css'
import { NativeSelect,FormControl } from '@mui/material'

import {fetchCountries} from '../../api'
const CountryPicker=({handleCountryChange})=>{
    const [Countries, setCountries] = useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            setCountries(await fetchCountries())
        }
        fetchdata()
        console.log(Countries)

    },[])
    console.log(Countries)
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)} >
        <option  value="Golbal"> Golbal</option>
         
            {Countries.map((country,i)=>   <option key={i} value={country}> {country}</option>)}
        </NativeSelect>
      </FormControl>
            
         )
}

export default CountryPicker