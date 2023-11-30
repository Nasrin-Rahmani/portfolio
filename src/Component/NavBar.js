import { useEffect } from "react";
import { useState } from "react";
import {Navbar , Container, Nav} from "react-bootstrap";
import github from '../images/github.png'
import facebook from '../images/facebook.png'
import linkden from '../images/linkden.png'
import tweeter from '../images/tweeter.png'
 

function NavBar (){
    const[ActiveLink , setActiveLink] = useState("home");
    const[scrolled, setScrolled] = useState(false);
     
    useEffect(() =>{
        const useScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll" , onscroll );

        return () => window.removeEventListener("scroll" , onscroll);
        } , []
    )
    const onUpdateActive =(value)=>{
      setActiveLink(value);
    }
 return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={ActiveLink ==='home' ? 'activ navbar-link' : 'navbar-link'} onClick = {() =>onUpdateActive('Home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={ActiveLink ==='skills' ? 'activ navbar-link' : 'navbar-link'} onClick = {() =>onUpdateActive('Skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={ActiveLink ==='projects' ? 'activ navbar-link' : 'navbar-link'}onClick = {() =>onUpdateActive('Projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={ActiveLink ==='contact' ? 'activ navbar-link' : 'navbar-link'}onClick = {() =>onUpdateActive('Contact Me')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://avatars.githubusercontent.com/u/120251419?v=4"><img src={github} alt=""></img></a>
                    <a href="https://www.facebook.com/nasrin.rahmani.31?mibextid=LQQJ4d"><img src={facebook} alt=""></img></a>
                    <a href="https://www.linkedin.com/in/nasrin-%E3%83%84-b52292254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkden} alt=""></img></a>
                    <a href="https://x.com/nasrin_57/status/1604417899090923522?s=46&t=jMlULd7BQZhXoPdwZfcq0A"><img src={tweeter} alt=""></img></a>
                </div>
                
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
export default NavBar;