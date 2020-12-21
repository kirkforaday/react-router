import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import Footer from "./layouts/Footer";

const LevelList = () => {
  return (
    <>
      <MainContainer>
        <div className='container'>
          <div>
            <Link to='/level/data/0'>
              <Button className='btn btn-primary text-uppercase'>
                Bianco 2
              </Button>
            </Link>
          </div>
          <div>
            <Link to='/level/data/1'>
              <Button className='btn btn-primary text-uppercase'>
                Bianco 3
              </Button>
            </Link>
          </div>
          <div>
            <Link to='/level/data/2'>
              <Button className='btn btn-primary text-uppercase'>
                Bianco 4
              </Button>
            </Link>
          </div>
          <div>
            <Link to='/level/data/3'>
              <Button className='btn btn-primary text-uppercase'>
                Gelato 8
              </Button>
            </Link>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default LevelList;

// Styled Components

const MainContainer = styled.div`
  background: yellow;

  height: 100vh;

  h1 {
    color: black;
  }
`;
