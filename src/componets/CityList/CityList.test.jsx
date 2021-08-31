import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList'
import '@testing-library/jest-dom/extend-expect'

const cities = [
    { city: "Buenos aires", country: "Argentina" },
    { city: "Caracas", country: "Venezuela"} ,
    { city: "Bogotá", country: "Colombia" },
    { city: "Lima", country: "Perú" }
]
test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})