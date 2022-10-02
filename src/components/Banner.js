import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import backgroundVid from "../assets/videos/video.mp4"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(250 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Web Developer", "Data Manager" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      if(delta >= 100){
        setDelta(prevDelta => prevDelta / 2);
      }
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div>
    <video className='backgroundVideo' src={backgroundVid} autoPlay loop muted/>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Newton Yuan</span>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer ", "Web Developer", "Data Manager" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="subtitle">I'm Newton => a 17 year-old developer who creates programs of all sorts. I consider myself capable of designing digital products
                  as well as bringing these designs to life. Ranging from; Web, Mobile, Desktop, to Cloud and Servers.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility once>
              {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img className="animate" src={headerImg} data-value="2" alt="Header Img"/>
                  </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div className="banner-padding"></div>
      <div id="skills"></div>
    </section>
    </div>
  )
}
