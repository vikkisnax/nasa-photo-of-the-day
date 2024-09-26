// import React, {useState}  from "react";
// parent is Apps.js

// bc I installed RS and BS and imported BS in index.js
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

const Centered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center`;

const TitleStyle = styled.p`
    color: #669;
    font-weight:bold;
    `

//not sure what to make this here for the link
const AppLink = styled.span`
    // color: #61dafb;
    `;


//component
const Apod = ({picture, altText, title, link}) => {      //diff way to use props
    if (!picture) return <h3>Loading...</h3>;
    return (
        <Centered>
        {/* <div className='card-container'> */}
        <Card
            //this is for inside the card/box
            style={{
                width: '40rem',
                padding: '1rem'
            }}
            >
            <img 
                src={picture} 
                alt={altText}
                textAlign= "center"
            />
            <CardBody>
            {/* <div className="explanation"> */}
                <TitleStyle>
                    {title}
                </TitleStyle>
                 <p>
                    {altText}
                </p>
            
                <AppLink> 
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{textDecoration: 'none'}}
                        >
                        Closer Look
                    </a>
                </AppLink>
            {/* </div> */}
            </CardBody>
    
        </Card>
        </Centered>
        // </div>
    )
}

export default Apod;