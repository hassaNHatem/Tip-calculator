import React from 'react';

class Store extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        appname:'weather-app'
    };
}

    render() {
        return React.Children.map(this.props.children,(child)=>{
            return React.cloneElement(child,{...this.state})
        });
    
}


}
export default Store