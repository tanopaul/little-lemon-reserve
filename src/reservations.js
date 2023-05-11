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

        let timeArr = ['0'];
       


        const [display, setDisplay] = useState(false);
        const [display2, setDisplay2] = useState(false);
        const [display3, setDisplay3] = useState(false);
        const [times, setTimes] = useState([0, 0, 0, 0, 0]);
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
        const finalMessage = `Your reservation on ${form.date} at ${form.timeChosen} in our ${form.location} location for ${form.party} is confirmed. See you soon, ${form.firstName}!`
        
        function changeDisplay(event) {
            
            setForm({
                ...form, 
                [event.target.name]: event.target.value
            })

            
            const locationObj = {
                cary: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
                durham: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
                chapelHill: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
                raleigh: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"]
            }

            
            
    
            
            let chosenTime = locationObj[`${form.location.toLowerCase()}`];
    
            let chosenTimeIndex = locationObj[`${form.location.toLowerCase()}`].findIndex(element => element === form.time);

            

            for (let i = chosenTimeIndex; i < chosenTimeIndex + 6; i++) {
                setTimes(times.shift());
                setTimes(times.push(chosenTime[i]));
            }

            

            timeArr.shift();
            console.log(times)
            
            setDisplay(true);
            
        }

        

        function changeDisplay2(event) {

            setForm({
                ...form, 
                [event.target.attributes.name.nodeValue]: event.target.innerHTML
            })
            
            
            setDisplay2(true);
        }

        function changeDisplay3() {
            setDisplay3(true);
        }

        const handleChange = (event) => {
            setForm({
                ...form, 
                [event.target.name]: event.target.name === 'newsLetter' ? !event.target.value : event.target.value
            })
            
            console.log(form)
        }


        



        // function displayTimes() {

        //     const locationObj = {
        //         cary: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
        //         durham: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
        //         chapelHill: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
        //         raleigh: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"]
        //     }
    
            
        //     let chosenTime = locationObj[`${form.location.toLowerCase()}`];
    
        //     let chosenTimeIndex = locationObj[`${form.location.toLowerCase()}`].findIndex(element => element === form.time);

        //     setTimes(chosenTimeIndex)
        // }

       
            
        
           
            
        

        
        console.log(times[1])
        

        






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
                            <select name= "location" onChange={handleChange} id='location' className='locations-form'>
                                <option> </option>
                                <option>Raleigh</option>
                                <option>Cary</option>
                                <option>Durham</option>
                                <option>Chapel Hill</option>
                            </select>
                        </div>
                        <div className='location-div'>
                            <label for= "location1">Date</label>
                            <input type='date' name='date' value={form.date} onChange={handleChange} id='location1' className='date-form'></input>
                        </div>
                        <div className='location-div'>
                            <label for= "time">Time</label>
                            <select name= "time" onChange={handleChange} id='time' className='time-form'>
                                <option>09:00 AM</option>
                                <option>09:30 AM</option>
                                <option>10:00 AM</option>
                                <option>10:30 AM</option>
                                <option>11:00 AM</option>
                                <option>11:30 AM</option>
                                <option>12:00 PM</option>
                                <option>12:00 PM</option>
                                <option>01:00 PM</option>
                                <option>01:00 PM</option>
                                <option>02:00 PM</option>
                                <option>02:30 PM</option>
                                <option>03:00 PM</option>
                                <option>03:30 PM</option>
                                <option>04:00 PM</option>
                                <option>04:30 PM</option>
                                <option>05:00 PM</option>
                            </select>
                        </div>
                        <div className='location-div'>
                            <label for= "party">Party Size</label>
                            <select name= "party" id='party' onChange={handleChange} className='party-form'>
                                <option> </option>
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5 People</option>
                                <option>6 People</option>
                                <option>7 People</option>
                                <option>8 People</option>
                                <option>9 People</option>
                                <option>10+ People</option>
                            </select>
                        </div>
                    </div>
                    <div className='submit' onClick={changeDisplay} >CHECK AVAILABILITY</div>
                </form>

                <div className='available-time' style={display ? {display: ""} : {display: "none"}}>
                    <p>Please select your preferred time</p>
                    <ul>
                        <li value="11" name="timeChosen" onClick={changeDisplay2}>{times[0]}</li>
                        <li value="12" name="timeChosen" onClick={changeDisplay2}>{times[1]}</li>
                        <li value="1" name="timeChosen" onClick={changeDisplay2}>{times[2]}</li>
                        <li value="2" name="timeChosen" onClick={changeDisplay2}>{times[3]}</li>
                        <li value="3" name="timeChosen" onClick={changeDisplay2}>{times[4]}</li>
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
                        <textarea onChange={handleChange} name='requests' value={form.requests} id='special-requests' rows="4" className='info-form-box'></textarea>
                    </div>
                    <div className='checkbox-div'>
                        <input type='checkbox' onChange={handleChange} name='newsLetter' value={form.newsLetter} id='checkbox' className='info-form-box'/>
                        <label for="checkbox" className='checkbox-label'>Sign me up to receive dining offers and news from this restaurant by email.</label>
                    </div>
                    <div className='submit' onClick={changeDisplay3}>CONFIRM TABLE</div>
                </form>
                <div className='confirmation' style={display3 ? {display: ""} : {display: "none"}}>
                    <p className='confirmed-p'>CONFIRMED!</p>
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