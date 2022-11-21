import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const Courses = () => {
  let navigate = useNavigate()

  const [courses, setCourses] = useState([])

  const getCourses = async () => {
    const res = await axios.get(`http://localhost:3001/course`)
    setCourses(res.data)
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div className="courses-container">
      <h1>Here at Greendale, we offer a wide variety of courses!</h1>
      <h2>Courses:</h2>

      <SearchBar />
      <div>

      <div className="courses">

        {courses.map((course) => (
          <div key={course.id}>
            <h4 className="course-name">{course.courseName}</h4>
          </div>
        ))}
      </div>
      <p onClick={() => navigate('/newcourse')}>
        Can't find your course? Add one here!
      </p>
    </div>
  )
}

export default Courses
