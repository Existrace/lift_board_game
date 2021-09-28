import React from 'react';
import {Box} from "@material-ui/core";
import PropTypes from "prop-types";

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

function Home(props) {
    return (
        <>
            <div style={{width: '100%'}}>
                <Box sx={{display: 'grid', gridTemplateRows: 'repeat(3, 1fr)'}}>
                    <Item><span className="animated_text">Lift Board Game</span></Item>
                </Box>
            </div>
        </>
    );
}

export default Home;
