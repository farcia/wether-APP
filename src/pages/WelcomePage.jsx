import React from 'react'
import Welcome from '../componets/Welcome'
import Link from '@material-ui/core/Link'
import { Link as RouterLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const WelcomePage = () => {
    return (
        <Welcome>
            <Grid container direction='column' justifyContent='center'>
                <div className="highlight">
                    <Grid item container xs={12} justifyContent='center' alignItems='center'>
                        <Grid item className='iconColorWelcome'>
                            <IconContext.Provider value={{size: '6em'}}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Grid>
                        <Grid item container xs={12} justifyContent='center' alignItems='center'>
                            <Typography variant='h4' className='titleWelcome'>Welcome to Weather App</Typography>
                        </Grid>
                        <Grid item container xs={12} justifyContent='center' alignItems='center'>
                            <Link to="/Main" className='btnGeneral' component={RouterLink}>Ir a main</Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Welcome>
    )
}

export default WelcomePage
