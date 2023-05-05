import instagram from './assets/icons8-linkedin-50.png'

function Reserve() {
    return (
        <div>
            <section className="reservations-sec">
                <div className='reservations-div'>
                    <h3>Healthy cookin' Healthy livin'</h3>
                    <h1>RESERVATIONS</h1>
                </div>

                <form>
                    <div className='input-div'>
                        <div className='location-div'>
                            <label for= "location">Location</label>
                            <input type='text' id='location'></input>
                        </div>
                        <div className='location-div'>
                            <label for= "location1">Date</label>
                            <input type='date' id='location1'></input>
                        </div>
                        <div className='location-div'>
                            <label for= "location2">Time</label>
                            <input type='select' id='location2'></input>
                        </div>
                        <div className='location-div'>
                            <label for= "location3">Party Size</label>
                            <input type='text' id='location3'></input>
                        </div>
                    </div>
                    <input type='submit' value='Check Availability' className='submit'/>
                </form>
                <div>
                    <h6>Disclaimer: <a href=''>Privacy Policy</a> <a href=''>Terms of Use</a></h6>
                    <p>Powered by:</p>
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