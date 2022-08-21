import hlogo from './icons/cardprintlogo.png';


function Navbar(data) {
    const navbar = data.data;
    return (
        <div className="header">
            <div className="header-logo">
                <a href='/'><img src={hlogo} alt='logo'></img></a>
            </div>
            <div className='navbar'>
                <ul>
                    <li>{navbar.menubar.production}</li>
                    <li>{navbar.service}</li>
                    <li>{navbar.galery}</li>
                    <li>{navbar.information}</li>
                    <li>{navbar.prices}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;