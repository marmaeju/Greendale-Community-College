import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <h2>Greendale Community College</h2>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/students">Students</Link>
      </nav>
    </div>
  )
}

export default Nav
