import React from 'react';
import data from '../../../feed/pri_de_intraday_emwh_cet_h_a.json';
import { MDBDataTable } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from "./table.module.scss";

function Table(){

    const chartData = [];
    
    data.points.map(dataitem =>{
        chartData.push({
            MWH: dataitem[0],
            EUR: dataitem[1]
        });

    })

        const ASAS = {
          columns: [
            {
              label: 'MWH',
              field: 'MWH',
              sort: 'asc',
              width: 150
            },
            {
              label: 'EUR',
              field: 'EUR',
              sort: 'asc',
              width: 270
            }
          ],
          rows: [
          ]
        };

        ASAS.rows = chartData;


    return(
        <div className={Styles.table}>
            <MDBDataTable striped bordered small data={ASAS} />
        </div> 
    );
    
      
}

export default Table;