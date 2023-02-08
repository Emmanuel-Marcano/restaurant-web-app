

import React from "react"

function CustomAlert(){

      this.alert = function(message,title){
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
      
      let winH = window.innerHeight;
      dialogoverlay.style.height = winH+"px";
      
      dialogbox.style.top = "100px";
  
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
      
      document.getElementById('dialogboxhead').style.display = 'block';
  
      if(typeof title === 'undefined') {
        document.getElementById('dialogboxhead').style.display = 'none';
      } else {
        document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
      }

      document.getElementById('dialogboxbody').innerText = message;
      document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    }
    
    this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    //  window.location.reload()
    }
  }
  
  let customAlert = new CustomAlert();





function BookingForm(){


    const occasionRef = React.useRef(null)
    const guestsRef = React.useRef(null)
    const dateRef = React.useRef(null)
    const timeRef = React.useRef(null)

   
   function handleSubmit(e){
    e.preventDefault()

    // console.log(dateRef.current.value, occasionRef.current.value, guestsRef.current.value, timeRef.current.value)
    customAlert.alert(`Your table for ${guestsRef.current.value} at our Little Lemon restaurant has been successfully booked for the date of ${dateRef.current.value} at ${timeRef.current.value}. We are looking forward to host you for your ${occasionRef.current.value}!`, "Success!")



    // alert(`Your table for ${guestsRef.current.value} at our Little Lemon restaurant has been successfully booked for the date of ${dateRef.current.value} at ${timeRef.current.value}. We are looking forward to host you for your ${occasionRef.current.value}!`)


   }


    return (
        <>
        <div className="form-container">
        <h1>Reserve a Table</h1>
        
        <form onSubmit={handleSubmit} action="">

            <div>
            <label for="res-date">Choose date: </label>
            <input ref={dateRef} type="date" id="res-date"/>
            </div>
            <div>
            <label for="res-time">Choose time: </label>
            <select ref={timeRef} id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            </div>
            <div>
            <label htmlFor="guests">Number of guests: </label>
            <input ref={guestsRef} type="number" placeholder="1" min="1" max="10" id="guests"/>
            </div>
            <div>
            <label htmlFor="occasion">Occasion: </label>
            <select ref={occasionRef} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            </div>
            <div>
            <input className="form-btn" type="submit" value="Make Your Reservation"/>
            </div>
        </form>
        </div>
     
        </>

    )
}


export default BookingForm