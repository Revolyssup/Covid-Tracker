import React from 'react';
import {Cards,Charts,CountryPicker} from './components';    
import styles from './App.module.css';
import {fetchData} from './api/index'
import CoronaImage from './images/cv.jpg'
class App extends React.Component{

    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const FetchedData= await fetchData();
        this.setState({data: FetchedData})
    }

    handleCountryPicker= async (country)=>{
        const FetchedData=await fetchData(country);
        this.setState({data: FetchedData, country:country})
    }

    render(){   
        return(
            <div className={styles.container}>
             <img src={CoronaImage} alt="COVID-19" className={styles.img} />   
            <Cards data={this.state.data}/>
            <CountryPicker handleCountryPicker={this.handleCountryPicker} />
            <Charts data={this.state.data} country={this.state.country}/>
            </div>
            
        )
    }
}

export default App;