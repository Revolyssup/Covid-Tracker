import React, {useState,useEffect} from 'react';
import { NativeSelect,FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

import { countries } from '../../api/index'
const CountryPicker=( { handleCountryPicker })=>{
    const [fetchedCountries,setFetchedCountries]=useState([])
    useEffect(()=>{
        const fetchedCountries = async ()=>{
            setFetchedCountries(await countries())
        }
        fetchedCountries();
    },[setFetchedCountries])

    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryPicker(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker