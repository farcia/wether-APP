import React from "react";
import Forecast from "./Forecast";

export default {
    title: "Forecast",
    component: Forecast
}
const forecastItemList = [
    {weekDay: 'Lunes', hour: 10, state: 'sunny', temperature: 17},
    {weekDay: 'Martes', hour: 12, state: 'cloud', temperature: 30},
    {weekDay: 'Miercoles', hour: 1, state: 'cloudy', temperature: 20},
    {weekDay: 'Jueves', hour: 3, state: 'fog', temperature: 30},
    {weekDay: 'Sabado', hour: 5, state: 'sunny', temperature: 30},
    {weekDay: 'Domingo', hour: 7, state: 'rain', temperature: 30},
]


  export const ForcastExample = () => (<Forecast forecastItemList={ forecastItemList }/>)