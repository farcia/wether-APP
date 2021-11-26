import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityList from './../componets/CityList'

const cities = [
    { city: "Buenos aires", country: "Argentina" },
    { city: "Caracas", country: "Venezuela"} ,
    { city: "Bogotá", country: "Colombia" },
    { city: "Lima", country: "Perú" }
]

const MainPage = () => {
    return (
        <Grid content justyfi="center" aligItem="center">
            <Grid item>
                <CityList cities={cities} onClickCity={''} />
            </Grid>
        </Grid>
    )
}

export default MainPage
