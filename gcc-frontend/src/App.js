import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Students from './pages/Students'
import NewStudents from './pages/NewStudent'
import NewCourse from './pages/NewCourse'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/newstudents" element={<NewStudents />} />
          <Route path="/newcourse" element={<NewCourse />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
