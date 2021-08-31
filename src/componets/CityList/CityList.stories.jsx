import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Buenos aires", country: "Argentina" },
    { city: "Caracas", country: "Venezuela"} ,
    { city: "Bogotá", country: "Colombia" },
    { city: "Lima", country: "Perú" }
]

export const CityListExample = () => (<CityList cities={cities} />)
