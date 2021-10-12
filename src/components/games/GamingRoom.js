import React, {Component} from 'react';
import {Typography} from "@mui/material";

/*export default class GamingRoom {

	const code;

	const players;

	const game;

	function getCode() {
		return code;
	}

	function setCode(newCode) {
		code = newCode;
	}

	function getPlayers() {
		return players;
	}

	function setPlayers(newPlayers) {
		players = newPlayers;
	}

	function getGame() {
		return game;
	}

	function setGame(newGame) {
		game = newGame;
	}

	function addPlayer(code) {
		// Fonction qui ajoute un joueur à la salle s'il a le bon code

	}
}*/

class GamingRoom extends Component {
	constructor(props) {
		super(props);

		this.state = {
			code: this.props.match.params.code,
			game_name: this.props.match.params.game_name
		};
	}

	addPlayer(code) {
		// Fonction qui ajoute un joueur à la salle s'il a le bon code

	}

	render() {
		return (
			<div>
				<Typography variant="title3" gutterBottom component="div" style={{paddingTop: 20}}>
					Room du jeu {this.props.gameName} <br/>
					Code de la salle de jeu :  {this.props.code}
					{/*Nombre de joueurs : {this.props.players|length}*/}
				</Typography>
			</div>
		);
	}
}

export default GamingRoom;
