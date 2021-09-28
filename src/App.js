import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style/animated_text.css';
import './style/background.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import BrowseGames from "./components/BrowseGames";
import JoinRoom from "./components/JoinRoom";


function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                {/*<div style={{margin: '0 !important'}} id='navMargin'/>*/}
                {/*<Background/>*/}
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/browse_game' component={BrowseGames}/>
                    <Route exact path='/join_room' component={JoinRoom}/>
                    {/*<Route path='/normal/:room/:gameid/:user/:maxpodium' component={GameRoom}/>
                    <Route path='/multi/:room/:gameid/:user/:maxpodium' component={MultiGameRoom}/>
                    <Route path='/newquiz' component={NewQuiz}/>
                    <Route path='/new-multi-quiz' component={NewMultiQuiz}/>
                    <Route path='/browsequizzes/:gamemode' component={BrowseQuizes}/>
                    <Route path='/roomleave' component={AfterRoomLeave}/>
                    <Route path='/gamefinsihed/:room/:user' component={GameEnded}/>
                    <Route path='/quiz/normal/:code' component={ViewQuiz}/>
                    <Route path='/quiz/multi/:code' component={ViewMultiQuiz}/>*/}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
