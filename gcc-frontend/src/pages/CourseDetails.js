import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  let { course_id } = useParams()
  const [students, setStudents] = useState([])
  const [className, setClassName] = useState([])

  const getRoster = async () => {
    let res = await axios.get(
      `http://localhost:3001/studentcourse/roster/${course_id}`
    )
    setClassName(res.data)
    setStudents(res.data.roster)
    console.log(res.data.roster)
  }

  useEffect(() => {
    getRoster()
  }, [])

  return (
    <div className="main">
      <h1 className="course-title">{className.courseName}</h1>
      <h3>Roster:</h3>
      <div className="class-details-map">
        {students.map((student) => (
          <div className="">
            <p>
              {student.lastName}, {student.firstName}
            </p>
            <p>Grade: {student.Student_Course.grade}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseDetails
