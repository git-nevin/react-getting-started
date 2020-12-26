import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyClass extends Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div className="MyClass">
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        );
    }
}

const Myuser = (
                <div>
                    <MyClass />
                    <MyClass />
                    <MyClass />
                 </div>
);    

export default MyClass;