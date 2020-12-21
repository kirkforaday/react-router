import React from 'react';
import styled from 'styled-components';
import Footer from './layouts/Footer';
import {Link, useParams} from 'react-router-dom';
import {Button} from './Button';
import LevelPics from './LevelPics';

/* Level Image Imports*/
import Bianco2 from '../Images/Bianco2.png';
import Bianco3 from '../Images/Bianco3.png';
import Bianco4 from '../Images/Bianco4.png';
import Gelato8 from '../Images/Gelato8.png';

const LEVELS = [
    {
        id: 0,
        name: "Bianco 2",
        lvlImg: Bianco2,
        info1: "Placeholder",
        info2: "Placeholder",  
    },
    {
        id: 1,
        name: "Bianco 3",
        lvlImg: Bianco3,
        info1: "Placeholder",
        info2: "Placeholder",
    },
    {
        id: 2,
        name: "Bianco 4",
        lvlImg: Bianco4,
        info1: "Placeholder",
        info2: "Placeholder",
    },
    {
        id: 3,
        name: "Gelato 8",
        lvlImg: Gelato8,
        info1: "Placeholder",
        info2: "Placeholder",
    },
]

const LevelData = () => {
    let {id} = useParams();
    let level = LEVELS[parseInt(id, 4)]
    return (
        <>
        <MainContainer>
            <div className="container mb-5">
                <LevelPics levelImage={level.lvlImg}/>
        <h1>{level.name}</h1>
        <p>{level.info1}</p>
        <p>{level.info2}</p>
        <Link to="/guides">
            <Button className="btn btn-primary text-uppercase">
                Back To Levels
            </Button>
        </Link>
        </div>
        </MainContainer>
        <Footer />
        </>
    )
}

export default LevelData;

// Styled Components

const MainContainer = styled.div`

background: yellow;
height: 100vh;

h1 {
    color: black;
    font-size: 55pt;
    
}

p {
    color: black;
    font-size: 18pt;
}

padding: 35px;

`;
