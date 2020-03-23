import React from 'react';
import Styles from "./create.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function addItem(items, currentItem, parentCallback){
  currentItem.key = Date.now();
  const newItem = currentItem;
  items.push(newItem);
  sendData(items, currentItem, parentCallback);
}

function sendData (items, currentItem, parentCallback){
  parentCallback(items, currentItem, parentCallback);
}

const CreateComponentButton = ({ items, currentItem, parentCallback}) => {
	return (
		<>	
      <button className={Styles.create} onClick={() => addItem(items, currentItem, parentCallback)}>Add row<FontAwesomeIcon icon={faPlusCircle} /></button>
		</>
	);
};

export default CreateComponentButton;