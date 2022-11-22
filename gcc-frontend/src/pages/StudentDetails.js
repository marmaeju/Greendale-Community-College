import axios from 'axios'
import React from 'react' 
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = () => {

const [studentDetails,setStudentDetails]=useState([])
const [studentSchedule,setStudentSchedule]=useState([])

let { student_id } = useParams()

const getStudentDetails=async()=>{
  console.log(student_id)
   const res=await axios.get(`http://localhost:3001/studentcourse/schedule/${student_id}`)
   console.log(res.data)
   setStudentDetails(res.data)
   setStudentSchedule(res.data.schedule)
   console.log(studentSchedule)
}

useEffect(() => {
getStudentDetails()
}, [])


  return (
    <div className="student-details">
      <h1>{studentDetails.firstName} {studentDetails.lastName}</h1>
      <h3>{studentDetails.email}</h3>
      <h3>GPA: {studentDetails.gpa}</h3>
      <img src={studentDetails.image} alt=""></img>
      <h2>Schedule:</h2>
      {studentSchedule.map((course) => (
            <div key={course.id}>
              <h3 className="course-name">{course.courseName}, Grade: {course.Student_Course.grade}</h3>
            </div>
          ))}


    </div>

    


  
  )
}

export default StudentDetails