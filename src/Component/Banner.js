import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from"../images/headerImg.png"
import { clear } from "@testing-library/user-event/dist/clear";


export const Banner = () =>{
    const[loopNum, setLoopNum] = useState(0);
    const[isDeleting , setIsDeleting] = useState(false);
    const toRotate= ["Web Developer" , "Web Designer" , "UI/UX Designer"];
    const [text , setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;


    useEffect(()=>
     function ticker(){setInterval(()=>{
            ticker();
        },delta)

        return()=>{clearInterval(ticker)};
    }, [text]
    )
    let tick = ( )=>{
        let i =loopNum %toRotate.length;
        let fullText=toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        } 
        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);
        }  else if (isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
  <section className="banner" id="home">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline"><h5>Welcom to my Portfolio</h5></span>
                <h1>{`Hi`}<h4>{`👋`}<span className="wrap"></span></h4></h1>
                <p> I am Nasrin, a teacher and full stack class student based on Herat. i teaching Mathimatic
                    and science subjects at school since 2022 and i learning web developing at CTI center.
                    i learn HTML , CSS , BootStrap , JAVA SCRIPT and REACT. </p>
               
            </Col>
            <Col xs={12} md={6} xl={5} >
                <img  className= "img" src={headerImg} alt="Header Img"></img>
            </Col>
        </Row>
    </Container>
  </section>
    )
    
}