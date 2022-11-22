import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Search from '../components/SearchBar'

const Students = () => {
  let navigate = useNavigate()
  const [studentList, setStudentList] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState([])
  const [gpa, setGpa] = useState([])

  const getAllStudents = async () => {
    const res = await axios.get('http://localhost:3001/student')

    // console.log(res.data)
    setStudentList(res.data)
  }

  const selectStudent = (selected) => {
    setSelectedStudent(selected)
    navigate(`students/${selected.id}`)
  }

  const getGPA = async () => {
    let sum = 0
    let average = null
    let res = await axios.get(`http://localhost:3001/studentcourse/schedule/3`)
    // console.log(res.data.schedule)
    res.data.schedule.forEach((event) => {
      if (event.Student_Course.grade != null) {
        // console.log(event.Student_Course.grade)
        sum += event.Student_Course.grade
        average = sum / res.data.schedule.length
      }
    })
    // console.log(sum)
    console.log(average)
    setGpa(average)
  }

  useEffect(() => {
    getAllStudents()
    getGPA()
  }, [])

  return (
    <div className="students-container">
      <Search getAllStudents={getAllStudents} />
      <h1>
        <em>Browse Greendale Students</em>
      </h1>
      {studentList?.map((student) => (
        <div className="student" key={student.id}>
          <h3>
            {student.lastName},{student.firstName}
          </h3>
          <div>
            <em>{student.email}</em>
          </div>
          <div onClick={() => selectStudent(student)}>
            <img src={student.image} alt="student image"></img>
          </div>
          <div>GPA: {student.gpa}</div>
        </div>
      ))}
    </div>
  )
}

export default Students
