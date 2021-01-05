import React, { useState } from "react";
import { Formik, Form, Field, useField, FieldArray } from "formik";
import {getAvailabilityByDay,getAvailabilityTimeList} from "@utils/helper";


const someFriends = ["5:00 AM", "6:00 AM", "7:00 AM"];
const sunFromList = ["3:00 AM", "6:00 AM", "7:00 AM"];
const sunToList   = ["6:00 AM", "7:00 AM", "8:00 AM"];

const sundayAvailability = [ {from:"5:00 AM", to:"6:00 AM"},
                             {from:"6:00 AM", to:"7:00 AM"}, 
                             {from:"7:00 AM", to:"8:00 AM"}];



export const availabilityOptions = () => {
    return [
       {value: "6:00 AM", label: "6:00 AM"},
       {value: "7:00 AM", label: "7:00 AM"},
       {value: "8:00 AM", label: "8:00 AM"},
       {value: "9:00 AM", label: "9:00 AM"},
       {value: "10:00 AM", label: "10:00 AM"},
       {value: "11:00 AM", label: "11:00 AM"},
       {value: "12:00 PM", label: "12:00 PM"},
       {value: "1:00 PM", label: "1:00 PM"},
       {value: "2:00 PM", label: "2:00 PM"},
       {value: "3:00 PM", label: "3:00 PM"},
       {value: "4:00 PM", label: "4:00 PM"},
       {value: "5:00 PM", label: "5:00 PM"},
       {value: "6:00 PM", label: "6:00 PM"},
       {value: "7:00 PM", label: "7:00 PM"},
       {value: "8:00 PM", label: "8:00 PM"},
       {value: "9:00 PM", label: "9:00 PM"},
    ]
}

const fromList = getAvailabilityTimeList();

const selectedOptionId = 2;
  
export default function FromToAvailability() {

    return (

    <div>
      <h1>Friend List</h1>
      <Formik
        initialValues={{ 
                friends: someFriends,
                sunFromList: sunFromList,
                sunToList: sunToList,
                sundayAvailability:sundayAvailability,
        }}
        onSubmit={values =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
        render={({ values }) => (
          <Form>
            <FieldArray
              name="sundayAvailability"
              render={arrayHelpers => (
                <div>
                  {values.sundayAvailability &&
                    values.sundayAvailability.length > 0 &&
                    values.sundayAvailability.map((friend, index) => (
                      <div key={index}>

                        <Field as="select" name={`sundayAvailability.${index}.from`} >
                        { 
                            fromList.map((from, fromIndex) => (
                                <option key = {`sunOptionFrom[${index}].[${fromIndex}]from`} 
                                    value={from} >{from}</option>
                                )
                            )
                        }
                        </Field>   

                        <Field as="select" name={`sundayAvailability.${index}.to`} >
                        { 
                            fromList.map((from, fromIndex) => (
                                <option key = {`sunOptionFrom[${index}].[${fromIndex}]from`} 
                                    value={from} >{from}</option>
                                )
                            )
                        }
                        </Field>   
                        

                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>                        
                      </div>
                    ))}
  
                  {/* Add a new empty item at the end of the list */}
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    Add Friend
                  </button>
  
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  )
  }
  
