// import React, {useState}  from "react";
// parent is Apps.js


const Apod = ({picture, altText}) => {      //diff way to use props
    if (!picture) return <h3>Loading...</h3>;
    return (
        <div className="pic">
            <img src={picture} alt={altText}/>
            <div className="explanation">
                <p>{altText}</p>
            </div>
        </div>
    )
}

export default Apod;