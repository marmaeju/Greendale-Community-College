import { useState } from 'react'

const SearchBar = (props) => {
  const [students, setStudents] = useState([])

  const onChange = (e) => {
    const value = e.target.value
    setStudents((prev) => {
      return prev.filter((student) =>
        student.toLowerCase().includes(value.toLowerCase())
      )
    })
  }

  return (
    <>
      Search Courses:
      <input onChange={onChange} type="search" />
      <button>Submit</button>
      <br />
      <br />
      Search Students:
      <input type="search" />
      <button>Submit</button>
      <h1>Students:</h1>
      {students.map((student) => (
        <div key={student.id} onClick={() => props.getAllStudents(student.id)}>
          <h2>{student.firstName}</h2>
          <h2>{student.lastName}</h2>
          <h2>{student.courses}</h2>
        </div>
      ))}
    </>
  )
}

export default SearchBar
