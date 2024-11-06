import "../components/Project.css";
import ProjectOne from '../assets/ProjectOne.webp'

function Project() {
  return (
    <div className="project__container_bg">
    <div className="project__container">
      <div className="project__title">
        <span></span>Projects
      </div>
      <div className="project__content">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </div>
      <div className="project__info_container">
        <div className="project__info">
          <h2>Project name 1</h2>
          <h3>Role Title</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="project__img"><img src={ProjectOne} /></div>
      </div>
      <div className="project__info_container">
        <div className="project__info">
          <h2>Project name 1</h2>
          <h3>Role Title</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="project__img"><img src={ProjectOne} /></div>
      </div>
      <div className="project__info_container">
        <div className="project__info">
          <h2>Project name 1</h2>
          <h3>Role Title</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="project__img"><img src={ProjectOne} /></div>
      </div>
    </div>
    </div>
  );
}
export default Project;
