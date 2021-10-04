import react from "react";
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="Course" />
                    <div className="card-body">
                        <h5 className="card-title text-success fw-bold">{props.title} </h5>
                        <p className="card-text">{props.info} </p>
                        <NavLink to="" className="btn btn-danger">Read More...</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card