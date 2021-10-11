import React, {useEffect, useRef, useState} from 'react';
import {Card, CardActions, CardContent, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CasinoIcon from "@mui/icons-material/Casino";
import * as utils from '../../utils/utils_generate_code';
import {Divider, Typography} from "@mui/material";


/*List of all games available*/
const games = [
    'Detective Club'
]

function CreateRoom() {

    const [gameCode, setGameCode] = useState('')

    const inputRef = React.useRef(null)

    function generateCode() {
        let random = utils.makeid(15)
        setGameCode(random)
    }

    useEffect(() => {
            generateCode()
        }, []
    )

    const handleClick = () => {
        /* Ne fonctionne pas encore */
        const value = inputRef.current.value;
        console.log(value)
    }


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: "center"
        }}>
            <span className="animated_text">Crée une partie</span>

            <Card sx={{minWidth: 275}} style={{
                backgroundColor: "white", opacity: 0.99, paddingLeft: 50,
                paddingRight: 50, marginTop: 50
            }}>
                <CardContent>
                    <h1 style={{fontWeight: "bold", paddingBottom: 10, textAlign: "center"}}>Créer une salle</h1>

                    <InputLabel id="demo-simple-select-label">Mot de passe</InputLabel>
                    <TextField
                                ref={inputRef}
                               type="password">
                    </TextField>

                    <InputLabel style={{paddingTop: 20}} id="demo-simple-select-label">Sélectionner jeu</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={games[0]}
                        label="Selectionner jeu"
                        /*onChange={handleChange}*/
                    >
                        {games.map((game) => (
                                <MenuItem
                                    key={game}
                                    value={game}
                                >
                                    {game}
                                </MenuItem>
                            )
                        )}
                    </Select>
                    <br/><br/>

                    <Typography variant="subtitle2" gutterBottom component="div" style={{paddingTop: 20}}>
                        Code généré : <br/>
                        {gameCode}
                    </Typography>

                    <CardActions style={{paddingTop: 20}}>
                        <Button onClick={handleClick} style={{marginTop: 20}} variant="outlined">Créer salle de jeu</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateRoom;
