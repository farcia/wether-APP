import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import IconState, { validValues } from './../IconState'
import Skeleton from '@material-ui/lab/Skeleton'


const Weather = ({ temperature, state }) => {
    return (
        <Grid container item justifyContent="center" alignItems="center" spacing={1} direction="row">
            <IconContext.Provider value={{ size: '3em' }}>
                {
                    state ?
                    (<IconState state={state}/>) : (<Skeleton variant='circle' height={40} width={40} />)
                }
            </IconContext.Provider> 
            {
                temperature ?
                (<Typography display="inline" variant="h5">{temperature}</Typography>) : (<Skeleton variant='rect' height={40} width={40} />)
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues)
}

export default Weather
