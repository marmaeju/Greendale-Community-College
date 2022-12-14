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
            <div
              onClick={() => navigate(`/courses/${course.id}`)}
              key={course.id}
            >
              <h4 className="course-name">{course.courseName}</h4>
            </div>
          ))}
        </div>
        <div className="add-container">
          <p>Can't find your course?</p>
          <button className="course-btn" onClick={() => navigate('/newcourse')}>
            Add one here!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Courses
