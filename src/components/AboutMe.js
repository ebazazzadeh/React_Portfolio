import React from "react";

import my from "../img/2.png";
import myResume from "../docs/Elham Bazazzadeh.pdf";

const AboutMe = () => {
  return (
    <div className="container-fluid py-5 pink" id="aboutMe">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={my} alt="Elham..." />
          </div>
        </div>

        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Elham Bazazzadeh</h1>
          <p className="text">
            I am living in Washington state right now. After high school, I
            got my B.S. in Computer Software Engineering at Islamic Azad
            University Najaf Abad Branch. Right now, I am studying MIS at
            University of Phoenix. Also, I am studing Full Stack Developer in
            bootcam at the university of washington. For almost ten years, I
            worked as a web developer and created applications for eLearning,
            eForm, Workflow, Salary Management tool for Payam Noor University,
            and knowledge management. Also, I have experience in management
            and research for knowledge management. I am a member of NSLS. The
            technologies I enjoy working with include HTML, JavaScript , CSS,
            MYSQL, Node.js (Express.js, Inquirer.js, File System, Sequelize,
            MVC).
          </p>
          <a href={myResume} className="btn" target="_blank">
            My Resume
          </a>
        </div>


      </div>
    </div>
  )
}


export default AboutMe;
