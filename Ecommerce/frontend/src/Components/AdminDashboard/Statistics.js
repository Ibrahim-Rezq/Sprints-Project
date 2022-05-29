import React, { useState, useEffect } from 'react'
import {
    Tooltip,
    PieChart,
    Pie,
    Sector,
    Cell,
    ResponsiveContainer,
    BarChart,
    YAxis,
    XAxis,
    Bar,
    Legend,
    CartesianGrid,
} from 'recharts'

function Statistics({ revenueArray }) {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

    return (
        <>
            <PieChart width={800} height={400}>
                <Pie
                    data={revenueArray}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill='#8884d8'
                    paddingAngle={5}
                    dataKey='profit'
                    label
                >
                    {revenueArray.map((entry, index) => (
                        <Cell
                            key={`cell-${entry.monName}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </>
    )
}

export default Statistics
