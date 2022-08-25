// import React, {useState}  from "react";

const Apod = ({picture, altText}) => {
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