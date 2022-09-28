import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailkey from './emailkey.js';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

export const Contact = () => {
  const form = useRef();

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  emailjs.init(emailkey.PUBLIC_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current)
    .then ((result) => {
      alert("Message sent successfully.", result.text);
    },
    (error) => {
      alert("An error occurred, Please try again later.", error.text);
    })
    setButtonText("Send");
  };

  return (
    <section className="contact">
      <div id="connect"></div>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} med={6} sm={6} className="px-1">
                      <input type="text" name="name" placeholder="Name"/>
                    </Col>
                    <Col size={12} med={6} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"/>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
