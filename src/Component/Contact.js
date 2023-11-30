import React, { useRef } from 'react';
//import emailjs from '@emailjs/browser';
import email from"../images/email.png";
import { Col, Container, Row, Tab, Nav} from "react-bootstrap";

export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_wx412rg', 'template_8o3bebm', form.current, '-hzuI6AYPxJBJ9QSh')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

  return (
//     <section className="contact" id="contact">
//       <Container>
//       <img className='picemail' src={emailme} alt="Contact Us"></img>
//       <Row className="fo">
//       <Col xs={12} md={6} xl={5}>
            
//                </Col>
//               <Col md={6}>
//                 <h2 className='first-text'>Let's Get In Touch</h2>
                    
//     <form className='form'>
//          <Row>
//              <Col sm={6} className="px-1">
                      
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       </Col>
//       <Col sm={6} className="px-1">
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       </Col>
      
//       <label>Message</label>
//       <textarea rows={6} name="message" />

//       <button type="submit" value="Send" />
//     </Row>
    
//     </form>
//     </Col>
// </Row>
// </Container>
//</section>
    <div className='ontainer'>
      <div className='tem'>
      <div className='ontant'> 
           <div className='irst-text'>Let's get in Touch</div>
           <img src = {email} alt = "Email" className='mage'></img>
           </div>
      
      <div className='ubmit-form'>
        <h4 className='third-text txt'> Contact Us</h4>
        <form className='orm' action=''>
          <div className='nput-box'>
            <input type='text' className='nput' required></input>
            <label for = ''>Name </label>
          </div>
          <div className='nput-box'>
            <input type='email' className='nput' required></input>
            <label for = ''>Email </label>
          </div>
          <div className='nput-box'>
            <input type='tel' className='nput' required></input>
            <label for = ''>Phone </label>
          </div>
          <div className='nput-box'>
            <textarea name='' className='nput' required id='message' cols="30" rows="10"></textarea>
            <label for = ''>Message</label>
          </div>
          <button className='utton' type='submit' value="Submit">Submit</button>
        </form>
      </div>
     
    </div>
    </div>
 );
  };