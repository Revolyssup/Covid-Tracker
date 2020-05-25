//importing axios to make API requests.
import axios from 'axios';
const url=' https://covid19.mathdro.id/api';

//exporting the data fetched by the API
export const fetchData= async (country)=>{
    let modifiedurl=url;

    //If a specific country's data is asked to be fetched we modify the url according to the country
    if(country){
        modifiedurl=`${url}/countries/${country}`
    }
    try{
        //By destructuring the returned object from the API call,we only return 5 objects that we are going to use.
        const {data: {confirmed,recovered,deaths,lastUpdate}}= await axios.get(modifiedurl);
        return {confirmed,recovered,deaths,lastUpdate}; 
    }
   catch(err){
        console.log(err);
   }
    
}
//exporting the data fetched by the API
export const fetchDailyData= async ()=>{
    try{
        const { data } = await axios.get(`${url}/daily`)
        const finalData= data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return finalData;
    }
    catch(err){
        console.log(err);
    }
}

export const countries= async ()=>{
    try{
        const { data:{ countries } }= await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);

        
    }
    catch(err){
        console.log(err);
    }
}