import Modal from 'react-modal'
import React, { Component } from 'react';
import {useForm} from 'react-hook-form'
import { Button, Form, FormGroup, Label, Input, FormText,Col,Table } from 'reactstrap';
export default function AddPasteModal(props)
{

    const {register,handleSubmit,errors}=useForm();

    const onSubmit=(data)=>{
        alert(data.username)
        console.log(data)
    }
return (
<Modal
show={props.show}
onHide={props.setShow(false)}
>
<Modal.Header closeButton>
<Modal.Title>Add Paste</Modal.Title>
</Modal.Header>
<Modal.Body>
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
          errors.username && errors.password ? null:<div className='error'>UserName and Password Required</div>


      }
      <div className='subDiv'>
        <Button className='button' type='submit'>Login</Button></div>
        </Form>
        </div>

        </Modal.Body>
    </Modal>
)
}