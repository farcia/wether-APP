import React from 'react'
import Link from '@material-ui/core/Link'
import { Link as RouterLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { AiFillWarning } from 'react-icons/ai'

const Error404 = () => {
    return (
        <Grid container direction='column' justifyContent='center' className='fullScreem backgroundDark'>
            <div className="highlight">
                <Grid item container xs={12} justifyContent='center' alignItems='center'>
                    <Grid item className='iconColorWelcome'>
                        <IconContext.Provider value={{size: '5em'}}>
                            <AiFillWarning />
                        </IconContext.Provider>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center' alignItems='center'>
                        <Typography variant='h4' className='titleWelcome'>404 | La página no existe</Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center' alignItems='center'>
                        <Link to="/" className='btnGeneral' component={RouterLink}>Volver al inicio</Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default Error404
