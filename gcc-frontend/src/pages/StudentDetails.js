import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = () => {
  const [studentDetails, setStudentDetails] = useState([])
  const [studentSchedule, setStudentSchedule] = useState([])
  const [gpa, setGpa] = useState([])

  let { student_id } = useParams()

  const getStudentDetails = async () => {
    const res = await axios.get(
      `http://localhost:3001/studentcourse/schedule/${student_id}`
    )
    setStudentDetails(res.data)
    setStudentSchedule(res.data.schedule)
  }

  const getGPA = async () => {
    let sum = 0
    let average = null
    let res = await axios.get(
      `http://localhost:3001/studentcourse/schedule/${student_id}`
    )
    res.data.schedule.forEach((event) => {
      if (event.Student_Course.grade != null) {
        sum += event.Student_Course.grade
        average = sum / res.data.schedule.length
      }
    })

    setGpa(average)
  }

  useEffect(() => {
    getStudentDetails()
    getGPA()
  }, [])

  return (
    <div className="student-details">
      <h1>
        {studentDetails.firstName} {studentDetails.lastName}
      </h1>
      <h3>{studentDetails.email}</h3>
      <h3>GPA: {gpa}</h3>
      <img className="student-img" src={studentDetails.image} alt=""></img>
      <h2>Schedule:</h2>
      {studentSchedule.map((course) => (
        <div className="course-name" key={course.id}>
          <h3 className="something">{course.courseName} </h3>
          <p>
            Grade:
            {course.Student_Course.grade === 4 && <span>A</span>}
            {course.Student_Course.grade === 3 && <span>B</span>}
            {course.Student_Course.grade === 2 && <span>C</span>}
            {course.Student_Course.grade === 1 && <span>D</span>}
            {course.Student_Course.grade === 0 && <span>F</span>}
          </p>
        </div>
      ))}
    </div>
  )
}

export default StudentDetails
