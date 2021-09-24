import React, { Component } from "react";
import {Container, Row, Col } from 'react-bootstrap'; 
import '../../scss/sections/_hero.scss';
import ribbonIcon from '../../assets/svg/ribbon.svg';

class Hero extends Component {
  render() {
    return (
        <div className="hero-section">
            <Container className="container--fluid">
                <Row>
                    <Col> 
                        <div className="hero-section__info">
                            <h1 className="hero-section__title">
                                Accelerating business growth
                            </h1>

                            <p className="hero-section__text">
                                through software, web & app development and consolting services
                            </p>

                            <button type="button" className="hero-section__btn">
                                Get in touch
                            </button>
                        </div>
                        <div className="hero-section__ribbon">
                            <img src={ribbonIcon} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Hero;