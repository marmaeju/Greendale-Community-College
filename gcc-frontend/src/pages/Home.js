import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to Greendale Community College!</h1>
      <img src="https://static.wikia.nocookie.net/community-sitcom/images/4/49/Greendale_Community_College_sign.jpg/revision/latest/scale-to-width-down/300?cb=20170623152938" />
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
