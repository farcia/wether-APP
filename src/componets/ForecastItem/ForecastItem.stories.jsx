import React from "react";
import ForecastItem from "./ForecastItem";

export default {
    title: "Forecast Item",
    componet: ForecastItem
}


export const LunesSoleado = () => (<ForecastItem weekDay={'Lunes'} hour={10} state={'clouds'} temperature={23}/>)
export const MartesNublado = () => (<ForecastItem weekDay={'Martes'} hour={2} state={'clouds'} temperature={17}/>)