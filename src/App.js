import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
  </Switch>
)

// const App = () => <h1>Remove this heading and write your code here</h1>

export default App
