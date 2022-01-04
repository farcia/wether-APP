import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'
import '@testing-library/jest-dom/extend-expect'

test("ForecastItem render", async () => {
    const { findByText } = render (<ForecastItem weekDay={'Lunes'} hour={10} state={'clouds'} temperature={23}/>)

    const weekDay = await findByText(/Lunes/)
    const hour = await findByText(/10/)
    const state = await findByText(/clouds/)
    const temperature = await findByText(/23/)

    expect(weekDay).toHaveTextContent('Lunes')
    expect(hour).toHaveTextContent('10')
    expect(state).toHaveTextContent('clouds')
    expect(temperature).toHaveTextContent('23 °')
})