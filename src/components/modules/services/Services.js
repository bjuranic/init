import React, { Component } from "react";
import {Container, Row, Col } from 'react-bootstrap'; 
import '../../scss/sections/_services.scss';

import cloudIcon from '../../assets/svg/cloud.svg';
import penToolIcon from '../../assets/svg/pen-tool.svg';
import smartphoneIcon from '../../assets/svg/smartphone.svg';
import hardDriveIcon from '../../assets/svg/hard-drive.svg';
import monitorIcon from '../../assets/svg/monitor.svg';
import starIcon from '../../assets/svg/star.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Services extends Component {

    componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
        // initialise with other settings
        duration : 2000
    });
    }
  render() {
    return (
        <div className="services-section">
            <Container className="container--fluid">
                <Row>
                    <Col> 
                        <div className="services-section__content" data-aos='zoom-in'>
                            <h2 className="services-section__title">
                                Services
                            </h2>

                            <p className="services-section__text">
                                We don’t just create websites and apps, we create meaningful digital experiences. Our services are focused on what we do best – help you grow your business.
                                <br/> <br/>
                                Let’s work together!
                            </p>

                            <ul className="services-section__list">
                                <li className="services-section__item" data-aos='fade-right'>
                                    <img src={cloudIcon} className="services-section__item-image" alt="" />
                                    <p className="services-section__item-label">Dev ops</p>
                                </li>
                                <li className="services-section__item" data-aos='fade-left'>
                                    <img src={penToolIcon} className="services-section__item-image" alt="" />
                                    <p className="services-section__item-label">UX/UI Design</p>
                                </li>
                                <li className="services-section__item" data-aos='fade-right'>
                                    <img src={smartphoneIcon} className="services-section__item-image" alt="" />
                                    <p className="services-section__item-label">Mobile App Development</p>
                                </li>
                                <li className="services-section__item" data-aos='fade-left'>
                                    <img src={hardDriveIcon} className="services-section__item-image" alt="" />
                                    <p className="services-section__item-label">Back-end Development</p>
                                </li>
                                <li className="services-section__item" data-aos='fade-right'>
                                    <img src={monitorIcon} className="services-section__item-image" alt="" />
                                    <p className="services-section__item-label">Web Development</p>
                                </li>
                                <li className="services-section__item" data-aos='fade-left'>
                                    <img src={starIcon} className="services-section__item-image" alt="" />
                                    <p className="services-section__item-label">IT Consulting</p>
                                </li>

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Services;