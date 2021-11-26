import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const ForecastChart = ({ data }) => {
    return (
        <LineChart
            height={250}
            width={700}
            margin={{ top: 30, bottom: 30, left: 5, right: 5, }}
            data={data}>
                <XAxis dataKey="dayHour" />
                <YAxis />
                <CartesianGrid />
                <Tooltip />
                <Legend />
                <Line tipe="monotine" dataKey="max" stroke="#d50000" />
                <Line tipe="monotine" dataKey="min" stroke="#0000d5" />
        </LineChart>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        }),
    ).isRequired,
}

export default ForecastChart
