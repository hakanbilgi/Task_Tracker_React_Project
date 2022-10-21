import React,{useState} from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import axios from "axios"



const AddTask = ({getTask}) => {

  const [formTask,setFormTask]=useState("")
  const [date,setDate]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTask={formTask,date}
    console.log("task geldi mi:",newTask)
    addNewTask(newTask)
    setFormTask("")
    setDate("")
  }

 const addNewTask=async(newTask)=>{
  const url = "https://6352477ea9f3f34c3739206a.mockapi.io/api/tasks";

  try {
    await axios.post(url,newTask)

  }catch (error) { 

  }
  getTask();
 }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>formTask</Form.Label>
        <Form.Control type="text"
         placeholder="Enter task" 
         onChange={(e)=>setFormTask(e.target.value)}/>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" 
        onChange={(e)=>setDate(e.target.value)}/>
      </Form.Group>
    <div className="text-center">
      <Button variant="primary w-50 " type="submit">
        SAVE
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default AddTask