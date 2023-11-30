import { Container , Row , Col } from "react-bootstrap"
import github from '../images/github.png'
import facebook from '../images/facebook.png'
import linkden from '../images/linkden.png'
import copy from '../images/copy.png'
import tweeter from '../images/tweeter.png'
 

export const Footer = () => {
    return(
        <footer className = "footer">
            <div>
            <Container>
                <Row className = "align-item-center">
                    
                    <Col sm={6}>
                        
                    </Col>
                    <div >
                    <Col sm = {6} className="text-center text-sm-end ">
                        <div className="social-icon">
                        <a href="https://avatars.githubusercontent.com/u/120251419?v=4"><img src={github} alt=""></img></a>
                        <a href="https://www.facebook.com/nasrin.rahmani.31?mibextid=LQQJ4d"><img src={facebook} alt=""></img></a>
                        <a href="https://www.linkedin.com/in/nasrin-%E3%83%84-b52292254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkden} alt=""></img></a>
                        <a href="https://x.com/nasrin_57/status/1604417899090923522?s=46&t=jMlULd7BQZhXoPdwZfcq0A"><img src={tweeter} alt=""></img></a>
                        </div>
                      <p> © CopyRight 2023. All Right Reserve</p>
                    </Col>
                    </div>
                </Row>
            </Container>
            </div>
        </footer>
    )

}