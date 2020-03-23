import React from 'react';
import Styles from "./secondCodeCase.module.scss";
import { useState } from 'react';

function lowestPrice(value, orders){
  
    let maxValue =0;

    orders.map(order => {
        maxValue+=order.volume;
    })
    
    orders.sort((a, b) => {
        return  a.price - b.price;
    });


    console.log(orders);
    console.log(value);
    
    let count = 0;
    let items = [];

    if(maxValue > value){
        orders.map(order =>{
            if(count < value){
                if(order.volume + count > value){
                    items.push({
                        volume: (value-count),
                        price: ((value-count)*order.price),
                        order_id:order.order_id
            
                    });
                    count += (value-count);
                }
                else{
                    count += order.volume;
                    items.push({
                        volume: order.volume,
                        price: order.volume*order.price,
                        order_id:order.order_id
                    });
                }
            }
        })

        console.log(items);

        let finalPrice= 0;
        items.map(item =>{
            finalPrice += item.price;
        })
        finalPrice = finalPrice/value;
        
        return(
            <>
                <p>The lowest average price for your demand is: {finalPrice}</p>
            </>
        );

    }
    else{
        return(
            <>
                <p>There is not enough volume in our orders to satisfy your demand.</p>
                <p>Max. volume available is: {maxValue}</p>
            </>
        );
    }
    
}



function SecondCodeCase(){

    const orders = [{
        "volume": 3.9,
        "price": 52.10,
        "order_id": 10357535456
    }, {
        "volume": 10,
        "price": 52.00,
        "order_id": 10357525840,
    }, {
        "volume": 1,
        "price": 51.90,
        "order_id": 10357536350,
    }, {
        "volume": 4.9,
        "price": 51.90,
        "order_id": 10357536210,
    }, {
        "volume": 5,
        "price": 50.70,
        "order_id": 79609202,
    }];

    const [value, setValue] = useState();
    const [click, setClick] = useState(false);

    return(
        <div className={Styles.SecondCodeCaseWrapp}>
            <p>
                2.) There are available energy market orders you can buy like the list below. You can execute part of an order, for example: you can acquire 5 MW from a 10 MW volume order.
                Write a function in Javascript and necessary tests to run it that will have as input: a list of available orders, the desire volume and return the lowest weighted average price to meet that desire volume. 
                It should work for different input volumes.
                For example: How much would I have to pay to buy 8 MW given the list below? What would the output be if I wanted to buy 1000 MW?
            </p>
            <p>Example of orders array:</p>
            <ol>
                <li>("volume": 3.9," price": 52.10, "order_id": 10357535456)</li>
                <li>("volume": 10", "price": 52.00, "order_id": 10357525840)</li>
                <li>("volume": 1, "price": 51.90, "order_id": 10357536350)</li>
                <li>("volume": 1, "price": 51.90, "order_id": 10357536350)</li>
                <li>("volume": 4.9, "price": 51.90, "order_id": 10357536210)</li>
                <li>("volume": 5, "price": 50.70, "order_id": 79609202)</li>        
            </ol>

            <p>Insert a value for volume and search for the lowest price.</p>
            <input type="text" id="num" name="num" onInput={e => setValue(e.target.value)} /> 
            <button onClick={e => setClick(true)}>Search</button>
            
            <div className={Styles.result}>
                {(click)
                    ? <>{lowestPrice(value, orders)}</>
                    : <p>No input</p>
                }
            </div>
            
        </div> 
    );
       
}
export default SecondCodeCase;