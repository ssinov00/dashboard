import React from 'react';
import Styles from "./row.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CreateRepresantationButton from '../createRepresantationButton/createRepresantationButton';
import { useState } from 'react';

function RowItem(props){
    const [type, setType] = useState("lineChart");
    const items = props.items;


    const listItems = items.map(item =>{
        return (
            <div className={Styles.rowItem} key={item.key}>
                <div className={Styles.rowHeader}>
                <span>Row item</span>
                <span>
                    <button onClick={()=> props.deleteItem(item.key, items)} className={Styles.delete}><FontAwesomeIcon icon={faTrash} /></button>
                </span>
                </div>
                <div className={Styles.rowBody}>
    
                    Select the type of representation you want: 
                    <select id="representations" onChange={e => setType(e.target.value)}>
                        <option value="lineChart">Line chart</option>
                        <option value="table">Table</option>
                        <option value="barChart">Bar chart</option>
                    </select>

                    <CreateRepresantationButton type={type} />
                    
                </div>
            </div>
          );
      })
  
      return(
          <>
              <section className={Styles.rowWrapper}>
                  {listItems}
              </section>
              
          </>
      )
}

export default RowItem;
  





