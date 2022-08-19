import ka from './icons/ka.png';
import en from './icons/us.png';

function LangChange() {

    let primaryLang = ka;
    let langs = {
        _ka: ka,
        _en: en
    }

    return (
        <div className='th-lang'>
            <div className="selected-language">
                <img src={primaryLang}></img>
            </div>
            <ul>
                <li><img src="" alt="ka"></img></li>
                <li><img src="" alt="en"></img></li>
            </ul>
        </div>
    )
}

export default LangChange;