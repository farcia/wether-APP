import React from "react";
import ForecastChart from "./ForecastChart";

export default {
    title: "Forecast Chart",
    component: ForecastChart
}

const data = [
    {'dayHour': 'Jue 18', 'min': 14, 'max': 22},
    {'dayHour': 'Vie 06', 'min': 18, 'max': 27},
    {'dayHour': 'Sab 12', 'min': 18, 'max': 28},
    {'dayHour': 'Dom 18', 'min': 18, 'max': 25},
    {'dayHour': 'Lun 18', 'min': 15, 'max': 22},
    {'dayHour': 'Mar 18', 'min': 12, 'max': 19},
]
export const ForecastChartExample = () => (<ForecastChart data={data} />)