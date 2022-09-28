import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)
  const [openModal4, setOpenModal4] = useState(false)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  
  window.addEventListener("scroll", () => {
    setOpenModal(false);
    setOpenModal2(false);
    setOpenModal3(false);
    setOpenModal4(false);
  });

  const Modal = ({ open, onClose }) => {
    if(!open) return null;
    return (
      <div onClick={(e) => {
        e.stopPropagation();
      }} className='modalContainer'>
      <div className='gradient-title'>
        <h2 className='modalh2'>Languages</h2>
        </div>
        <img src={require("../assets/img/languages.png")} alt=''/>
        <div className='modalRight'>
          <p onClick={onClose} className='closeBtn'>X</p>
        </div>
      </div>
    )
  }

  const Modal2 = ({ open, onClose }) => {
    if(!open) return null;
    return (
      <div onClick={(e) => {
        e.stopPropagation();
      }} className='modalContainer'>
      <div className='gradient-title'>
        <h2 className='modalh2'>Libraries</h2>
        </div>
        <img src={require("../assets/img/libraries.png")} alt=''/>
        <div className='modalRight'>
          <p onClick={onClose} className='closeBtn'>X</p>
        </div>
      </div>
    )
  }

  const Modal3 = ({ open, onClose }) => {
    if(!open) return null;
    return (
      <div onClick={(e) => {
        e.stopPropagation();
      }} className='modalContainer'>
      <div className='gradient-title'>
        <h2 className='modalh2'>Applications</h2>
        </div>
        <img src={require("../assets/img/applications.png")} alt=''/>
        <div className='modalRight'>
          <p onClick={onClose} className='closeBtn'>X</p>
        </div>
      </div>
    )
  }

  const Modal4 = ({ open, onClose }) => {
    if(!open) return null;
    return (
      <div onClick={(e) => {
        e.stopPropagation();
      }} className='modalContainer'>
      <div className='gradient-title'>
        <h2 className='modalh2'>Designing</h2>
        </div>
        <img src={require("../assets/img/designing.png")} alt=''/>
        <div className='modalRight'>
          <p onClick={onClose} className='closeBtn'>X</p>
        </div>
      </div>
    )
  }

  return (
    <section className="skill" onClick={() => {
      if(openModal)setOpenModal(false); 
      if(openModal2)setOpenModal2(false)
      if(openModal3)setOpenModal3(false)
      if(openModal4)setOpenModal4(false)
    }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am comfortable when working with experts, but I also enjoy working alongside developers with less experience.
                        Cooperation, teaching and learning are all part of the developing process. It is important to me that a work-place
                        offers sufficient resources and a healthy environment for these to happen.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <div className="item-container">
                                <img src={require("../assets/img/languages.png")} className="blurredImg" alt="Image"/>
                                <div className="middle" onClick={() => setOpenModal(true)}>
                                  <div>Expand</div>
                                </div>
                                </div>
                                <h5>Languages</h5>
                            </div>
                            <div className="item">
                            <div className="item-container">
                                <img src={require("../assets/img/libraries.png")} className="blurredImg" alt="Image"/>
                                <div className="middle" onClick={() => setOpenModal2(true)}>
                                  <div>Expand</div>
                                </div>
                                </div>
                                <h5>Libraries</h5>
                            </div>
                            <div className="item">
                            <div className="item-container">
                                <img src={require("../assets/img/applications.png")} className="blurredImg" alt="Image"/>
                                <div className="middle" onClick={() => setOpenModal3(true)}>
                                  <div>Expand</div>
                                </div>
                                </div>
                                <h5>Applications</h5>
                            </div>
                            <div className="item">
                            <div className="item-container">
                                <img src={require("../assets/img/designing.png")} className="blurredImg" alt="Image"/>
                                <div className="middle" onClick={() => setOpenModal4(true)}>
                                  <div>Expand</div>
                                </div>
                                </div>
                                <h5>Designing</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className={"animate__animated animate__fadeIn"}>
            <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
            <Modal2 open={openModal2} onClose={()=> setOpenModal2(false)}/>
            <Modal3 open={openModal3} onClose={()=> setOpenModal3(false)}/>
            <Modal4 open={openModal4} onClose={()=> setOpenModal4(false)}/>
            </div>
        </div>
    </section>
  )
}
