// Read through the instructions in the README.md file to build your NASA app! Have fun <span role="img" aria-label='go!'>🚀</span>!


import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Apod from "./Components/Apod";
import CalendarComp from "./Components/CalendarComp";

import styled from "styled-components";
//icon bc of error trying to access image in public folder
import { DiReact } from "react-icons/di";




//DAY 2: STYLED COMPONENTS
  // I'd keep .App in css if the name were different since it's centering text
const AppCentered = styled.div`
  text-align: center`;

const AppHeader = styled.div`
background-color: #282c34;
min-height: 10vh; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white`;

const AppLink = styled.div`
color: #61dafb`;




function App() {
  const [potd, setPotd] = useState("");
  const [altText, setAltText] = useState("");
  const [date, setDate] = useState("");       // make this to hold the date info here from CalendarComp, not in the CalendarComp child
    console.log('date:', date)

  const [link, setLink] = useState("") // I want the link to update when the pic changes


  const effectFn = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=Ea2jmNbUqeZxlZH5h9yeB2SdphaOkrDaLv7LGec3&date=${date}`)
      .then(response => {
          console.log(response);
          setPotd(response.data.url); //putting data in state
          setAltText(response.data.explanation); //new state to hold data for explanation so i could use it for the alt text for the images
          // console.log(altText)
          // setDate(response.data.date); //dont need to do this since it updates on its own daily...
          setLink(response.data.hdurl);
      })
      .catch(error =>console.log(error));
    };
      useEffect(effectFn, [date]); 
        //need date state in the [] bc it'll update a lot

  

  return (
    <AppCentered>
      <AppHeader>
        <div className="App-logo"> 
        <DiReact/>
        </div>
        {/* <img className="logo192" src={logo192}/> */}
          {/* messing around in these divs bc i can't access the public file yet...maybe next lesson/part 2? */}
      </AppHeader>
       <AppLink> 
        <p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
            >
              Click Me
          </a>
      </p>
      </AppLink>

      {/* --> give the CC child props so the child can access and change the date state info. we want the date that we select in the calendar we made to change the date of the image. We need to make the date a string and in the format that the image uses -- 'yyyy-MM-dd' */}
      <p>
        Date:
        <CalendarComp setDate={setDate} calendarDate={date}/>
      </p>
      <div className="potd_container">
        <Apod picture={potd} altText={altText}/>
      </div>
        {/* layout of this container/component is in the Apod component*/}

    </AppCentered>
  );
}

export default App;