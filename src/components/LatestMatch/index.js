// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <div className="latest-matches-main-bg-container">
      <div className="latest-matches-bg-container-for-small-screen">
        <div className="latest-matches-left-container">
          <p className="latest-matches-competing-team"> {competingTeam} </p>
          <p className="latest-matches-date"> {date} </p>
          <p className="latest-matches-venue"> {venue} </p>
          <p className="latest-matches-result"> {result} </p>
        </div>
        <div className="latest-matches-logo-container">
          <img
            className="competiting-team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <div className="latest-matches-right-container">
        <h1 className="latest-matches-first-innings"> First Innings </h1>
        <p className="latest-matches-first-innings-description">
          {firstInnings}
        </p>
        <h1 className="latest-matches-second-innings"> Seconds Innings </h1>
        <p className="latest-matches-second-innings-description">
          {secondInnings}
        </p>
        <h1 className="latest-matches-man-of-match"> Man Of The Match </h1>
        <p className="latest-matches-man-of-match-desciption">
          {manOfTheMatch}
        </p>
        <h1 className="latest-matches-umpires"> Umpires </h1>
        <p className="latest-matches-umpires-description"> {umpires} </p>
      </div>
    </div>
  )
}

export default LatestMatch
