import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
      <h1>Welcome to Greendale Community College!</h1>
      <div className="image">
        <img src="data:image/jpeg;base64,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" />
      </div>
      <h2>
        Where Jeff Winger attends classes and the school gets destroyed once a
        year because of paintball wars.
      </h2>
      <button onClick={() => navigate('/students')}>See Students</button>
      <button onClick={() => navigate('/courses')}>See Courses</button>
    </div>
  )
}

export default Home
