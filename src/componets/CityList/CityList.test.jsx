import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'
import '@testing-library/jest-dom/extend-expect'

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Caracas", country: "Venezuela", countryCode: "VE"} ,
    { city: "Bogotá", country: "Colombia", countryCode: "CO"},
    { city: "Ciudad de México", country: "México", countryCode: "MX"}
]
test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={()=>{}}/>)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})
test("CityList click on item", async() => {
    //
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")
    //
    //

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)


})