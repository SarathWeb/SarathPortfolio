import { Icon } from "@iconify/react";
import '../components/footer.css'

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__call">
        <h3>Call</h3>
        <p>908-009-4471</p>
      </div>
      <div className="footer__email">
        <h3>Email</h3>
        <p><a href="mailto:sarathmanikam369@gmail.com">sarathmanikam369@gmail.com</a></p>
      </div>
      <div className="footer__social_icons">
      <h3>Follow</h3>
      <div className="footer__follow">
        <a href="https://www.linkedin.com/in/sarath-manikam/" target="blank"><Icon icon="akar-icons:linkedin-fill" /></a>
        <a href="https://www.instagram.com/mr_sarath_boy" target="blank"><Icon icon="uil:instagram" /></a>
      </div>
      </div>
    </div>
  );
}

export default Footer;
