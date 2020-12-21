import React from 'react';
import logo from '../../Images/shinesprite.png';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/"><img src={logo} alt="Shine Sprite"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/splits">Splits</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/guides">Guides</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/resources">Resources</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </NavbarContainer>
    )
}

export default Navbar

// Styled Components

const NavbarContainer = styled.div`

nav {
    background: black !important;
}

img {
    width: 2.5rem;
}

.nav-link {
    color: white !important;
    &:hover {
        background: yellow !important;
        color: black !important;
    }
}

.active {
    background: yellow;
    color: black !important;
}
`;