import React from 'react';
import ReactDOM from 'react-dom';
import User from './User'


function MyFunctionUser(props) {
    return (
      <div className="MyFunctionUser">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }


export default MyFunctionUser;
  