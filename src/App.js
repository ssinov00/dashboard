import React from 'react';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Text from './components/text/text';
import Button from './components/createComponentButton/createComponentButton';
import RowItem from './components/rowItem/rowItem';
import SecondCase from './components/secondCodeCase/secondCodeCase';
import Styles from "./app.module.scss";

class App extends React.Component{
  
  constructor (props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        key:''
      }
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.callbackFunction = this.callbackFunction.bind(this);
  }

  callbackFunction = (items, currentItem) => {
    this.setState({items:items,currentItem:currentItem});
    this.setState({currentItem:{key:Date.now()}});
  }

  deleteItem(key, items){
    const filterdItems = items.filter(item =>item.key!==key); 
    console.log(filterdItems);
    this.setState({items:filterdItems});
  }
  
  render(){
    return (
      <div className={Styles.mainWrapper}>
        <Menu/>
        <div className={Styles.conentWrapper}>
          <Text/>
          <Button items={this.state.items} currentItem={this.state.currentItem} parentCallback={this.callbackFunction} />
          <RowItem items={this.state.items} deleteItem={this.deleteItem} />
          <SecondCase />
        </div>
        <Footer/>  
      </div>  
    );
  }
}
export default App;
