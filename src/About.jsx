import React from "react";
import Commen from "./Commen";
import about from "../src/img/4.jpg"
const About = () =>{
    return (
        <>
         <Commen name="Welcome to About Page" imgsrc = {about} visit="/contact"  btnname="Contact Now"/>
        </>
    )

}
export default About