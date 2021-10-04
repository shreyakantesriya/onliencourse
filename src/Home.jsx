import React from "react";
import home from "../src/img/coures.svg"
 import { NavLink } from "react-router-dom";
 import Commen from "./Commen";


const Home = () => {
    return (
        <>
          <Commen  name="Online Coures" imgsrc = {home} visit="/service"  btnname="Get started"/>
        </>
    )

}
export default Home