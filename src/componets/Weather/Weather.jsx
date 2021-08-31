import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { WiCloud } from 'react-icons/wi'
//import { WiDayCloudy } from 'react-icons/wi'
//import { WiDayFogd } from 'react-icons/wi'
//import { WiDaySunny } from 'react-icons/wi'
//import { WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'

const Weather = ({ temperature }) => {
    return (
        <div>
            <IconContext.Provider value={{size:'2em'}}>
                <WiCloud></WiCloud>
            </IconContext.Provider>
            <Typography display="inline" variant="h4">{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default Weather
