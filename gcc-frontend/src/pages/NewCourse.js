import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewCourse = () => {
  let navigate = useNavigate()

  const initialState = {
    courseName: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newCourse = {
      ...formState
    }
    let res = await axios.post(`http://localhost:3001/course`, newCourse)
    setFormState(initialState)
    navigate('/courses')
  }

  return (
    <div className="new-course-container">
      <h1>Add your Greendale course here!</h1>
      <div>
        <form className="course-form" onSubmit={handleSubmit}>
          <label htmlFor="courseName">Course name:</label>
          <input
            className="course-name"
            id="courseName"
            value={formState.courseName}
            type="text"
            onChange={handleChange}
          />
          <button className="submit-course-button" type="submit">
            Create {formState.courseName}!
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewCourse
