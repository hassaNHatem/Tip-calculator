import React from 'react';
import '../App.css'
class Field extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="result-field">
            <div className="tip-amount">
                <div className="title">
                    <p>Tip Amount</p>
                    <p className="p2">/ Person</p>
                </div>
                <div className="value">
                    <span>$</span><p>{this.props.tip}</p>
                </div>
            </div>

            <div className="total">
                <div className="title">
                    <p>Total</p>
                    <p className="p2">/ Person</p>
                </div>
                <div className="value">
                    <span>$</span><p>{this.props.total}</p>
                </div>
            </div>
            <button onClick={()=>this.props.handlereset()}>Reset</button>
        </div>;
    }
}



export default Field;