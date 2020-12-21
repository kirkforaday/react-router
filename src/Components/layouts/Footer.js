import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container-fluid">
                <div className="row pt-5">
                    {/* Column 1 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                     {/* Column 2 */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                     {/* Column 3 */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                     {/* Column 4 */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                    <p className="pt-3 pb-2 pl-5 copy-right">
                        &copy;&nbsp;Ryan Kirk
                        &nbsp;{`${new Date().getFullYear()}`}
                    </p>
                </div>
            </div>

        </FooterContainer>
    )
}

export default Footer;

// Styled Components

const FooterContainer = styled.div`

background: black !important;

ul li {
    list-style: none;
}

a {
    color: white;
    text-decoration: none;
    &:hover {
        color: yellow;
    }
}

.copy-right {
    color: white;
}


`;