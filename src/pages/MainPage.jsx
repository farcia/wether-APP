import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../componets/CityList'
import AppFrame from './../componets/AppFrame/'



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
        <AppFrame>
            <Paper elevation={4}>
                <CityList cities={cities} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
