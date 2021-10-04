import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Compney from "../src/img/compny.jpg"

const Contact = () => {
    const [data,setdata] = useState({
        name:'',
        email:'',
        info:''
    })
    const InputEvent = (event) =>{
         const {name, value} =event.target
         setdata((prevalu)=>{
             return {
                 ...prevalu,
                 [name]:value
             }
         })
    }
    const formSubmit=(e)=>{
        e.preventDefulat();
        alert(`name:${data.name} email: ${data.email} msg: ${data.info} `)
    }

       
    
    return (
        <>
            <section id="contact" className="container">
                <form onSubmit={formSubmit}>

                    <div className="us contener">

                        <div className="contate-img">
                            <img src={Compney} alt="" />
                        </div>
                        <div className="form">
                            <h1 >Contact us</h1>
                            <input type="text" name="name" id="" value={data.name} onChange={InputEvent} placeholder="name" required />
                            <input type="Emali" name="email" id="" value={data.email} onChange={InputEvent} placeholder="Emali " required />
                            <textarea name="info" id="" cols="30" rows="10" value={data.info} onChange={InputEvent} placeholder="Type Your Text" required></textarea>
                            <button className="btn btn-success mt-4">Submit</button>

                        </div>
                    </div>
                </form>
            </section>
        </>
    )

}
export default Contact