import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const forecastItemList = [
    {weekDay: 'Lunes', hour: 10, state: 'clouds', temperature: 17},
    {weekDay: 'Martes', hour: 12, state: 'clouds', temperature: 30},
    {weekDay: 'Miercoles', hour: 1, state: 'clouds', temperature: 20},
    {weekDay: 'Jueves', hour: 3, state: 'clouds', temperature: 30},
    {weekDay: 'Sabado', hour: 5, state: 'clouds', temperature: 30},
    {weekDay: 'Domingo', hour: 7, state: 'clouds', temperature: 30},
]
test('Forecast render', async ()=> {
    const { findAllByTestId } = render(
        <Forecast 
            forecastItemList={ forecastItemList } />)
    const forecastItems = await findAllByTestId('forecast-item-container')

    expect(forecastItems).toHaveLength(6)
})