import React, { Component, setState } from "react";
import {Navbar, Nav } from 'react-bootstrap'; 
import '../../scss/layout/_header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
      }



      //ARROW FUNCTION
    toggle = () => {
        this.setState({
            expanded: !this.state.expanded
        });

        
    }

    

  render() {
    if(this.state.expanded){
        document.body.classList.add('body--overflow');   
    }else {
        document.body.classList.remove('body--overflow'); 
    }
    return (
      <div className='header'>
        <Navbar expand="lg" onToggle={this.toggle}  
                expanded={this.state.expanded}>
            <Navbar.Brand href="#">
                <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.375 24H12.375C11.9625 24 11.625 23.6625 11.625 23.25V0.75C11.625 0.3375 11.9625 0 12.375 0H18.375C18.7875 0 19.125 0.3375 19.125 0.75V23.25C19.125 23.6625 18.7875 24 18.375 24Z" fill="#ca0131"></path><path d="M34.125 24H28.125C27.7125 24 27.375 23.6625 27.375 23.25V0.75C27.375 0.3375 27.7125 0 28.125 0H34.125C34.5375 0 34.875 0.3375 34.875 0.75V23.25C34.875 23.6625 34.5375 24 34.125 24Z" fill="#ca0131"></path><path d="M6.75 24H0.75C0.3375 24 0 23.6625 0 23.25V0.75C0 0.3375 0.3375 0 0.75 0H6.75C7.1625 0 7.5 0.3375 7.5 0.75V23.25C7.5 23.6625 7.1625 24 6.75 24Z" fill="#1B1818"></path><path d="M45.75 24H39.75C39.3375 24 39 23.6625 39 23.25V0.75C39 0.3375 39.3375 0 39.75 0H45.75C46.1625 0 46.5 0.3375 46.5 0.75V23.25C46.5 23.6625 46.1625 24 45.75 24Z" fill="#1B1818"></path><path d="M57.75 24H63.75C64.1625 24 64.5 23.6625 64.5 23.25V6.75H71.2875C71.7 6.75 72 6.4125 72 6.0375V0.7125C72 0.3 71.7 0 71.2875 0H50.2125C49.8 0 49.5 0.3375 49.5 0.7125V6.0375C49.5 6.45 49.8375 6.75 50.2125 6.75H57V23.25C57 23.6625 57.3375 24 57.75 24Z" fill="#1B1818"></path><path d="M25.7625 24H34.125C33.8625 24 33.6 23.85 33.45 23.5875L22.0875 0.825C21.825 0.3375 21.3 0 20.7375 0H12.375C12.6375 0 12.9 0.15 13.05 0.4125L24.4125 23.175C24.675 23.6625 25.2 24 25.7625 24Z" fill="#1B1818"></path></svg>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="navbarScroll">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <Nav.Link href="#action1">Services</Nav.Link>
                    <Nav.Link href="#action2">Our Work</Nav.Link>
                    <Nav.Link href="#action2">Get In Touch</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;