import React, {Component} from 'react';

/*export default class Player {

	const id;

	const hand;

	const table;

	// Pour detective club
	const word;

	function getId() {
		return id;
	}

	function setId(newId) {
		id = newId;
	}

	function getHand() {
		return hand;
	}

	function setHand(newHand) {
		hand = newHand;
	}

	function getTable() {
		return table;
	}

	function setTable(newTable) {
		table = newTable;
	}

	function getWord() {
		return word;
	}

	function setWord(newWord) {
		word = newWord;
	}

	function playCard(card) {
		// Fonction pour poser une carte de la main sur la table

	}
}*/

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hand: ''
        };
    }

    playCard(card) {
        // Fonction pour poser une carte de la main sur la table

    }

    render() {

        const word = ''

        return (
            <div>

            </div>
        );
    }
}

export default Player;
