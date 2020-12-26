import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class StatelessCustomer extends Component {

    constructor(props) {
        super(props);
        
        //Set Default State of the Object

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            items: [],
            customer : null,
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let items = [...this.state.items];
        items.push({firstname: this.state.firstname, lastname: this.state.lastname});
        this.setState({
            items,
            firstname: '',
            lastname: ''
        });                                  
      };
    
    handleInputChange = (e) => {

        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };

    render() {
        return (
          <div className="App">
            <MyCustomerForm handleFormSubmit={ this.handleFormSubmit } 
                            handleInputChange={ this.handleInputChange } 
                            firstname={ this.state.firstname } 
                            lastname={ this.state.lastname }/>
            <br></br>    
            <Table items={this.state.items }/>
          </div>
        );
    }    
}

const MyCustomerForm = (props) => {
    return (
        <div id="MyCustomerForm">
          <h3>Add users to the list:</h3>  
          <form onSubmit={props.handleFormSubmit}>
            <label >
            First Name:
            </label>
            <input id="firstname" value={props.firstname} 
                   type="text" name="firstname" 
                   onChange={props.handleInputChange} />
            <br></br>
            <label >
            Last Name:
            </label>
            <input id="lastname" value={props.lastname} 
                   type="text" name="lastname" onChange={props.handleInputChange} />
            
            <br></br>       
            <button type="submit" value="Submit">Add Item</button>
          </form>
        </div>
      );
}



  const Table = (props) => {
      return (
        <div id="Table">
          <table >
            <tbody>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
              {props.items.map(item => {
                return (
                  <tr key={item.firstname+item.lastname} >
                    <td key={item.firstname} >{item.firstname}</td>
                    <td key={item.lastname} >{item.lastname}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );    
  }
  
  Table.defaultProps = {
      items : [ 
                new Customer('John','Doe'),
                new Customer('Jane','Smith'),
                new Customer('Rachel','Robin'),
              ]
  }


export default StatelessCustomer;