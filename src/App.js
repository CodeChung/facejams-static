import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import CalendarPage from './routes/CalendarPage/CalendarPage';
import Preferences from './routes/VibesPage/Vibes';
import LoginPage from './routes/LoginPage/LoginPage'
import AppContext from './AppContext';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import HomePage from './routes/HomePage/HomePage';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      update: false,
      entry: {},
      tracks: [{album: "ye", artist: "Kanye West", id: "7vgTNTaEz3CsBZ1N4YQalM", img: "https://i.scdn.co/image/05cf2f8b56e595bcbf50fccb894f5fb6c2427750", name: "Ghost Town", user_id: 2}], 
      artists: [{id: "2h93pZq0e7k5yf4dywlkpM", img:  "https://i.scdn.co/image/7db34c8aace6feb91f38601bb75e6b3301b4657a", name: "Frank Ocean", user_id: 2}, {
        id: "5K4W6rqBFWDnAN6FQUkS6x", img: "https://i.scdn.co/image/a12d8543e28d71d9f1e7f5f363c1a6c73316f9e6", name: "Kanye West", user_id: 2
      }]
    }
  }
  logout() {
    this.setState({update: false})
  }
  rerender() {
    this.setState({update: true})
  }
  setEntry(entry) {
    this.setState({entry})
  }
  renderUser() {
    return (
      <div className="App">
        <nav className="navigation">
          <div className='nav-start'>FaceJams</div>
          <div className='nav-mid'>
            <Link to='/'>Home</Link>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/vibes'>Preferences</Link>
          </div>
          <div className='nav-end'>
            <Link to='/login' onClick={() => this.logout()}>Logout</Link>
          </div>
        </nav>
        <section className="main">
          <Route exact path='/' component={HomePage}/>
          <Route path='/vibes' component={Preferences}/>
          <Route path='/calendar' component={CalendarPage}/>
        </section>
      </div>
    )
  }
  renderNonUser() {
    return (
      <div className="App">
        <nav className="navigation">
          <div className='nav-start'>FaceJams</div>
          <div className='nav-end'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        </nav>
        <section className="main">
          <Route exact path='/' component={LandingPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' render={props => <RegistrationPage refresh={() => this.rerender()}/>}/>
        </section>
      </div>
    )
  }
  view() {
    return this.renderUser()
  }
  render() {
    const contextValue = {
      setEntry: (entry) => this.setEntry(entry),
      entry: this.state.entry,
      artists: this.state.artists,
      tracks: this.state.tracks,
      logged: false
    }
    return (
      <AppContext.Provider value={contextValue}>
        <div className='view'>
          {this.view()}
        </div>
      </AppContext.Provider>
      
        
      )
  }
  
}

export default App;
