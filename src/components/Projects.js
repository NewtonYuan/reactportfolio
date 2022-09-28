import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/threeheroes.png";
import projImg2 from "../assets/img/carai.png";
import reactportfolio from "../assets/img/reactportfolio.png";
import discordself from "../assets/img/discordselfbot.png";
import discordjs from "../assets/img/discordjs.png";
import cppminer from "../assets/img/cppminer.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, {useState} from 'react';
import video from "../assets/videos/testvid.mp4"
import projVid2 from "../assets/videos/projVid2.mp4"
import reactweb from "../assets/videos/reactweb.mp4"

export const Projects = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Range of personal projects grouped by start date.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">2022</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2021</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">2020 ></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx"
                            onMouseOver={() => setHover(true)}
                            onMouseOut={() => setHover(false)}>
                            { hover ? 
                            <video src={video} autoPlay loop muted/>
                            : 
                            <img src={projImg1}/>}
                            <div className="proj-txtx"> 
                              <h4>Android Java Game</h4>
                              <a href="https://play.google.com/store/apps/details?id=com.prestige.prestigegame&hl=en_NZ&gl=US" target = "_blank" >View on Google Play<br/></a>
                              <a href="https://github.com/NewtonYuan/threeheroesandroid" target = "_blank" >View source code</a>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx"
                            onMouseOver={() => setHover2(true)}
                            onMouseOut={() => setHover2(false)}>
                            { hover2 ? 
                            <video src={projVid2} autoPlay loop muted/>
                            : 
                            <img src={projImg2}/>}
                            <div className="proj-txtx"> 
                              <h4>Python CarAI</h4>
                              <a href="https://github.com/NewtonYuan/CarAI">View source code</a>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx"
                            onMouseOver={() => setHover3(true)}
                            onMouseOut={() => setHover3(false)}>
                            { hover3 ? 
                            <video src={reactweb} autoPlay loop muted/>
                            : 
                            <img src={reactportfolio}/>}
                            <div className="proj-txtx"> 
                              <h4>React Website</h4>
                              <a href="https://www.newtonyuan.tk" target = "_blank" >View website<br/></a>
                              <a href="https://docs.google.com/document/d/1mjvZU8idNrcoC5DxBD8N2_f-QPq53ir0b5YpQgaiglM/edit" target = "_blank" >View source code</a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx"
                            onMouseOver={() => setHover(true)}
                            onMouseOut={() => setHover(false)}>
                            { hover ? 
                            <video src={''} autoPlay loop muted/>
                            : 
                            <img src={discordself}/>}
                            <div className="proj-txtx"> 
                              <h4>Discord Self Bot</h4>
                              <a href="https://github.com/NewtonYuan/selfbotdiscord" target = "_blank" >View source code<br/></a>
                              <a href="https://docs.google.com/document/d/1mjvZU8idNrcoC5DxBD8N2_f-QPq53ir0b5YpQgaiglM/edit" target = "_blank" >View documentation</a>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx"
                            onMouseOver={() => setHover2(true)}
                            onMouseOut={() => setHover2(false)}>
                            { hover2 ? 
                            <video src={''} autoPlay loop muted/>
                            : 
                            <img src={discordjs}/>}
                            <div className="proj-txtx"> 
                              <h4>DiscordJS Bot</h4>
                              <a href="https://github.com/NewtonYuan/3amdiscordbot" target = "_blank" >View source code<br/></a>
                              <a href="https://docs.google.com/document/d/1anriC1HQ30P0qzUkPs4wpYFZvY1s742uoYUMH57aeIA/edit" target = "_blank" >View documentation</a>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx"
                            onMouseOver={() => setHover3(true)}
                            onMouseOut={() => setHover3(false)}>
                            { hover3 ? 
                            <video src={''} autoPlay loop muted/>
                            : 
                            <img src={cppminer}/>}
                            <div className="proj-txtx"> 
                              <h4>C++ Miner & Server</h4>
                              <a href="https://github.com/NewtonYuan/serverclientminer" target = "_blank" >View source code<br/></a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Projects completed before 2021 are mostly small ventures that were made along the way of learning their respective languages. Eg. Alien Invasion Python Game, Typescript React Web App, Microsoft Cognitive Services etc.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
