// Read through the instructions in the README.md file to build your NASA app! Have fun <span role="img" aria-label='go!'>🚀</span>!
// bootstrap- button - https://getbootstrap.com/docs/5.1/components/buttons/
// styled comps - https://styled-components.com/docs/basics#animations 


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

// moved to Apod for the link
// const AppLink = styled.div`
// color: #61dafb`;

//adjusted date box by copying and editing AppHeader styles above
const Date = styled.div`
min-height: 18vh; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center
`;

//matching the "date" string with title of the image
const TitleStyle = styled.div`
    color: #669;
    font-weight:bold;
    `

// for page title... look for fonts
// const PageTitle = styled.header`
// color: #808080;
// background-color: #282c34;
// min-height: 1vh; 
// display: flex;
// flex-direction: row;
// align-items: left;
// justify-content: left;
// font-size: calc(10px + 2vmin);
// padding-left: 25px;`

//component
function App() {
  const [potd, setPotd] = useState("");
  const [altText, setAltText] = useState("");
  const [date, setDate] = useState("");       // make this to hold the date info here from CalendarComp, not in the CalendarComp child
    console.log('date:', date)

  const [link, setLink] = useState(""); // I want the link to update when the pic changes

  const [title, setTitle] =useState(""); // so the title shows in my card. pass title into Apod comp below


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
          setTitle(response.data.title);
      })
      .catch(error =>console.log(error));
    };
      useEffect(effectFn, [date, link]); 
        //need date state in the [] bc it'll update a lot

  

  return (
    <AppCentered>
      {/* Look for fonts */}
      {/* <PageTitle>NASA's POTD</PageTitle> */}
      <AppHeader>
        <div className="App-logo"> 
          <DiReact />
        </div>
      </AppHeader>
       {/* <AppLink> moved to Apod */}

      {/* --> give the CalendarComps child props so the child can access and change the date state info. we want the date that we select in the calendar we made to change the date of the image. We need to make the date a string and in the format that the image uses -- 'yyyy-MM-dd' */}
      <Date>
       <TitleStyle>Date</TitleStyle>
        <CalendarComp setDate={setDate} calendarDate={date}/>
      </Date>
      <div className="potd_container">
        <Apod picture={potd} altText={altText} title={title} link={link}/>
      </div>
        {/* layout of this container/component is in the Apod component*/}

    </AppCentered>
  );
}

export default App;