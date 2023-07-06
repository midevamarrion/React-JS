import React from "react";
import  './style.css'
// import pic from './images/react.jpeg'

function Introduction(){
return (
    <div>
        <h1 className="heading">What I have learnt about ReactJS</h1>
        <p>It has reusable components</p>
        <p>The writing format is JSX </p>
        <p>It is fast and scalable</p>
            <img src='/images/react.jpeg' id="rct" alt="pic1"/>
            <img src='/images/flo.jpeg' id="rct" alt="pic1"/>
            <img src='/images/flo1.jpeg' id="rct" alt="pic1"/>

        {/* <img src={pic} alt="picture 1"/> */}
        {/* <img src={process.env.PUBLIC_URL + '/images/react.jpeg'} alt="picture1"/> */}
        <h2>Flowers</h2>
           <img src='/images/flo2.jpeg' id="rcts" alt="pic1"/>
           <img src='/images/flo3.jpeg' id="rcts" alt="pic1"/>
           <img src='/images/flo4.jpeg' id="rcts" alt="pic1"/>


    </div>
)
}
export default Introduction

