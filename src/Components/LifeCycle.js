import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            count: 0,
        }
    }

    componentDidMount() {     

        let count =  localStorage.getItem('counter')  
        
        if( isNaN(count)){
            count = 0;
        }
        this.setState({count:count})
        localStorage.setItem('counter', count)
    }

    componentDidUpdate(prevProps, prevState) {

        console.log('Component was Updated')
        let count = parseInt(localStorage.getItem('counter'))   
        count++;
        localStorage.setItem('counter', count)
        
    }

    componentWillMount() {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentWillUnmount() {

    }

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: this.state.name,
            age: this.state.age
        });                                  
    };


    render() {
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}> 
                <input id="name" value={this.state.name} 
                type="text" name="name" onChange={ this.handleInputChange }   />
                <br></br>

                <input id="age" value={this.state.age} 
                type="text" name="age" onChange={ this.handleInputChange }   />
                <br></br>
            </form>    
            </div>
        );
    }
}

LifeCycle.propTypes = {

};

export default LifeCycle;