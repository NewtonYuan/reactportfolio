import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  useNavigate
} from "react-router-dom";


var stopScroll = true;

export const NavBar = () => {
  //document.body.style.overflow = "hidden"

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  //window.onwheel = e => {
  //  if(stopScroll){
  //    stopScroll = false;
  //    setTimeout(() => {
  //      stopScroll = true;
  //    }, 700);
  //    if(e.deltaY >= 0){
  //      if(activeLink === "home"){
  //        const element = document.getElementById("skills");
  //        const y = element.getBoundingClientRect().top + window.scrollY - 75;
  //        window.scroll({
  //          top: y,
  //          behavior: 'smooth'
  //        })
  //        setActiveLink('skills');
  //      }
  //      if(activeLink === "skills"){
  //        const element = document.getElementById("projects");
  //        const y = element.getBoundingClientRect().top + window.scrollY - 75;
  //        window.scroll({
  //          top: y,
  //          behavior: 'smooth'
  //        })
  //        setActiveLink('projects')
  //      }
  //      if(activeLink === "projects"){
  //        const element = document.getElementById("connect");
  //        const y = element.getBoundingClientRect().top + window.scrollY - 75;
  //        window.scroll({
  //          top: y,
  //          behavior: 'smooth'
  //        })
  //      }
  //    } else {
  //      if(activeLink === "home"){
  //        //empty
  //      }
  //      if(activeLink === "skills"){
  //        window.scrollTo(0,0)
  //        setActiveLink('home')
  //      }
  //      if(activeLink === "projects"){
  //        const element = document.getElementById("skills");
  //        const y = element.getBoundingClientRect().top + window.scrollY - 75;
  //        window.scroll({
  //          top: y,
  //          behavior: 'smooth'
  //        })
  //        setActiveLink('skills')
  //      }
  //    }
  //  }
  //}

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text" >
              <div className="social-icon" >
                <Row>
                <a href="https://www.linkedin.com/in/newton-yuan-a39667223/" target="_blank"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/NewtonYuan" target="_blank"><img src={navIcon2} alt="" style={{width: '150%'}}/></a>
                </Row>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Contact Me</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
