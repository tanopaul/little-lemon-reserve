import instagram from './assets/icons8-linkedin-50.png'

function Reserve() {
    return (
        <div>
            <section className="reservations-sec">
                <div className='reservations-div'>
                    <h3>Healthy cookin' Healthy livin'</h3>
                    <h1>RESERVATIONS</h1>
                </div>
                </section>
            <footer className="footer">
                <div className="footer-div-social">
                    <img src={instagram} alt="instagram-icon"/>
                    <img src={instagram} alt="instagram-icon"/>
                    <img src={instagram} alt="instagram-icon"/>
                    <img src={instagram} alt="instagram-icon"/>
                    <img src={instagram} alt="instagram-icon"/>
                </div>
            </footer>
        </div>
    )
}



export {Reserve};