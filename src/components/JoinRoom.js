import React from 'react';
import {Card, CardActions, CardContent, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const JoinRoom = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: "center"
        }}>
            <span className="animated_text">Rejoindre une partie</span>

            <Card sx={{minWidth: 275}} style={{
                backgroundColor: "white", opacity: 0.99, paddingLeft: 50,
                paddingRight: 50, marginTop: 50
            }}>
                <CardContent>
                    <h1 style={{fontWeight: "bold", paddingBottom: 10, textAlign: "center"}}>Rejoindre une salle</h1>

                    <TextField style={{textAlign: "center"}} id="outlined-basic" label="Code de la salle" variant="outlined"/>

                    <CardActions style={{paddingTop: 20, textAlign: "center"}}>
                        <Button variant="outlined">Rejoindre salle de jeu</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default JoinRoom;
