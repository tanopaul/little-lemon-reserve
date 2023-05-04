import logo from './assets/Asset 9@4x.png';

function Nav() {
    return (
        <div className="nav">
            <img src={logo} alt="logo" className='logo'/>
            <h3 className='logo-title'>Little Lemon</h3>
            <ul className='nav-menu'>
                <li><a href='.nav'>Our Menu</a></li>
                <li><a href='.nav'>Reservations</a></li>
                <li><a href='.nav'>Order Online</a></li>
                <li><a href='.nav'>Our Story</a></li>
                <li><a href='.nav'>Careers</a></li>
            </ul>
            <div className='nav-locations'>
                <h6>VIEW ALL LOCATIONS</h6>
            </div>
        </div>
    )
}

export {Nav};