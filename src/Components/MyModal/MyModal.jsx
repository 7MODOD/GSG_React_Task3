import React, { useState } from 'react'
import './MyModal.css';

function MyModal(props) {
    let value = props.value
    

  return (
    <>
      {value && (
    <div className='modal'>
        <div onClick={props.closeModal} className="overlay"></div>
        <div className="modal-content">
            {props.isError.isValid == false ? (
                <h2>ERROR!</h2>
            ):(
                <h2>SUCCESS</h2>
            )
        }
            <p>{props.isError.msg}</p>
            <p>{props.info}</p>
        </div>

    </div>
      )}
    </>
  )
}

export default MyModal