import React from 'react';
import Styles from "./create.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Represantations from '../represanations/represantations';
import { useState, useEffect } from 'react';

function addComponent(currentItem, setCurrentItem, item, setItem, type){
	const newComponent = [currentItem, type];
	const itemList = item;

	itemList.push(newComponent);
	setItem(itemList);
	setCurrentItem(Date.now());

	console.log(item);

}

function deleteComponent(key, item, setItem){
    const filterdItems = item.filter(item =>item!==key); 
	console.log(filterdItems);
	setItem(filterdItems);
}

function CreateRepresantationButton (props) {

	const [item, setItem] = useState([]);
	const [type, setType] = useState();

	useEffect(() => {
		setType(props.type);
	  }, [props.type]);


	const [currentItem, setCurrentItem] = useState(Date.now());

	return (
		<>	
      <button onClick={() => addComponent(currentItem,setCurrentItem , item, setItem, type)} className={Styles.create}>Add <FontAwesomeIcon icon={faPlusCircle} /></button>
	  <Represantations item={item} setItem={setItem} deleteComponent={deleteComponent} type={type}/> 
		</>
	);
};

export default CreateRepresantationButton;