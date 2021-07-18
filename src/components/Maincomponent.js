import React from 'react';
import '../App.css'
import Input from './Input';
import Field from './Field'
class Maincomponent extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="main-componenet">
            <Input handlebill={this.props.handlebill} handletip={this.props.handletip} handleppl={this.props.handleppl}> </Input>
            <Field tip={this.props.state.tip} total={this.props.state.Total} handlereset={this.props.handlereset}></Field>

        </div>;
    }
}



export default Maincomponent;