// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-container">
      <div className="image-container">
        <img src={teamImageUrl} alt={name} className="team-matches-image" />
      </div>
      <p className="team-matches-team-name"> {name} </p>
    </Link>
  )
}

export default TeamCard
