import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import PropTypes from 'prop-types'

const AppFrame = ({ children }) => {
    return (
        <Grid container justifyContent='center' alignItems='center'>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton color='#ffffff' arial-label='menu'>
                        <Link 
                            component={LinkRouter}
                            to="/Main" 
                            color='#ffffff' 
                            arial-label='menu'>
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="#000000">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item xs={12} sm={11} md={10} lg={8}>
                {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppFrame
