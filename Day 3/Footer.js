import React from 'react';
import facebook from '../Assets/images/fb.png';
import twitter from '../Assets/images/twitter.png';
import insta from '../Assets/images/insta.jfif';
import '../Assets/styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Clear Tax</h4>
            <a href="/employer">
              <p>Contact Us</p>
            </a>
            <a href="/healthplan">
              <p>About Us</p>
            </a>
            <a href="/individual">
              <p>TaxCloud India</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Tax Tools</h4>
            <a href="/resource">
              <p>Income Tax Calculator</p>
            </a>
            <a href="/healthplan">
              <p>GST Calculator</p>
            </a>
            <a href="/individual">
              <p>HRA Calculator</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Contact Us</h4>
            <a href="/employer">
              <p>Vaishnavi Tech Park, 3rd & 4th Floor</p>
              <p>Sarjapur Main Road, Bellandur</p>
              <p>Bengaluru-560103</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>ClearTax Business</h4>
            <a href="/about">
              <p>TaxFilling for Professionals</p>
            </a>
            <a href="/press">
              <p>TaxFilling for Traders</p>
            </a>
            <a href="/career">
              <p>TaxFilling for Employees</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p><img src={facebook} alt="" /></p>
              <p><img src={twitter} alt="" /></p>
              <p><img src={insta} alt="" /></p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
