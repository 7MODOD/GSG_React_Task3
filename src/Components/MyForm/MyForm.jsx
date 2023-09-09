import React, { useState } from 'react'
import '../../App.css'
import MyInput from '../MyInput/MyInpyt'
import SelectList from '../SelectList/SelectList'
import MyModal from '../MyModal/MyModal';
function MyForm() {
    let validateMsg = "";
    let isError = false;
    const [data, setData] = useState({
        name:"",
        phoneNumber:"",
        age: "",
        isEmployee: false,
        salaryRange: "",

    });

    const [validationResult, setValidationResult] = useState({
        isValid: true,
        msg: "",
    });

    const [isOpenModal, setModal] = useState(false);

    function handleNameChange(e) {
        setData({...data, name: e.target.value,});
    }

    function handlePhoneNumberChange(e) {
        setData({...data, phoneNumber: e.target.value,});
    }
    
    function handleAgeChange(e) {
        setData({...data, age: e.target.value,});
    }

    function handleCheckBoxChange(e) {
        setData({...data, isEmployee: e.target.checked,});
    }

    function handleSalaryRangeChange(e) {
        setData({...data, salaryRange: e.target.value,});
    }
    
    function ValidateForm(){
        if(data.name.trim() === ''){ 
            setValidationResult({isValid: false, msg: "you should enter your name"});
            return true;
        }
        const intAge = parseInt(data.age, 10);
        if(isNaN(intAge) || intAge < 18 || intAge > 65){
            setValidationResult({isValid: false, msg: "you should enter your age correctly"});
            return true;
        }
        if(data.phoneNumber.length > 10 || data.phoneNumber.length < 8){
            setValidationResult({isValid: false, msg: "you should enter your phone number correctly"});
            return true;
        }
        return false;
    }
    
    function toggelModal(){
        setModal(!isOpenModal);
        
    }
    
    function handleSubmit(e){
        e.preventDefault();
        isError=  ValidateForm();
        
        setModal(true);
    }
    console.log({data});
  return (
    <div>
    <form onSubmit={handleSubmit} className="App-header">
      <h1>Requesting a Loan</h1>
      <hr></hr>
      <MyInput type = "text" title = "Name:" value = {data.name} onChange = {handleNameChange}></MyInput>
      <MyInput type = "text" title = "Phone Number:" value = {data.phoneNumber} onChange = {handlePhoneNumberChange}></MyInput>
      <MyInput type = "text" title = "Age:" value = {data.phoneNumber} onChange = {handleAgeChange}></MyInput>
      <br></br>
      <MyInput type = "checkbox" checked = {data.isEmployee} onChange = {handleCheckBoxChange} title = "Are you an employee?"></MyInput>
      <SelectList value = {data.salaryRange} onChange = {handleSalaryRangeChange}></SelectList>
      <hr></hr>
      <button type='submit' >Submit</button>
      </form>

      <MyModal value = {isOpenModal} closeModal = {toggelModal} isError= {validationResult} ></MyModal>
</div>
  )
}

export default MyForm