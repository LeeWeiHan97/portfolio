import React from 'react';
import styled from 'styled-components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import resume_file from './Lee Wei Han CV.pdf';
import linkedIn from './linkedin social media icon_3609691.png';
import next_logo from './next-academy-logo.png';
import github_logo from './GitHub-Mark.png';
import netlify_logo from './netlify-logo.png';
import uom_logo from './uom-logo.png';
import frisbee_logo from './frisbee.png';
import designproject_logo from './design-project.png';
import hazop_logo from './hazop.png';
import thirty_hour_famine_logo from './30-hour-famine.png';
import eight_hour_famine_logo from './8-hour-famine.png';
import jij_logo from './JIJ.png';
import scouts_logo from './scouts.png';
import chs_logo from './chs.png';
import blackmores_logo from './blackmores.png';
import facebook_logo from './facebook.png';
import linkedin_logo from './linkedin.png';
import profile_picture from './profile_picture.jpg';
import back_to_top from './back-to-top.png';
import icy_mountains from './icy_mountains.jpg';
import about_me from './about-me.png';

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

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
} 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: false
    };
  }

  render() {
    return (
      <div>
        <a id="top_link"></a>
        <Navbar className="navbar-custom" bg="light" expand="lg">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div class="nav-right-bar">
              <Nav.Link href="#aboutme_link" className="nav-right">About Me</Nav.Link>
              <Nav.Link href="#education_link" className="nav-right">Education</Nav.Link>
              <Nav.Link href="#extracurricular_link" className="nav-right">Extracurricular</Nav.Link>
              <Nav.Link href="#working_experience_link" className="nav-right">Working Experience</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <div class="parent-container-profile">
          <img src={icy_mountains} class="profile-background"></img>
          <div class="container-profile">
            <p class="profile-heading-1">Hello</p>
            <p class="profile-heading-2">I'am Wei Han</p>
            <p class="profile-heading-1">Chemical Engineering Fresh Graduate</p>
            <p class="profile-description">I have just graduated from The University of Manchester and am interested in an IT-based job. I completed NEXT Academy's Full-Stack Web Developer Course and have fallen in love with programming ever since!</p>
            <img id="profile-picture" src={profile_picture}></img>
            <a href={resume_file} download="Lee Wei Han's resume" class="button-container"><button id="resume-button" href="">My resume</button></a>
          </div>
        </div>

        <div class="about-me-parent-container">
          <a id="aboutme_link">
            <div class="aboutme-header">
              <img src={about_me} class="about-me-image"></img>
              <p>HEY THERE</p>
            </div>
          </a>

          <div class="about-me-container">
            <div class="bio-container">
              <div class="bio-description-container">
                <p class="bio-description">My full name is Lee Wei Han and I am currently 23 years old. </p>
                <p class="bio-description">My hobbies include sports such as frisbee and badminton. </p>
                <p class="bio-description">I also enjoy computer gaming on the side.</p>
              </div>
            </div>

            <div class="contact-container">
              <div class="mobile-container">
                <p class="mobile-heading">Mobile no.</p>
                <p class="mobile-description">+60166039919</p>
              </div>
              <div class="email container">
                <p class="mobile-heading">Email</p>
                <p class="mobile-description">weihanlee88@gmail.com</p>
              </div>
              <div>
                <p class="mobile-heading">LinkedIn</p>
                <div class="image-container"><a href="https://www.linkedin.com/in/wei-han-lee-9b1a7b161/" target="_blank"><img src={linkedIn} id="linkedin-logo"></img></a></div>         
              </div>
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
            <div class="education-container-left">
              <div class="image-container"><a href="https://www.nextacademy.com/" target="_blank"><img src={next_logo} id="next-logo"></img></a></div>
              <a href="https://www.nextacademy.com/" target="_blank"><p class="education-heading-1">NEXT Academy</p></a>
            </div>
            <div class="education-container-right">
              <p class="education-heading-2">Full-Stack Web Developer Course</p>
              <p class="education-heading-3">Jul 2019 - Sept 2019</p>
            </div>
          </div>

          <div class="education-container-2">
              <p class="frontend-heading-1">Front-End</p>
              <p class="frontend-heading-2">Languages</p>
              <div class="list-container">
                <p class="frontend-description">HTML5</p>
                <div class="html"></div>
              </div>
              <div class="list-container">
                <p class="frontend-description">CSS3</p>
                <div class="css"></div>
              </div>
              <div class="list-container">
                <p class="frontend-description">Javascript</p>
                <div class="js"></div>
              </div>
              <p class="frontend-heading-2">Library</p>
              <div class="list-container">
                <p class="frontend-description">React.js</p>
                <div class="react"></div>
              </div>
              <div class="list-container">
                <p class="frontend-description">Bootstrap</p>
                <div class="bootstrap"></div>
              </div>
          </div>

          <div class="education-container-5">
              <p class="frontend-heading-1">Back-End</p>
              <p class="frontend-heading-2">Language</p>
              <div class="list-container">
                <p class="frontend-description">Python</p>
                <div class="python"></div>
              </div>
              <p class="frontend-heading-2">Frameworks</p>
              <div class="list-container">
                <p class="frontend-description">Flask</p>
                <div class="flask"></div>
              </div>
              <div class="list-container">
                <p class="frontend-description">Jinja</p>
                <div class="jinja"></div>
              </div>
              <p class="frontend-heading-2">Databases</p>
              <div class="list-container">
                <p class="frontend-description">SQLite</p>
                <div class="sqlite"></div>
              </div>
              <div class="list-container">
                <p class="frontend-description">PostgreSQL</p>
                <div class="postgresql"></div>
              </div>
          </div>

          <div class="education-container-2">
              <p class="frontend-heading-1">Extras</p>
              <p class="frontend-heading-2">Language</p>
              <p class="frontend-description">Flutter (for mobile app development)</p>
              <p class="frontend-heading-2">Cloud Services</p>
              <p class="frontend-description">Amazon Web Services, Heroku, Netlify, Google Firebase</p>
          </div>

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

          <div class="education-container-1">
            <div class="image-container"><a href="https://www.manchester.ac.uk/" target="_blank"><img src={uom_logo} id="uom-logo"></img></a></div>
            <p class="education-heading-2">Chemical Engineering and Analytical Sciences</p>
            <p class="education-heading-3">Sept 2016 - Jul 2020</p>
          </div>

          <div class="education-container-6">
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
            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">MSSM Frisbee Club</p>
                <p class="heading-5">Top 5 Committee</p>
                <p class="heading-6">2017 - 2018</p>
                <img class="extracurricular-images" src={frisbee_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Plan and coordinate regular weekly training sessions for a club of approximately 30 people.</li>
                  <li class="extracurricular-description">Responsible for the coaching and training of new members.</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">Design Project Group</p>
                <p class="heading-5">Group Leader</p>
                <p class="heading-6">2019</p>
                <img class="extracurricular-images" src={designproject_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Responsible for the communication between groupmates and the group supervisor to ensure high workflow efficiency.</li>
                  <li class="extracurricular-description">Kept track of every official and unofficial meeting held to ensure the group work is able to be completed on time.</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">HAZOP Coursework Group</p>
                <p class="heading-5">Chairman</p>
                <p class="heading-6">2017</p>
                <img class="extracurricular-images" src={hazop_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Chaired and oversaw weekly meetings between a group of 7 members.</li>
                  <li class="extracurricular-description">Communicated well with members to ensure each member’s progress is up to date.</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">30 Hour Famine Camp</p>
                <p class="heading-5">Volunteer</p>
                <p class="heading-6">2015</p>
                <img class="extracurricular-images" src={thirty_hour_famine_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Volunteered for my secondary school in conducting activities held during the 2 days period.</li>
                  <li class="extracurricular-description">Head of station for various activities carried out, ensured smooth progression of the station game.</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">8 Hour Famine Camp</p>
                <p class="heading-5">Volunteer</p>
                <p class="heading-6">2015</p>
                <img class="extracurricular-images" src={eight_hour_famine_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Volunteered for a primary school in taking care of students during the event.</li>
                  <li class="extracurricular-description">Learnt to be patient and manage a situation when it gets out of hand.</li>
                </ul>
              </div>
            </FadeInSection>
            
            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">25th Johor International Jamboree</p>
                <p class="heading-5">Participant</p>
                <p class="heading-6">2013</p>
                <img class="extracurricular-images" src={jij_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Took part in an international event where we interacted with various individuals from all around the country and world.</li>
                  <li class="extracurricular-description">Experienced and exposed myself to different cultures.</li>
                </ul>
              </div>
            </FadeInSection>
            
            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">9th Petaling Scout's Group</p>
                <p class="heading-5">Asistant Secretary</p>
                <p class="heading-6">2013 - 2014</p>
                <img class="extracurricular-images" src={scouts_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Arranged and involved in meetings with teacher advisors and school board to plan activities.</li>
                  <li class="extracurricular-description">Trained juniors to be upcoming secretaries by implementing a scheduled training course.</li>
                  <li class="extracurricular-description">Obtained approval from the school board for various activities held by the Scout’s Group.</li>
                </ul>
              </div>
            </FadeInSection>
            
            <FadeInSection>
              <div class="extracurricular-subcontainer">
                <p class="heading-4">School Cooperative Club</p>
                <p class="heading-5">Asistant Head of Stock</p>
                <p class="heading-6">2013 - 2014</p>
                <img class="extracurricular-images" src={chs_logo}></img>
              </div>

              <div class="fade-in">
                <ul class="extracurricular-list">
                  <li class="extracurricular-description">Coordinated and carried out regular stock checks with club members.</li>
                  <li class="extracurricular-description">Maintained the tidiness of the store.</li>
                </ul>
              </div>
            </FadeInSection>
            
          </div>
        
        </div>

        <div class="working-experience-parent-container">
          <a id="working_experience_link">
            <div class="heading-1">
              <p>Working Experience</p>
            </div>
          </a>

          <div class="working-experience-container">
              <div class="working-experience-subcontainer-1">
                <img class="working-experience-image" src={blackmores_logo}></img>
                <p class="working-heading-2">Blackmores Malaysia</p>
                <p class="working-heading-3">Jul 2018 - Aug 2018</p>

              </div>

              <div class="working-experience-subcontainer-2">
                  <ul class="extracurricular-list">
                    <li class="working-description">Worked under regulatory affairs which dealt with acquiring approval for various products.</li>
                    <li class="working-description">Worked under the education department which required management of over 100 pharmacists from Malaysia.</li>
                  </ul> 

                  <div class="connector"></div>
              </div>
          </div>

        </div>

        <div class="back-container">
          <a href="#top_link"><img src={back_to_top} class="back-to-top-image"></img></a>
        </div>
        

        <div class="footer">
          <p class="footer-description">You can also find me at:</p>
          <a href="https://github.com/LeeWeiHan97" target="_blank"><img src={github_logo} class="footer-image"></img></a>
          <a href="https://www.facebook.com/weihan.lee.1401" target="_blank"><img src={facebook_logo} class="footer-image"></img></a>
          <a href="https://www.linkedin.com/in/wei-han-lee-9b1a7b161/" target="_blank"><img src={linkedin_logo} class="footer-image" target="_blank"></img></a>
        </div>

      </div>
    )
  }
}

export default App;
