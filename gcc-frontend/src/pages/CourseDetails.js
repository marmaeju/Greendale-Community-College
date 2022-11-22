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
    <div className="course-details-main">
      <h1 className="course-title">{className.courseName}</h1>
      <div className="class-details-map">
        <h2>Roster:</h2>
        {students.map((student) => (
          <div className="">
            <p className="student-names">
              {student.lastName}, {student.firstName}
            </p>
            <p>
              Grade:
              {student.Student_Course.grade === 4 && <span>A</span>}
              {student.Student_Course.grade === 3 && <span>B</span>}
              {student.Student_Course.grade === 2 && <span>C</span>}
              {student.Student_Course.grade === 1 && <span>D</span>}
              {student.Student_Course.grade === 0 && <span>F</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseDetails
