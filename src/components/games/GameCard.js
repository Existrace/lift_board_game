import React from 'react';

const GameCard = ({numCard}, {gameName}) => {

	function formatGameName(gameName) {
		return gameName.toLowerCase().replace(" ", "-");
	}

	gameName = formatGameName(gameName);

	return (
		<div>
			<img src={require(`../../img/${gameName}/game_card/${numCard}.png`)}  alt={`card-${numCard}`}/>
		</div>
	);
}

export default GameCard


