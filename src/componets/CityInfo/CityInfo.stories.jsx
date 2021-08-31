import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

export default {
    title: 'CityInfo',
    component: CityInfo
}

export const CityInfoStory = () => (
    <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>
)