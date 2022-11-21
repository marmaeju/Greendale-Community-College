import axios from "axios"
import {useEffect,useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom"



const Students = () => {
  let navigate=useNavigate()
  const [studentList,setStudentList]=useState(null)
  const [selectedStudent,setSelectedStudent]=useState([])

  const getAllStudents=async ()=>{
    const res=await axios.get("localhost:3001/student")
    console.log(res.data)
    setStudentList(res.data)
  }

  const selectStudent=(selected)=>{
    setSelectedStudent(selected)
    navigate(`students/${selected.id}`)
  }

  useEffect(()=>{
    getAllStudents()
  },[])

  return( 
  <div className="students-container">
   {studentList?.map((student)=>
   <div className="student">
      <div>First Name:{student.firstName}</div>
      <div>Last Name:{student.lastName}</div>
      <div>Email:{student.email}</div>
      <div>{student.firstName}</div>
      <div onClick={()=>selectStudent(record)}>
        <img src={student.image}></img>
      </div>

      <div></div>



   </div>
    
    )}



  </div>
  
  )
}

export default Students
