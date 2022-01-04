import React from 'react'
import { BrowserRouter as Ruter, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import Error404 from './pages/Error404'
import './App.css'



const App = () => {
    return (

        <Ruter>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route exact path="/Main">
                    <MainPage />
                </Route>
                <Route exact path="/City">
                    <CityPage />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
        </Ruter>
    )
}

export default App
