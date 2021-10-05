import React from 'react';
import {Box, Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import picture_detective_club from '../img/detective-club/detective_club_picture.jpg'
import PropTypes from "prop-types";
import {Link} from "@mui/material";

let cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '20vw'
}

function Item(props) {
    const {sx, ...other} = props;
    return (
        <Box
            sx={{
                color: 'white',
                p: 1,
                m: 1,
                borderRadius: 1,
                textAlign: 'center',
                fontSize: 19,
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.object,
};


function BrowseGames() {

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box sx={{display: 'grid'}}>

                <span className="animated_text" style={{paddingBottom: 40}}>Liste des jeux</span>

                <Card style={cardStyle} sx={{maxWidth: 150}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={picture_detective_club}
                            alt="detective_club"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Detective Club
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Une nouvelle fois, le Detective Club ouvre ses portes à de nouveaux membres. 
								Pour pouvoir l'intégrer, il va falloir montrer de quoi vous êtes capable. 
								Analysez les preuves, écoutez les témoins et identifiez qui dans le groupe ment à tous les autres.
                                Seul le plus observateur et le plus rusé remportera la victoire. Bienvenue au Detective Club !
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to='/browse_game'>
                            <Button color="inherit">
                                Détails
                            </Button>
                        </Link>
                        <Link to='/join_room'>
                            <Button color="inherit">
                                Rejoindre une salle
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}


export default BrowseGames;
