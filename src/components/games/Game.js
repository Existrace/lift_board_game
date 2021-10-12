import React from 'react';
import {Typography} from "@mui/material";

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Nom du jeu
            gameName: props.gameName,
            // La pile des cartes ?
            pile: ''
        };
    }

    addCard(card) {
        // Fonction pour ajouter une carte à la pile

    }

    drawCard() {
        // Fonction pour piocher une carte


        //return card;
    }

    mixCards() {
        // Fonction pour mélanger la pile de cartes

    }

    render() {
        return (
            <div>
                <Typography variant="title3" gutterBottom component="div" style={{paddingTop: 20}}>
                    Hello, <br/>
                    {this.props.gameName}
                </Typography>
            </div>
        )
    }
}



