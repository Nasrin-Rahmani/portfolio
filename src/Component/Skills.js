import { Container , Row , Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import m from"../images/m.png"
import nine from"../images/nine.png"
import Sixty from"../images/Sixty.png"


export const Skills = () => {
   const responsive = {
    SuperLargeDesktop : {
    breakpoint : {max : 4000 , min : 3000},
    items : 5
   } ,
   desktop : {
    breakpoint : {max : 3000 , min : 1024},
    items : 3
   },
   tablet : {
    breakpoint : {max : 1024 , min : 464},
    items : 2
   },
   mobile : {
    breakpoint : {max : 464 , min : 0},
    items : 1
   }
};
return(
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                <Carousel responsive={responsive} infinite = {true} className="skill-slider">
                    <div className="item">
                    <img src={m} alt="image"></img>
                        <h5>HTML</h5>
                    </div>
                    <div className="item">
                    <   img src={m} alt="image"></img>
                        <h5>CSS</h5>
                    </div>
                    <div className="item">
                        <img src={m} alt="image"></img>
                        <h5>BootStrap</h5>
                    </div>
                    <div className="item">
                        <img src={nine} alt="image"></img>
                        <h5>Java Script</h5>
                    </div>
                    <div className="item">
                        <img src={Sixty} alt="image"></img>
                        <h5>React</h5>
                    </div>
                </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        
    </section>
)
}
