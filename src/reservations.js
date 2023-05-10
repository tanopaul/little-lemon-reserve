import instagram from './assets/icons8-instagram-32.png';
import facebook from './assets/icons8-facebook-f-32.png';
import youtube from './assets/icons8-youtube-32.png';
import pinterest from './assets/icons8-pinterest-a-social-media-web-and-mobile-application-company-32.png';
import twitter from './assets/icons8-twitter-32 (1).png';
import { useState } from 'react';

//18

// const locationObj = {
//     cary: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
//     durham: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
//     chapelHill: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
//     raleigh: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"]
// }





function Reserve() {


       


        const [display, setDisplay] = useState(false);
        const [display2, setDisplay2] = useState(false);
        const [display3, setDisplay3] = useState(false);
        const [form, setForm] = useState({
            location: "",
            date: "",
            time: "",
            party: "",
            timeChosen: "",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            requests: "",
            newsLetter: false
        })
        const finalMessage = `Your reservation on DATE at TIME in our LOCATION for PEOPLE is confirmed. See you soon, ${form.firstName}!`
        
        function changeDisplay(event) {
            
            setForm({
                ...form, 
                [event.target.name]: event.target.value
            })

            // console.log(form) 


            setDisplay(true);
        }

        function changeDisplay2() {
            setDisplay2(true);
        }

        function changeDisplay3() {
            setDisplay3(true);
        }

        const handleChange = (event) => {
            setForm({
                ...form, 
                [event.target.name]: event.target.value
            })
        
        }

    return (
        <div>
            <section className="reservations-sec">
                <div className='reservations-div'>
                    <h3>Healthy cookin' Healthy livin'</h3>
                    <h1>RESERVATIONS</h1>
                </div>

                <form className='first-form'>
                    <div className='input-div'>
                        <div className='location-div'>
                            <label for= "location">Location</label>
                            <select name= "locations" id='location' className='locations-form'>
                                <option name="date" value=""> </option>
                                <option name="date" value={form.location}>Raleigh</option>
                                <option name="date" value={form.location}>Cary</option>
                                <option name="date" value={form.location}>Durham</option>
                                <option name="date" value={form.location}>Chapel Hill</option>
                            </select>
                        </div>
                        <div className='location-div'>
                            <label for= "location1">Date</label>
                            <input type='date' id='location1' className='date-form'></input>
                        </div>
                        <div className='location-div'>
                            <label for= "time">Time</label>
                            <select name= "locations" id='time' className='time-form'>
                                <option name="time" value=""> </option>
                                <option name="time" value="9am">09:00 AM</option>
                                <option name="time" value="9:30am">09:30 AM</option>
                                <option name="time" value="10am">10:00 AM</option>
                                <option name="time" value="10:30am">10:30 AM</option>
                                <option name="time" value="11am">11:00 AM</option>
                                <option name="time" value="11:30am">11:30 AM</option>
                                <option name="time" value="12pm">12:00 PM</option>
                                <option name="time" value="12:30pm">12:00 PM</option>
                                <option name="time" value="1pm">01:00 PM</option>
                                <option name="time" value="1:30pm">01:00 PM</option>
                                <option name="time" value="2pm">02:00 PM</option>
                                <option name="time" value="2:30pm">02:30 PM</option>
                                <option name="time" value="3pm">03:00 PM</option>
                                <option name="time" value="3:30pm">03:30 PM</option>
                                <option name="time" value="4pm">04:00 PM</option>
                                <option name="time" value="4:30pm">04:30 PM</option>
                                <option name="time" value="5pm">05:00 PM</option>
                            </select>
                        </div>
                        <div className='location-div'>
                            <label for= "party">Party Size</label>
                            <select name= "locations" id='party' className='party-form'>
                                <option name="party" value=""> </option>
                                <option name= "party" value="1">1 Person</option>
                                <option name= "party" value="2">2 People</option>
                                <option name= "party" value="3">3 People</option>
                                <option name= "party" value="4">4 People</option>
                                <option name= "party" value="5">5 People</option>
                                <option name= "party" value="6">6 People</option>
                                <option name= "party" value="7">7 People</option>
                                <option name= "party" value="8">8 People</option>
                                <option name= "party" value="9">9 People</option>
                                <option name= "party" value="10">10+ People</option>
                            </select>
                        </div>
                    </div>
                    <div className='submit' onClick={changeDisplay} >CHECK AVAILABILITY</div>
                </form>

                <div className='available-time' style={display ? {display: ""} : {display: "none"}}>
                    <p>Please select your preferred time</p>
                    <ul>
                        <li onClick={changeDisplay2}>11:00 AM</li>
                        <li onClick={changeDisplay2}>12:00 PM</li>
                        <li onClick={changeDisplay2}>1:00 PM</li>
                        <li onClick={changeDisplay2}>2:00 PM</li>
                        <li onClick={changeDisplay2}>3:00 PM</li>
                    </ul>
                </div>

                <form className='info-form' style={display2 ? {display: ""} : {display: "none"}} >
                    <div className='info-form-div'>
                        <label for="first-name">First Name</label>
                        <input onChange={handleChange} name='firstName' value={form.firstName} type='text' id='first-name' className='info-form-box'/>
                    </div>
                    <div className='info-form-div'>
                        <label for="last name">Last Name</label>
                        <input onChange={handleChange} name='lastName' value={form.lastName} type='text' id='last name' className='info-form-box'/>
                    </div>
                    <div className='info-form-div'>
                        <label for="phone-number">Phone Number</label>
                        <input onChange={handleChange} name='phone' value={form.phone} type='phone' id='phone-number' className='info-form-box'/>
                    </div>
                    <div className='info-form-div'>
                        <label for="email">Email</label>
                        <input onChange={handleChange} name='email' value={form.email} type='email' id='email' className='info-form-box'/>
                    </div>
                    <div className='info-form-div checkbox-div'>
                        <label for="special-requests">Special Requests</label>
                        <textarea id='special-requests' rows="4" className='info-form-box'></textarea>
                    </div>
                    <div className='checkbox-div'>
                        <input type='checkbox' id='checkbox' className='info-form-box'/>
                        <label for="checkbox" className='checkbox-label'>Sign me up to receive dining offers and news from this restaurant by email.</label>
                    </div>
                    <div className='submit' onClick={changeDisplay3}>CONFIRM TABLE</div>
                </form>
                <div style={display3 ? {display: ""} : {display: "none"}}>
                    <p>{finalMessage}</p>
                    <p>Phone: {form.phone}</p>
                    <p>Email: {form.email}</p>
                    <p>Requests: {form.requests}</p>
                </div>
                <div className='disclaimers'>
                    <h6>Disclaimer: <a href='.input-div'>Privacy Policy</a> <a href='.input-div'>Terms of Use</a></h6>
                    <p>Powered by</p>
                </div>
                    </section>
            <footer className="footer">
                <div className="footer-div-social">
                    <img src={instagram} width='45px' alt= "instagram-icon" className='icon'/>
                    <img src={facebook} width='45px' alt="facebook-icon" className='icon'/>
                    <img src={twitter} width='45px' alt="twitter-icon" className='icon'/>
                    <img src={pinterest} width='45px' alt="pinterest-icon" className='icon'/>
                    <img src={youtube} width='45px' alt="youtube-icon" className='icon'/>
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