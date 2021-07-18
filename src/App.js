import React from 'react';
import './App.css'
import Mains from './components/Maincomponent'
class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    Bill:0,
    tip:0.00,
    nomofppl:0,
    Total:0.00
  };
}
   handlebill = e =>{
    this.setState({Bill:e.target.value})
  }
  handletip =(value)=>{
    this.setState({
      tip:(this.state.Bill*(value/100))/this.state.nomofppl
    },()=>this.setState({Total:this.state.tip+this.state.Bill/this.state.nomofppl}))
  }
  handletotal =()=>{
    this.setState({Total:this.state.tip+(this.state.Bill/this.state.nomofppl)})
  }
  handleppl =(e)=>{
    this.setState({nomofppl:e.target.value})
  }

 handlereet = ()=>{
   this.setState({
     tip:0,
     Total:0
   })
 }
  render() {
    

    return <Mains handlereset={this.handlereet} state={this.state} handlebill={this.handlebill} handletip={this.handletip} handleppl={this.handleppl} handletotal={this.handletotal}></Mains>;
  }
}


export default App;
