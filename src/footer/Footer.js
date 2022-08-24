import { ImLocation2, ImFacebook, ImYoutube, ImLinkedin } from "react-icons/im";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiTreasureMapFill } from 'react-icons/ri';
import { defaultContent } from '../data/defaultContent.js';

function Footer() {
    
    const {socialPageName, facebook, instagram, linkedin, youtube} = defaultContent.footer.socialPages;
    const {aboutUsName, termsAndConditions, termsOfUse, privacyPolicy, siteMap} = defaultContent.footer.aboutUs;
    const {contactName, phoneNumber, email, address, findUs} = defaultContent.footer.contact;

      return (
            <div className="footer">
                  <article>
                        <div className="footer-name">
                              <h2>{ socialPageName }</h2>
                        </div>
                        <div className="footer-content">
                              <ul>
                                    <li><a href="#"><div><ImFacebook /></div>{ facebook }</a></li>
                                    <li><a href="#"><div><FaInstagram /> </div>{ instagram }</a></li>
                                    <li><a href="#"><div><ImLinkedin /></div>{ linkedin }</a></li>
                                    <li><a href="#"><div><ImYoutube /></div>{ youtube }</a></li>
                              </ul>
                        </div>
                  </article>
                  <article>
                        <div className="footer-name">
                              <h2>{ aboutUsName }</h2>
                        </div>
                        <div className="footer-content">
                              <ul>
                                    <li><a href="#">{ termsAndConditions }</a></li>
                                    <li><a href="#">{ termsOfUse }</a></li>
                                    <li><a href="#">{ privacyPolicy }</a></li>
                                    <li><a href="#">{ siteMap }</a></li>
                              </ul>
                        </div>
                  </article>
                  <article>
                        <div className="footer-name">
                              <h2>{ contactName }</h2>
                        </div>
                        <div className="footer-content">
                              <ul>
                                    <li><a href="#"><div><FaPhoneAlt /></div>{ phoneNumber }</a></li>
                                    <li><a href="#"><div><FiMail /> </div>{ email }</a></li>
                                    <li><div><ImLocation2 /></div>{ address }</li>
                                    <li><a href="#"><div><RiTreasureMapFill /></div>{ findUs }</a></li>
                              </ul>
                        </div>
                  </article>
            </div>
      );
}

export default Footer;
