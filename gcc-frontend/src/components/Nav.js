import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>Greendale Community College</h2>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="/courses" className="linky">
          Courses
        </Link>
        <Link to="/students" className="linky">
          Students
        </Link>
      </nav>
    </div>
  )
}

export default Nav
