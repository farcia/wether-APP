import React from 'react'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityList from './../componets/CityList'

const cities = [
    { city: "Buenos aires", country: "Argentina" },
    { city: "Caracas", country: "Venezuela"} ,
    { city: "Bogotá", country: "Colombia" },
    { city: "Lima", country: "Perú" }
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push('/City')
    }
    return (
        <Grid content justify="center" aligItem="center">
            <Grid>
                <h1>Listados de ciudades</h1>
            </Grid>
            <Grid item>
                <CityList cities={cities} onClickCity={onClickHandler} />
            </Grid>
        </Grid>
    )
}

export default MainPage
