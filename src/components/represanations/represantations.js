import React from 'react';
import Styles from "./represantations.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Graph from './Graph/graph';
import Table from './table/table';

function viewChooser(type){
    console.log(type);
    if(type === 'table'){
        return(
            <Table />
        );
    }
    else{
        return(
            <Graph type={type} />
        );
    }

}


function Represantations(props){
    const items = props.item;
    const listItems = items.map(item =>{
        return (
            <div className={Styles.represantationsItem} key={item}>
               <div className={Styles.itemHeader}>
                    <span>Column item</span>
                    <span>
                        <button onClick={()=> props.deleteComponent(item, items, props.setItem)} className={Styles.delete}><FontAwesomeIcon icon={faTrash} /></button>
                    </span>
                </div>
                <div className={Styles.itemBody}>
                    {viewChooser(item[1])}
                </div>
            </div>
        )
    })

    return(
        <div className={Styles.represantationsWrap}>
           {listItems}  
        </div>
    )
}

export default Represantations;