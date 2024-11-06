import "../components/About.css";
import ProfileLogo from "../assets/ProfileLogo.webp";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about__container">
      <div className="profile__info">
        <div className="profile__background"></div>
        <img src={ProfileLogo} />
        <h2 className="profile__name">Sarath</h2>
        <div className="profile__line"></div>
        <p>Frontend Developer</p>

        <div className="profile__social">
         <a href="https://www.linkedin.com/in/sarath-manikam/" target="blank"><Icon icon="akar-icons:linkedin-fill" /></a> 
          <a href="https://www.instagram.com/mr_sarath_boy" target="blank"><Icon icon="uil:instagram" /></a>
        </div>
      </div>

      <div className="profile__content">
        <h2>Hello</h2>
        <p>Here's who I am & what I do</p>
        <div className="profile__content_btn">
          <button className="profile__content_res"><Link to='/resume'>Resume</ Link></button>
          <button><Link to='/project'>Projects</ Link></button>
        </div>
        <div className="profile__description">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p> <br />
          <p>
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
