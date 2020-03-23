import React from 'react';
import data from '../../../feed/pri_de_intraday_emwh_cet_h_a.json';
import {
    LineChart, Line,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';
  
  


function Graph(props){
    const type = props.type;
    
    const chartData = [];

    data.points.map(dataitem =>{
        chartData.push({
            MWH: dataitem[0],
            EUR: dataitem[1]
        });

    })

    console.log(chartData);

    if(type === 'lineChart'){
        return( 
            <ResponsiveContainer width="95%" height={300}>
            <LineChart data={chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="MWH"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="EUR" stroke="#8884d8"/>
      </LineChart>
      </ResponsiveContainer>
        );
    }
    else{
        return(

            <ResponsiveContainer width="100%" height={300}>
            <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="MWH" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="EUR" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
        );
    }
}

export default Graph;