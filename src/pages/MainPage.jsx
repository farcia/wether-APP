import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../componets/CityList'
import AppFrame from './../componets/AppFrame/'



const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Caracas", country: "Venezuela", countryCode: "VE"} ,
    { city: "Bogotá", country: "Colombia", countryCode: "CO"},
    { city: "Ciudad de México", country: "México", countryCode: "MX"}
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push('/City')
    }
    return (
        <AppFrame>
            <Paper elevation={4} className="contentCenterElement">
                <CityList cities={cities} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
