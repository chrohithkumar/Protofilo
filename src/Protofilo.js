import React, { useState } from 'react';
import './Protofilo.css';
 import ProjectImage from './Project.jpg';
import ProfileImage from './PersonalPhoto.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import  Button  from 'react-bootstrap/Button';



export default function Protofilo() {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
    const [visible, setvisible] = useState(false)
    const handlethreebarcontainer = () => {
        setvisible(!visible);
    }
    return (
        <div className='Protofilo'>
            <div className='navbarcontainer'>
                <div className='Name'>
                    <h3>CHUNDURU NARASIMHA ROHIT</h3>
                </div>
                <div className='navlist'>
                    <ul><a href='#About'>About</a></ul>
                    <ul><a href='#Experience'>Experience</a></ul>
                    <ul><a href='#Projects'>Projects</a></ul>
                    <ul><a href='#contact'>Contact</a></ul>

                </div>
                <div className='navtabend'>
                    <div className='threebarcontainer' >

                        <IoReorderThreeOutline style={{ fontSize: '40px' }} onClick={handlethreebarcontainer} />

                    </div>
                    {visible && (
                        <div className='threeoutlinecontainer'>
                            <Card className='threeoutlinecard'>
                                <ul><a href='#About'>About</a></ul>
                                <ul><a href='#Experience'>Experience</a></ul>
                                <ul><a href='#Projects'>Projects</a></ul>
                                <ul><a href='#contact'>Contact</a></ul>

                            </Card>
                        </div>

                    )}

                </div>



            </div>
            <div className='bodycontainer'>

                <div className='DetailsContainer'>
                    <div className='Photo'>

                        <img className='ProfileImage' src={ProfileImage} alt='img' />


                    </div>
                    <div className='InfoContainer'>
                        <p>Hello I'm</p>
                        <h2>CHUNDURU NARASIMHA ROHIT</h2>
                        <p1>REACT JS - DOTNET FULL STACK Developer</p1>

                        <div className='twoButtonsContainer'>

                            <a href='/ROHIT.pdf' download>
                                <button>Download CV</button>
                            </a>

                            <button className='btncontinfo' onClick={scrollToContact}>Contact Info</button>

                        </div>

                        <div className='twoiconcontainer'>
                            <a href='https://www.linkedin.com/in/chunduru-narasimha-rohit-800218303/'>  <FaLinkedin style={{ fontSize: '30px', color: 'black' }} /></a>
                            <a href='https://github.com/chrohithkumar'><FaGithub style={{ fontSize: '30px', color: 'black' }} /></a>

                        </div>

                    </div>


                </div>



                <div className='AboutContainer' id='About'>
                    <div>
                        <h1>About Me</h1>
                    </div>
                    <div className='ExandEduContainer'>
                        <Card className='ExperienceCard'>
                            <HiMiniCheckBadge />
                            <h2>Experience</h2>
                            
                                <p>FULLSTACK INTERN</p>
                                <p1>Virtusa Consulting Services Private Limited</p1>
                                <p2>30-01-2023 to 31-07-2023</p2>
                         

                        </Card>
                        <Card className='EducationCard'>

                            <FaUserGraduate />

                            <h2>Education</h2>

                            <p>B.Tech Electronics & Communcations</p>

                        </Card>
                    </div>

                    <div className='Abouttext'>
                        I am a dedicated Full Stack Developer with a solid foundation in Electronics and Communication Engineering. My experience at Virtusa Consulting Services has equipped me with hands-on expertise in developing robust web applications using React JS for front-end and .NET for back-end. I have successfully completed projects that demonstrate my ability to create user-friendly and dynamic e-commerce platforms. My passion lies in solving complex challenges and continuously building innovative web pages that meet user needs. I am committed to delivering high-quality solutions and am eager to contribute my skills to impactful projects.
                    </div>


                </div>



                <div className='ExperinceContainer' id='Experience'>
                    <div className='ExpTitle'>
                        <h1>Experience</h1>
                    </div>
                    <Card className='ExperinceCard'>
                        <Card.Title className='excardtitle'>
                            <p>FULL STACK DEVELOPER INTERN (FULL-TIME)</p>
                            <p1> Virtusa Consulting Services Private Limited</p1>
                        </Card.Title>
                        <hr />
                        <Card.Body>

                            <ul className="roman-list">
                                <li className='one'>This is a user-friendly E-Commerce Website where there will be two Sections of Logins: Admin
                                    and User</li>
                                <li>Admin Can Edit, Add, and Delete The Gift Items Cost, Design, and Themes.</li>
                                <li>User Can Buy Customized Name Board with his selected Themes and User Can Pay the Bills 
                                Through Various Payment Options</li>
                                <li>User Can be Placed Items in a Cart and User Can Edit and Delete the Item from The Cart</li>
                                <li>User Can Option To Update the Profile Username, Email and Mobile Number</li>
                                <li>User Can Reset the Password And Able To Share the Items</li>
                            </ul>

                        </Card.Body>

                    </Card>

                </div>

                <div className='ProjectContainer' id='Projects'>
                    <div className='Protitle'>
                        <h1>Projects</h1>
                    </div>
                    <div className='ProjectCardContainer'>
                        <Card>

                            <Card.Body>

                                <img className='projectimage1' src={ProjectImage} alt='projectimg'></img>

                            </Card.Body>
                            <Card.Footer className='projectcardFooter'>
                                <p> CUSTOMIZED NAMEBOARD GIFTSHOP</p>
                                <p1>REACT JS - DOTNET FULLSTACK PROJECT</p1>
                                <a href='https://github.com/iamneo-production/087e1e7a-9e2f-41bd-a11a-4cc074e84e61'><Button >GitHub</Button></a>
                                
                            </Card.Footer>
                        </Card>
                    </div>
                </div>


                <div className='ContactContainer' id='contact'>
                    <div className='conttitle'>
                        <h2>Contact</h2>
                    </div>
                    <Card className='ContactCard'>
                        <div>

                            <h5> <IoMdMail /> &nbsp;chrohithkumar2001@gmail.com</h5>

                        </div>
                        <div>
                            <h5><FaLinkedin />&nbsp;
                            <a href='https://www.linkedin.com/in/chunduru-narasimha-rohit-800218303/'>linkedin </a></h5>
                        </div>

                    </Card>

                </div>


                <footer className='Footer'>
                    <p>CopyRight &copy; 2024 @Rohit. All Rights Reserved</p>
                    <p>For More Info &nbsp; <span>Contact: chrohithkumar2001@gmail.com</span></p>
                </footer>


            </div>

        </div>
    )
}
