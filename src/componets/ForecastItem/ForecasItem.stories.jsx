import React from "react";
import ForecastItem from "./ForecastItem";

export default {
    title: "Forecas Item",
    componet: ForecastItem
}


export const LunesSoleado = () => (<ForecastItem weekDay={'Lunes'} hour={10} state={'sunny'} temperature={23}/>)
export const MartesNublado = () => (<ForecastItem weekDay={'Martes'} hour={2} state={'cloud'} temperature={17}/>)