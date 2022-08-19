import ka from './icons/ka.png';
import en from './icons/us.png';

function LangChange() {

    let primaryLang = ka;
    let langs = [ka, en];

    return (
        <div className='th-lang'>
            <div>
                <div className="selected-language">
                    <img src={primaryLang}></img>
                </div>
                <ul className='lang-menu'>
                    {langs.filter(lang => lang !== primaryLang).map(lang => {
                        return (
                            <li>
                                <img src={lang} alt={lang}></img>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default LangChange;