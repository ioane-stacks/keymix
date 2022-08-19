import fbIco from './icons/f_logo_RGB-Black_58.png'

function TopHeader() {

    return (
        <div className="top-header">
            <div className="web-icons">
                <ul>
                    <li>
                        <a href="#"><img src={fbIco}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopHeader;