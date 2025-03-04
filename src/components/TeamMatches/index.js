// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatchList: [],
    matchCardList: [],
    banner: '',
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  convertToCamelCase = eachMatch => ({
    competingTeam: eachMatch.competing_team,
    competingTeamLogo: eachMatch.competing_team_logo,
    date: eachMatch.date,
    firstInnings: eachMatch.first_innings,
    id: eachMatch.id,
    manOfTheMatch: eachMatch.man_of_the_match,
    matchStatus: eachMatch.match_status,
    result: eachMatch.result,
    secondInnings: eachMatch.second_innings,
    umpires: eachMatch.umpires,
    venue: eachMatch.venue,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    console.log(data)

    const formattedData = {
      latestMatchDetails: this.convertToCamelCase(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachItem =>
        this.convertToCamelCase(eachItem),
      ),
      teamBannerUrl: data.team_banner_url,
    }

    console.log(formattedData)

    this.setState({
      isLoading: false,
      latestMatchList: formattedData.latestMatchDetails,
      matchCardList: formattedData.recentMatches,
      banner: formattedData.teamBannerUrl,
    })
  }

  render() {
    const {isLoading, banner, latestMatchList, matchCardList} = this.state
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params

    return (
      <div className={`team-match-main-bg-container ${id}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-inner-container">
            <img className="banner-image" src={banner} alt="team banner" />
            <div className="latest-match-main-bg-container">
              <p className="latest-match-title"> Latest Matches </p>
              <LatestMatch
                matchDetails={latestMatchList}
                key={latestMatchList.id}
              />
            </div>
            <ul className="match-card-main-bg-container">
              {matchCardList.map(eachMatch => (
                <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
