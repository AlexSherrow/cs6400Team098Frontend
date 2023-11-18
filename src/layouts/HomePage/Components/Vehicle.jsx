import React, { useState } from "react";
// import './User.css';

    export function Vehicle(props) {
    const [background, setBackground] = useState('white');
    let [textColor, setTextColor] = useState('black');
    let [style, setStyle]  = useState({
      background: background,
      color: textColor
    });

    console.log(props);

    return (      
        <>
      <div>
      <div class = 'left'
        style={style}
        >{props.key} </div>
 
        <div class = 'left'
        style={style}
        >{props.modelName} </div>

        <div class = 'left'
        style={style}
        >{props.modelYear} </div>

        <div class = 'left'
        style={style}
        >{props.description} </div>

        <div class = 'left'
        style={style}
        >{props.mileage} </div>

        <div class = 'left'
        style={style}
        >{props.manufacturer} </div>

        <div class = 'left'
        style={style}
        >{props.chassisType} </div>

        <div class = 'left'
        style={style}
        >{props.fuelType} </div>
        
      </div>
      <br></br>
      </>
    );
    
  }

