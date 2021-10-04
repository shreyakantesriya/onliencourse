import React from "react";
import home from "../src/img/coures.svg"
 import { NavLink } from "react-router-dom";


const Commen = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="text-danger  ">{props.name}</h1>
                                    <h2 className="my-3">We are the team of developer making sites</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-danger rounded-pill btn-lg">
                                        {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home imges" />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )

}
export default Commen