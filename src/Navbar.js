import hlogo from './icons/cardprintlogo.png';

function Navbar(data) {

    return (
        <div className="header">
            <div className="header-logo">
                <a href='/'><img src={hlogo} alt='logo'></img></a>
            </div>
            <div className='navbar'>
                <ul>
                    <li>პროდუქცია</li>
                    <li>მომსახურეობა</li>
                    <li>გალერეა</li>
                    <li>ინფორმაცია</li>
                    <li>ფასები</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;