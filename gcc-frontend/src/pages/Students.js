import axios from "axios"
import {useEffect,useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Search from "../components/SearchBar"



const Students = () => {
  let navigate=useNavigate()
  const [studentList,setStudentList]=useState(null)
  const [selectedStudent,setSelectedStudent]=useState([])


  const getAllStudents=async ()=>{
    const res=await axios.get("http://localhost:3001/student")
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
    Search Students:
    <Search getAllStudents={getAllStudents}/>
    <h1><em>Browse Greendale Students</em></h1>
   {studentList?.map((student)=>
   <div className="student" key={student.id}>
      <h3>{student.lastName},{student.firstName}</h3>
      <div><em>{student.email}</em></div>
      <div onClick={()=>selectStudent(student)}>
        <img src={student.image} alt="student image"></img>
      </div>
      <div>GPA: {student.gpa}</div>

      <div></div>



   </div>
    
    )}



  </div>
  
  )
}

export default Students
