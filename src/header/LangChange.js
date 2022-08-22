import { useState } from 'react';
import ka from '../icons/ka.png';
import en from '../icons/us.png';

function LangChange({ changeLanguage }) {
    const [langList, setLangList] = useState([ka, en]);
    const [primaryLang, setPrimaryLang] = useState(langList[0]);

    function changeLang() {
        if (primaryLang === langList[0]) {
            setPrimaryLang(langList[1]);
            changeLanguage();
        } else {
            setPrimaryLang(langList[0]);
            changeLanguage();
        }
    }

    return (
        <div className='th-lang'>
            <ul>
                <li>
                    <div className='primary-lang'><img src={primaryLang}></img></div>
                    <div className="lang-menu">
                        {langList.filter(lang => lang !== primaryLang).map((lang, i) => {
                            return (
                                <img src={lang} alt={lang} key={i} onClick={changeLang}></img>
                            )
                        })}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default LangChange;