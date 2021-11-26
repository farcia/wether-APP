import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const forecastItemList = [
    {weekDay: 'Lunes', hour: 10, state: 'sunny', temperature: 17},
    {weekDay: 'Martes', hour: 12, state: 'cloud', temperature: 30},
    {weekDay: 'Miercoles', hour: 1, state: 'cloudy', temperature: 20},
    {weekDay: 'Jueves', hour: 3, state: 'fog', temperature: 30},
    {weekDay: 'Sabado', hour: 5, state: 'sunny', temperature: 30},
    {weekDay: 'Domingo', hour: 7, state: 'rain', temperature: 30},
]
test('Forecast render', async ()=> {
    const { findAllByTestId } = render(
        <Forecast 
            forecastItemList={ forecastItemList } />)
    const forecastItems = await findAllByTestId('forecast-item-container')

    expect(forecastItems).toHaveLength(6)
})