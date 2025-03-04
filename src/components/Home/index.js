// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getListOfTeams()
  }

  getListOfTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    console.log(teams)

    const formattedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      isLoading: false,
      teamsList: formattedData,
    })
  }

  render() {
    const {isLoading, teamsList} = this.state
    return (
      <div className="ipl-dashboard-home-main-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="ipl-dashboard-home-inner-container">
            <div className="ipl-dashboard-home-title-container">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="ipl-dashboard-home-main-title"> IPL Dashboard </h1>
            </div>
            <ul className="team-list-home-bottom-column">
              {teamsList.map(eachTeam => (
                <li className="team-card-link-container" key={eachTeam.id}>
                  <TeamCard teamDetails={eachTeam} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
