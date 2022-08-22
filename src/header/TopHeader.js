import { ImLocation2, ImFacebook, ImYoutube, ImLinkedin } from 'react-icons/im';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si'
import LangChange from '../components/LangChange';

function TopHeader({ changeLanguage }) {
    return (
        <div className="top-header">
            <div className="web-icons">
                <ul>
                    <li>
                        <a href="#"><ImFacebook /></a>
                    </li>
                    <li>
                        <a href="#"><FaInstagram /></a>
                    </li>
                    <li>
                        <a href="#"><ImLinkedin /></a>
                    </li>
                    <li>
                        <a href="#"><ImYoutube /></a>
                    </li>
                    <li>
                        <a href="#"><ImLocation2 /></a>
                    </li>
                </ul>
            </div>
            <div className='th-contact'>
                <a href='#'><FaPhoneAlt /> <span>555 123 456</span></a>
            </div>
            <div className='th-contact'>
                <a href='#'><SiMaildotru /> <span>youremail@example.com</span></a>
            </div>
            <LangChange changeLanguage={changeLanguage} />
        </div>
    )
}

export default TopHeader;