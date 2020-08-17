import React, { Component } from 'react';
import {useForm} from 'react-hook-form'
import './loginPage.css'
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
export default function LoginPage(){

const {register,handleSubmit,errors}=useForm();

const onSubmit=(data)=>{
    alert(data.username)
    console.log(data)
}
return (

<div className='container'>

<div className='formContainer'>
    <div className='formHeader'><h3>Welcome</h3></div>
    <div className='formContent'>
    <Form onSubmit={handleSubmit(onSubmit)} className='formMain' >

    <FormGroup row className='formInputContainer'>
        
       
          <Input className='formInput' type="text" name="username" ref={register({required:true})}  id="Username" placeholder="Enter UserName" />
        
      </FormGroup>
      <FormGroup row className='formInputContainer'>
      
        
          <Input className='formInput' type="password" name="password" ref={register({required:true})}  id="Password" placeholder="Enter Password" />
           
      </FormGroup>
      {
          errors.username || errors.password ? <div className='error'>UserName and Password Required</div>
          :null

      }
      <div className='subDiv'>
        <Button className='button' type='submit'>Login</Button></div>
        </Form>
        </div>
</div>
    </div>


);

} 
