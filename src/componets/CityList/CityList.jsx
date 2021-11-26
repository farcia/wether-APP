import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container justifyContent="centre" alignItems="center">
                <Grid item sm={8} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Weather temperature={10} state="sunny" />
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
