import React from 'react'
import {findAllByRole, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import CityInfo from './CityInfo'

test("CityInfo render", async () => {
//Organiza
const city = "Buenos Aires"
const country = "Argentina"
//Iniciar
const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo> )
//Que retornó
const cityAndCountryComponents = await findAllByRole("heading")

//Validación
expect(cityAndCountryComponents[0]).toHaveTextContent(city)
expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})