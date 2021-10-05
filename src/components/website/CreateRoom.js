import React, {useState} from 'react';
import {Card, CardActions, CardContent, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CasinoIcon from "@mui/icons-material/Casino";
import * as utils from '../../utils/utils_generate_code';

/*List of all games available*/
const games = [
    'Detective Club'
]

function CreateRoom() {

    const [gameCode, setGameCode] = useState('')

    function generateCode() {
        let random = utils.makeid(15)
        setGameCode(random)
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

                    <InputLabel id="demo-simple-select-label">Sélectionner jeu</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        /*value={age}*/
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

                    <TextField id="outlined-basic" disabled label="Code de la salle" variant="outlined" value={gameCode}
                               onChange={(event) => setGameCode(event.target.value)}
                    />

                    <CardActions style={{paddingTop: 20}}>
                        <Button style={{marginTop: 20}} size="small" variant="contained"
                                onClick={generateCode}><CasinoIcon/> Générer code</Button>
                        <Button style={{marginTop: 20}} variant="outlined">Créer salle de jeu</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateRoom;
