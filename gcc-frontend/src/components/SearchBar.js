import { useState } from 'react'
import Students from '../pages/Students'

const SearchBar = (props) => {
  const [students, setStudents] = useState([])
  const [query, setQuery] = useState('')

  const searchStudent = students.filter((student) => {
    return student.toLowerCase().includes(query.toLocaleLowerCase)
  })

  // const onChange = (e) => {
  //   const value = e.target.value
  //   setStudents((prev) => {
  //     console.log(students)
  //     return prev.filter((student) =>
  //       student.toLowerCase().includes(value.toLowerCase())
  //     )
  //   })
  // }

  return (
    <div>
      Search:
      <input
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      {/* <button>Submit</button> */}
      <h3>Students:</h3>
      {searchStudent.map((student) => (
        <div key={student.id} onClick={() => props.getAllStudents(student.id)}>
          <h2>{student.firstName}</h2>
          <h2>{student.lastName}</h2>
          <h2>{student.courses}</h2>
        </div>
      ))}
    </div>
  )
}

export default SearchBar
