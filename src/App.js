import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style/animated_text.css';
import './style/background.css';
import Home from "./components/website/Home";
import Nav from "./components/website/Nav";
import BrowseGames from "./components/website/BrowseGames";
import JoinRoom from "./components/website/JoinRoom";
import CreateRoom from "./components/website/CreateRoom";


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
                    <Route exact path='/create_room' component={CreateRoom}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
