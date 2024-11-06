import "../components/Resume.css";

function Resume() {
  return (
    <div className="resume__container_bg">
    <div className="resume__container">
      <div className="resume__title">
        <span></span>
        <h2>Resume</h2>
      </div>
      <div>
        <div className="experience__content">
          <h3>Experience</h3>
          <button><a href="https://drive.google.com/file/d/13D8hGaFJIiLMJfYse24wLnx4MZWQRLxM/view" target="blank">DOWNLOAD CV</a></button>
        </div>
        <div className="resume__experience_box">
          <div className="resume__present_content">
            <h2>2035 - Present</h2>
            <h3>JOB POSITION</h3>
            <p>Company Name</p>
            <p>Company Location</p>
          </div>
          <div className="resume__para_content">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p> <br/><br/>
            <p>
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </p>
          </div>
        </div>
        <div className="experience__content">
          <h3>Education</h3>
        </div>
        <div className="resume__experience_box">
          <div className="resume__present_content">
            <h2>2035 - Present</h2>
            <h3>UNIVERSITY NAME</h3>
            <p>Degree Level</p>
            <p>University Location</p>
          </div>
          <div className="resume__para_content">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p> <br/><br/>
            <p>
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </p>
          </div>
        </div>
        <div className="resume__experience_box resume__column">
          <div>
            <h2>Professional skillset</h2>
            <div className="skill__container">
                <div className="resume__skill"><span></span>Entrepreneurial Mindset</div>
                <div className="resume__skill"><span></span>Entrepreneurial Mindset</div>
                <div className="resume__skill"><span></span>Entrepreneurial Mindset</div>
                <div className="resume__skill"><span></span>Entrepreneurial Mindset</div>
            </div>
          </div>
          <div>
            <h2>Languages</h2>
            <div className="skill__container">
                <div className="resume__skill"><span></span>English</div>
                <div className="resume__skill"><span></span>Tamil (native)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resume;
