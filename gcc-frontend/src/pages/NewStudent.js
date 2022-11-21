import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const NewStudent = () => {
  let navigate=useNavigate()

  const initialFormState={
    firstName:'',
    lastName:'',
    email:'',
    image:'',
    gpa:null,
  }

  const [formState,setFormState]=useState(initialFormState)

  const handleChange= (e)=>{
setFormState({...formState,[e.target.id]:e.target.value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    await axios.post('localhost:3001/student',formState)
    setFormState(initialFormState)
    navigate(`localhost:3001/student`)
  }

  return (
  
  <div className="form-container">Enroll New Student
  <form onSubmit={handleSubmit}>
    <label className="label" htmlFor="firstName">First Name:
    </label>
    <input className="input" type="text" id="firstName" value={formState.firstName} onChange={handleChange} required/>

    <label className="label" htmlFor="lastName">Last Name:
    </label>
    <input className="input" type="text" id="lastName" value={formState.lastName} onChange={handleChange} required/>

    <label className="label" htmlFor="email">Email:
    </label>
    <input className="input" type="text" id="email" value={formState.email} onChange={handleChange} required/>

    <label className="label" htmlFor="image">Student Photo:
    </label>
    <input className="input" type="text" id="image" value={formState.image} onChange={handleChange} required/>

        <button className="zoom add-student-button" type="submit">
          Add Student
        </button>
 


  </form>



  </div>
  
  
  )
}

export default NewStudent
