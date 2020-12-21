import React from 'react';
import styled from 'styled-components';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Home = () => {
    return (
        <>
        <MainContainer className="home-container">
        <div className="container">
            <h1 className="display-5 text-uppercase py-5 text-center">
                Note To Anyone Grading This
            </h1>
            <p>This is a work in a progress. For purposes of grading the ability to use react router, please click on "Guides" at the top, and navigate through some of those selections.</p>

        </div>
        </MainContainer>
        <Footer/>
        </>
    )
};

export default Home;

// Styled Components
const MainContainer = styled.div`

height: 100vh;

    h1 {
        color: black;
    }

    p {
        color: black;
        font-size: 25pt;
    }
    `;