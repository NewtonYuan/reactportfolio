import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer" >
      <Container >
        <Row style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
          <Col size={12} sm={6} className="text-center">
            <div className="social-icon">
                <Row>
                <a href="https://www.linkedin.com/in/newton-yuan-a39667223/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/NewtonYuan" target="_blank"><img src={navIcon2} alt="" style={{width: '150%'}}/></a>
                </Row>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
