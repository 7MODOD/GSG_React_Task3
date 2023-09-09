import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers'
import React from 'react'
import "./MyInput.css"
import { type } from '@testing-library/user-event/dist/type';
function MyInput(props) {
    return (
    <div className='myComponent'>
        <label className='myLabel'>{props.title}</label> 
        {props.type =='text' ? (
          <input className='myInput' type= "text" onChange={props.onChange}/>
        ): props.type=='checkbox' ?(
        <input className='myInput' type= "checkbox" checked= {props.checked} onChange={props.onChange}/>
        ):null}
    </div>
  )
}

export default MyInput