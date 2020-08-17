import React, { Component, useState } from 'react';
import './TablePage.css'
import {useForm} from 'react-hook-form'
import { Button, Form, FormGroup, Label, Input, FormText,Col,Table } from 'reactstrap';
import AddPastesModal from './modals/AddPastesModal'
import deleteIcon from '../images/delete.png'
import editIcon from '../images/edit.png'
export default function(){
        
    const [addModalShow,setAddModalShow]=useState(false)
    const [editModalShow,setEditModalShow]=useState(false)
    const [deleteModalShow,setDeletetModalShow]=useState(false)

    var lis=[
        {
            title:'pataran P',
            content:'This Is New Paste',
            expiration:'21/1/2021',
            exposure:'X',
            created_at:'2/2/2019',

        },
        {

            title:'pataran P',
            content:'This Is New Paste',
            expiration:'21/1/2021',
            exposure:'X',
            created_at:'2/2/2019',
        },
        {

            title:'pataran P',
            content:'This Is New Paste',
            expiration:'21/1/2021',
            exposure:'X',
            created_at:'2/2/2019',
        },
        {

            title:'pataran P',
            content:'This Is New Paste',
            expiration:'21/1/2021',
            exposure:'X',
            created_at:'2/2/2019',
        },
        {

            title:'pataran P',
            content:'This Is New Paste',
            expiration:'21/1/2021',
            exposure:'X',
            created_at:'2/2/2019',
        },

    ]
    
    return (
            <div className='container'>

                { addModalShow? <AddPastesModal show={addModalShow} setShow={(val)=>setAddModalShow(val)} />:null}

            <div className='Container'>
                <div className='upperPart'>
                <div className='leftTitle'><h3>Pastes:</h3></div>
                <div className='rightRow'>
                    <div className='addButtonContainer'>
                    <Button className='addButton' onClick={()=>setAddModalShow(true)}>Add</Button>
                    </div>
                </div>
                </div>


                <div className='tableContainer'>

                <Table className='tableData'>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Title</th>
          <th>Content</th>
          <th>Expiration</th>
          <th>Exposure</th>
          <th>Created AT</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>


      <tbody id='tableBody'>
          {
              lis.map((item,i)=>{

                return (
                    <tr key={"pastexi"+i}>
                        <td>{i}</td>
                <td>{ item.title}</td>
                <td>{item.content}</td>
                <td>{item.expiration}</td>
                <td>{item.exposure}</td>
                <td style={{alignItems:'center',}}>{item.created_at}</td>
                        <td><img src={editIcon} /></td>
                <td><img src={deleteIcon} /></td>

                    </tr>
                )

              })
          }
          </tbody>

      </Table>

                </div>
            </div>
                </div>
          );
}

 