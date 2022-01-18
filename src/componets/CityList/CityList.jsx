import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import conertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import Alert from '@material-ui/lab/Alert'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'


const getCityCode = (city, countryCode) => `${city}-${countryCode}`


const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry
    //const { temperature, state } = weather
    return (
        <ListItem button key={getCityCode(city, countryCode)} onClick={eventOnClickCity}>
            <Grid container  direction='row' justifyContent="center" alignItems="center">
                <Grid item sm={9} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async ( city, countryCode ) => {
            const appid = "d3b953e01c42a12e2c06e0ebcea7a4e1"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
            try {
                const response = await axios.get(url)
                    const { data } = response
                    const temperature =  Number(conertUnits(data.main.temp).from("K").to("C").toFixed(0))
                    const state = data.weather[0].main.toLowerCase()
                    const propName = getCityCode(city, countryCode)
                    const propValue = { temperature, state }
                    setAllWeather(allWeather => ( {...allWeather, [propName]: propValue} ))
            } catch (error) {
                if (error.response){ //Error que responde el servidor
                    //const {data, status} = error.response
                    setError('Hay un error en el servidor del clima')
                } else if (error.request) { //Error de no poder llegar al servidor
                    setError('Verifique su conexxion a internet')
                } else { //Errores inprevistos
                    setError('Error al cargar los datos')
                }
            }
        }
        cities.forEach(({ city, countryCode }) => {
            setWeather( city, countryCode )
        });
    }, [cities])
    //const weather = {temperature: 10, state: "sunny"}

    return (
        <div>
            {
                error && <Alert severity='error' onClose={()=> setError(null)}>{ error }</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        }).isRequired
    ),
    onClickCity: PropTypes.func.isRequired
}

export default CityList
