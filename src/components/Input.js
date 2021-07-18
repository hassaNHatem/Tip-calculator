import React from 'react';
import '../App.css'
import person from '../images/icon-person.svg'
class Input extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        custometip:0
    };
}

    render() {
        return <div className="input-form">
                    <p>Bill</p>
                    <div className="Bill">
                        <input type="text" onChange={(e)=>{this.props.handlebill(e)}}></input>
                        <span>$</span>
                    </div>
                    <p>Select Tip %</p>
                    <div className="tips">
                        <div className="tip" onClick={()=>{this.props.handletip(5)}}>5%</div>
                        <div className="tip" onClick={()=>{this.props.handletip(10)}}>10%</div>
                        <div className="tip" onClick={()=>{this.props.handletip(15)}}>15%</div>
                        <div className="tip" onClick={()=>{this.props.handletip(25)}}>25%</div>
                        <div className="tip" onClick={()=>{this.props.handletip(50)}}>50%</div>
                        <div className="tip-custome" onClick={()=>{this.props.handletip(this.state.custometip)}}><input onChange={(e)=>{this.setState({custometip:e.target.value})}} placeholder="Custome"></input></div>
                    </div>
                    <p>Number of People</p>
                    <div className="Bill Bill2">
                        <input onChange={(e)=>{this.props.handleppl(e)}} type="text" className=""></input>
                        <span><img src={person}></img></span>
                    </div>
                </div>;
    }
}

export default Input;