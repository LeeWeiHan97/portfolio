import React from 'react';
import styled from 'styled-components';
import './App.css';
import {Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import resume_file from './Lee Wei Han-CV.pdf';
import linkedIn from './linkedin social media icon_3609691.png';
import next_logo from './next-academy-logo.png';
import github_logo from './GitHub-Mark.png';
import netlify_logo from './netlify-logo.png';
import uom_logo from './uom-logo.png';

/* const NavBar = styled.div`
  color: white;
  background-color: white;
  display: flex;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
` */

const NavLinkTag = styled.div`
  text-decoration: none;
  font-size: 3vh;
  color: #9c9c9c;
  background-color: transparent;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  padding: 3px 3px;
  text-align: center;
  width: auto;
  border: 1px transparent;
  border-radius: 2px;
  overflow: hidden;
  outline: 0;
  cursor: pointer;
  transition: 0.6s;
  user-select: none;

  &:hover {
    text-decoration: none;
    color: black;
  }

  &:active {
    background: #787878;
    transition: background 0s;
  }
`

const MyProfile = styled.div`
  position: absolute;
  display: flex;
  width: 95vw;
  height: 100px;
  border: 1px solid black;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-custom" bg="light" expand="lg">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div class="nav-right-bar">
              <Nav.Link href="#aboutme_link" className="nav-right">About Me</Nav.Link>
              <Nav.Link href="#education_link" className="nav-right">Education</Nav.Link>
              <Nav.Link href="#extracurricular_link" className="nav-right">Extracurricular</Nav.Link>
              <Nav.Link href="#link" className="nav-right">Working Experience</Nav.Link>
              <Nav.Link href="#link" className="nav-right">Projects</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <div class="parent-container-profile">
          <div class="container-profile">
            <p class="profile-heading-1">Hello</p>
            <p class="profile-heading-2">I'am Wei Han</p>
            <p class="profile-heading-1">Chemical Engineering Fresh Graduate</p>
            <p class="profile-description">I have just graduated from The University of Manchester and am interested in an IT-based job. I completed NEXT Academy's Full-Stack Web Developer Course and have fallen in love with programming ever since!</p>
            <img id="profile-picture" src="data:image/jpeg;base64,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"></img>
            <a href={resume_file} download="Lee Wei Han's resume"><button id="resume-button" href="">My resume</button></a>
          </div>
        </div>

        <div class="about-me-parent-container">
          <a id="aboutme_link">
            <div class="heading-1">
              <p>About Me</p>
            </div>
          </a>

          <div class="about-me-container">
            <div class="bio-container">
              <p class="heading-2">Introduction</p>
              <div class="bio-description-container">
                <p class="bio-description">My full name is Lee Wei Han and I am currently 23 years old. My hobbies include sports such as frisbee and badminton. I also enjoy computer gaming on the side.</p>
              </div>
            </div>

            <div class="contact-container">
              <p class="heading-2">Contact Me</p>
              <div class="mobile-container">
                <p class="mobile-heading">Mobile no.</p>
                <p class="mobile-description">+60166039919</p>
              </div>
              <div class="email container">
                <p class="mobile-heading">Email</p>
                <p class="mobile-description">weihanlee88@gmail.com</p>
              </div>
              <p class="mobile-heading">LinkedIn</p>
              <div class="image-container"><a href="https://www.linkedin.com/in/wei-han-lee-9b1a7b161/" target="_blank"><img src={linkedIn} id="linkedin-logo"></img></a></div>         
            </div>
          </div>
        </div>

        <div class="education-parent-container">
          <a id="education_link">
            <div class="heading-1">
              <p>Education</p>
            </div>
          </a>

          <div class="education-container-1">
            <div class="image-container"><a href="https://www.nextacademy.com/" target="_blank"><img src={next_logo} id="next-logo"></img></a></div>
            <a href="https://www.nextacademy.com/" target="_blank"><p class="education-heading-1">NEXT Academy</p></a>
            <p class="education-heading-2">Full-Stack Web Developer Course</p>
            <p class="education-heading-3">Jul 2019 - Sept 2019</p>
          </div>

          <div class="education-container-2">
              <p class="frontend-heading-1">Front-End</p>
              <p class="frontend-heading-2">Languages</p>
              <p class="frontend-description">HTML5, CSS3, Javascript</p>
              <p class="frontend-heading-2">Library</p>
              <p class="frontend-description">React.js, Bootstrap</p>

              <p class="frontend-heading-1">Back-End</p>
              <p class="frontend-heading-2">Language</p>
              <p class="frontend-description">Python</p>
              <p class="frontend-heading-2">Frameworks</p>
              <p class="frontend-description">Flask, Jinja</p>
              <p class="frontend-heading-2">Databases</p>
              <p class="frontend-description">SQLite, PostgreSQL</p>

              <p class="frontend-heading-1">Extras</p>
              <p class="frontend-heading-2">Language</p>
              <p class="frontend-description">Flutter (for mobile app development)</p>
              <p class="frontend-heading-2">Cloud Services</p>
              <p class="frontend-description">Amazon Web Services, Heroku, Netlify, Google Firebase</p>
            
              <div class="projects-container">
                <p class="projects-heading-1">Projects</p>
                <div class="projects-heading-link">
                  <p class="projects-heading-2">Nextagram</p>
                  <a href="https://nextagram-learn.netlify.app" target="_blank"><img src={netlify_logo} id="github-logo"></img></a>
                </div>
                <p class="projects-description">A social media webapp that references features from Instagram such as logging in and posting pictures, while adding other features such as the ability to donate to users.</p>
                <div class="projects-heading-link">
                  <p class="projects-heading-2">Live chat app</p>
                  <a href="https://next-live-app.netlify.app" target="_blank"><img src={netlify_logo} id="github-logo"></img></a>
                </div>
                <p class="projects-description">A WebSocket chatting app that displays users with randomly generated names who are currently online in the app.</p>
                <div class="projects-heading-link">
                  <p class="projects-heading-2">Household-todo (Mobile app)</p>
                  <a href="https://github.com/LeeWeiHan97?tab=repositories" target="_blank"><img src={github_logo} id="github-logo"></img></a>
                </div>
                <p class="projects-description">A mobile app for users in a household to record their schedules as well as assign tasks to individuals. Extra features include alerting users of task datelines via notifications and geolocation pinpointing for nearby grocers.</p>
              </div>
          </div>

          <div class="education-container-3">
            <div class="image-container"><a href="https://www.manchester.ac.uk/" target="_blank"><img src={uom_logo} id="uom-logo"></img></a></div>
            <p class="education-heading-2">Chemical Engineering and Analytical Sciences</p>
            <p class="education-heading-3">Sept 2016 - Jul 2020</p>
          </div>

          <div class="education-container-4">
            <p class="uom-heading-1">Masters in Chemical Engineering and Analytical Sciences (Hons)</p>
            <p class="uom-heading-2">Second Class Upper | 2:1</p>
            <p class="uom-heading-1">Course Modules</p>
            <ul>
              <li class="uom-description">Transport Phenomena</li>
              <li class="uom-description">Thermodynamics</li>
              <li class="uom-description">Chemical Reaction Engineering</li>
              <li class="uom-description">Solid-Fluid Systems</li>
              <li class="uom-description">Distillation & Adsorption</li>
              <li class="uom-description">Momentum, Heat and Mass Transfer</li>
              <li class="uom-description">Safety & Reliability Engineering</li>
              <li class="uom-description">Process Synthesis</li>
              <li class="uom-description">Process Control</li>
              <li class="uom-description">Process Fluid Dynamics</li>
            </ul>
          </div>
        </div>

        <div class="extracurricular-parent-container">
          <a id="extracurricular_link">
            <div class="heading-1">
              <p>Extracurricular</p>
            </div>
          </a>
        
          <div class="extracurricular-container">
            <div class="extracurricular-subcontainer">
              <p class="heading-4">MSSM Frisbee Club</p>
              <p class="heading-5">Top 5 Committee</p>
              <p class="heading-6">2017 - 2018</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Plan and coordinate regular weekly training sessions for a club of approximately 30 people.</li>
                <li class="extracurricular-description">Responsible for the coaching and training of new members.</li>
              </ul>
            </div>

            <div class="extracurricular-subcontainer">
              <p class="heading-4">Design Project Group</p>
              <p class="heading-5">Group Leader</p>
              <p class="heading-6">2019</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Responsible for the communication between groupmates and the group supervisor to ensure high workflow efficiency.</li>
                <li class="extracurricular-description">Kept track of every official and unofficial meeting held to ensure the group work is able to be completed on time.</li>
              </ul>
            </div>

            <div class="extracurricular-subcontainer">
              <p class="heading-4">HAZOP Coursework Group</p>
              <p class="heading-5">Chairman</p>
              <p class="heading-6">2017</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Chaired and oversaw weekly meetings between a group of 7 members.</li>
                <li class="extracurricular-description">Communicated well with members to ensure each member’s progress is up to date.</li>
              </ul>
            </div>

            <div class="extracurricular-subcontainer">
              <p class="heading-4">30 Hour Famine Camp</p>
              <p class="heading-5">Volunteer</p>
              <p class="heading-6">2015</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Volunteered for my secondary school in conducting activities held during the 2 days period.</li>
                <li class="extracurricular-description">Head of station for various activities carried out, ensured smooth progression of the station game.</li>
              </ul>
            </div>

            <div class="extracurricular-subcontainer">
              <p class="heading-4">8 Hour Famine Camp</p>
              <p class="heading-5">Volunteer</p>
              <p class="heading-6">2015</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Volunteered for a primary school in taking care of students during the event.</li>
                <li class="extracurricular-description">Learnt to be patient and manage a situation when it gets out of hand.</li>
              </ul>
            </div>

            <div class="extracurricular-subcontainer">
              <p class="heading-4">25th Johor International Jamboree</p>
              <p class="heading-5">Participant</p>
              <p class="heading-6">2013</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Took part in an international event where we interacted with various individuals from all around the country and world.</li>
                <li class="extracurricular-description">Experienced and exposed myself to different cultures.</li>
              </ul>
            </div>

            <div class="extracurricular-subcontainer">
              <p class="heading-4">9th Petaling Scout's Group</p>
              <p class="heading-5">Asistant Secretary</p>
              <p class="heading-6">2013 - 2014</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Arranged and involved in meetings with teacher advisors and school board to plan activities.</li>
                <li class="extracurricular-description">Trained juniors to be upcoming secretaries by implementing a scheduled training course.</li>
                <li class="extracurricular-description">Obtained approval from the school board for various activities held by the Scout’s Group.</li>
              </ul>
            </div>

            <div class="extracurricular-subcontainer">
              <p class="heading-4">School Cooperative Club</p>
              <p class="heading-5">Asistant Head of Stock</p>
              <p class="heading-6">2013 - 2014</p>
              <ul class="extracurricular-list">
                <li class="extracurricular-description">Coordinated and carried out regular stock checks with club members.</li>
                <li class="extracurricular-description">Maintained the tidiness of the store.</li>
              </ul>
            </div>

          </div>
        
        </div>

        

      </div>
    )
  }
}

export default App;
