import React from 'react';

const Card = ({numCard}) => {

	return (
		<div>
			<img src={require(`../../img/detective-club/game_card/${numCard}.png`)}  alt={`card-${numCard}`}/>
		</div>
	);
}

export default Card


