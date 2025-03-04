// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = matchCardDetails

  const lostMatch =
    matchStatus === 'Lost' ? 'lost-match-color' : 'won-match-color'

  return (
    <li className="each-match-card-list-container">
      <div className="match-card-team-logo-container">
        <img
          className="match-card-competing-team-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
      </div>
      <div className="match-card-competing-team-title-container">
        <p className="match-card-competing-team-title"> {competingTeam} </p>
      </div>
      <div className="match-card-competing-team-result-container">
        <p className="match-card-competing-team-result"> {result} </p>
      </div>
      <div className="match-card-competing-team-match-container">
        <p className={`match-card-competing-team-match-status ${lostMatch}`}>
          {matchStatus}
        </p>
      </div>
    </li>
  )
}

export default MatchCard
