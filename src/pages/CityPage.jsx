import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../componets/CityInfo'
import Weather from './../componets/Weather'
import WeatherDetails from './../componets/WeatherDetails'
import ForecastChart from './../componets/ForecastChart'
import Forecast from './../componets/Forecast'
import { Link } from 'react-router-dom'

const CityPage = () => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const forecastItemList = [
        {weekDay: 'Lunes', hour: 10, state: 'sunny', temperature: 17},
        {weekDay: 'Martes', hour: 12, state: 'cloud', temperature: 30},
        {weekDay: 'Miercoles', hour: 1, state: 'cloudy', temperature: 20},
        {weekDay: 'Jueves', hour: 3, state: 'fog', temperature: 30},
        {weekDay: 'Sabado', hour: 5, state: 'sunny', temperature: 30},
        {weekDay: 'Domingo', hour: 7, state: 'rain', temperature: 30},
    ]
    const data = [
        {'dayHour': 'Jue 18', 'min': 14, 'max': 22},
        {'dayHour': 'Vie 06', 'min': 18, 'max': 27},
        {'dayHour': 'Sab 12', 'min': 18, 'max': 28},
        {'dayHour': 'Dom 18', 'min': 18, 'max': 25},
        {'dayHour': 'Lun 18', 'min': 15, 'max': 22},
        {'dayHour': 'Mar 18', 'min': 12, 'max': 19},
    ]
    return (
        <Grid content justify="center" aligItem="center" direction='column'>
            <Grid item xs={12}>
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid container xs={12} justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <Weather temperature={temperature} state={state} />
                </Grid>
                <Grid item xs={4}>
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ForecastChart data={data}></ForecastChart>
            </Grid>
            <Grid item xs={12}>
                <Forecast forecastItemList={forecastItemList}></Forecast>
            </Grid>
            <div>
                <Link to="/Main" className='btnGeneral'>Volver al main</Link>
            </div>
        </Grid>
    )
}

export default CityPage
