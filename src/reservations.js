import instagram from './assets/icons8-instagram-32.png';
import facebook from './assets/icons8-facebook-f-32.png';
import youtube from './assets/icons8-youtube-32.png';
import pinterest from './assets/icons8-pinterest-a-social-media-web-and-mobile-application-company-32.png';
import twitter from './assets/icons8-twitter-32 (1).png';

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
                            <select name= "locations" id='location' className='locations-form'>
                                <option value="raleigh">Raleigh</option>
                                <option value="cary">Cary</option>
                                <option value="durham">Durham</option>
                                <option value="chapel-hill">Chapel Hill</option>
                            </select>
                        </div>
                        <div className='location-div'>
                            <label for= "location1">Date</label>
                            <input type='date' id='location1' className='date-form'></input>
                        </div>
                        <div className='location-div'>
                            <label for= "time">Time</label>
                            <select name= "locations" id='time' className='time-form'>
                                <option value="9am">09:00 AM</option>
                                <option value="9:30am">09:30 AM</option>
                                <option value="10am">10:00 AM</option>
                                <option value="10:30am">10:30 AM</option>
                                <option value="11am">11:00 AM</option>
                                <option value="11:30am">11:30 AM</option>
                                <option value="12pm">12:00 PM</option>
                                <option value="12:30pm">12:00 PM</option>
                                <option value="1pm">01:00 PM</option>
                                <option value="1:30pm">01:00 PM</option>
                                <option value="2pm">02:00 PM</option>
                                <option value="2:30pm">02:30 PM</option>
                                <option value="3pm">03:00 PM</option>
                                <option value="3:30pm">03:30 PM</option>
                                <option value="4pm">04:00 PM</option>
                                <option value="4:30pm">04:30 PM</option>
                                <option value="5pm">05:00 PM</option>
                                <option value="5:30pm">05:30 PM</option>
                                <option value="6pm">06:00 PM</option>
                                <option value="6:30pm">06:30 PM</option>
                            </select>
                        </div>
                        <div className='location-div'>
                            <label for= "party">Party Size</label>
                            <select name= "locations" id='party' className='party-form'>
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5 People</option>
                                <option value="6">6 People</option>
                                <option value="7">7 People</option>
                                <option value="8">8 People</option>
                                <option value="9">9 People</option>
                                <option value="10">10+ People</option>
                            </select>
                        </div>
                    </div>
                    <input type='submit' value='CHECK AVAILABILITY' className='submit'/>
                </form>
                <div className='disclaimers'>
                    <h6>Disclaimer: <a href='.input-div'>Privacy Policy</a> <a href='.input-div'>Terms of Use</a></h6>
                    <p>Powered by</p>
                </div>
                    </section>
            <footer className="footer">
                <div className="footer-div-social">
                    <img src={instagram} width='45px' alt="instagram-icon"/>
                    <img src={facebook} width='45px' alt="instagram-icon"/>
                    <img src={twitter} width='45px' alt="instagram-icon"/>
                    <img src={pinterest} width='45px' alt="instagram-icon"/>
                    <img src={youtube} width='45px' alt="instagram-icon"/>
                </div>

                <div className='footer-lists'>
                    <ul>
                        <li>Make a Reservation</li>
                        <li>Gift Cards</li>
                        <li>Cookbooks</li>
                        <li>Tees & Tanks</li>
                        <li>All Locations</li>
                        <li>Social Club</li>
                        <li>Special Events</li>
                        <li>Private Dining - Chapel Hill, NC</li>
                    </ul>
                    <ul>
                        <li>Private Dining - Durham, NC</li>
                        <li>Responsibly Sources</li>
                        <li>Blog</li>
                        <li>Recipes</li>
                        <li>Press</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}



export {Reserve};