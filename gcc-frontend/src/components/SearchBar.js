import { useState } from 'react'
import Students from '../pages/Students'
import axios from 'axios'

const SearchBar = (props) => {
  // const [students, setStudents] = useState([])
  // const [query, setQuery] = useState('')

  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // const searchStudent = students.filter((student) => {
  //   return student.toLowerCase().includes(query.toLocaleLowerCase)
  // })

  const getSearchResults = async (e) => {
    e.preventDefault()
    const searches = await axios.get('http://localhost:3001/student')
    setSearchResults(searches.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
    console.log(searchQuery)
  }

  const getCourses = async () => {
    let res = await axios.get('http://localhost:3001/course')
  }

  return (
    <div>
      Search:
      <input
        className="search"
        value={searchQuery}
        onChange={handleChange}
        type="search"
      />
      {/* <button>Submit</button> */}
      {searchResults.map((student) => (
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
