import logo from './assets/Asset 9@4x.png';

function Nav() {
    return (
        <div className="nav">
            <img src={logo} alt="logo" className='logo'/>
            <ul>
                <li>Our Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Our Story</li>
                <li>Careers</li>
            </ul>
            <div className='nav-locations'>
                <h6>VIEW ALL LOCATIONS</h6>
            </div>
        </div>
    )
}

export {Nav};