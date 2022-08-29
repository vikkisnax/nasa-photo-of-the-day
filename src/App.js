// Read through the instructions in the README.md file to build your NASA app! Have fun <span role="img" aria-label='go!'>🚀</span>!


import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Apod from "./Components/Apod";
import CalendarComp from "./Components/CalendarComp";
// import logo192 from "../public/logo192"; 
// hopefully we'll learn about this in the next lesson/pt2

function App() {
  const [potd, setPotd] = useState("");
  const [altText, setAltText] = useState("");
  const [date, setDate] = useState("");       // hold the date info here, not in the CalendarComp child
    console.log('date:', date)


  const effectFn = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=Ea2jmNbUqeZxlZH5h9yeB2SdphaOkrDaLv7LGec3&date=${date}`)
      .then(response => {
          console.log(response);
          setPotd(response.data.url); //putting data in state
          setAltText(response.data.explanation); //new state to hold data for explanation so i could use it for the alt text for the images
          // console.log(altText)
          // setDate(response.data.date); //dont need to do this since it updates on its own daily...
      })
      .catch(error =>console.log(error));
    };
      useEffect(effectFn, [date]); 
        //need date state in the [] bc it'll update a lot

  

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo"> insert logo </div>
        {/* <img className="logo192" src={logo192}/> */}
          {/* messing around in these divs bc i can't access the public file yet...maybe next lesson/part 2? */}
      </div>

      <div className="App-link">link</div>

      {/* give the CC child props to set the date and store the date state/so the child can access and change the date info */}
      <p>
        Date:
        <CalendarComp setDate={setDate} calendarDate={date}/>
      </p>
      <div className="potd_container">
        <Apod picture={potd} altText={altText}/>
      </div>
        {/* layout of this container/component is in the Apod component*/}

    </div>
  );
}

export default App;