import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center text-danger mb-5">Oure Coures</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                               {
                                   Sdata.map((val,index)=>{
                                       return <Card 
                                              key= {index}
                                              imgsrc={val.imgsrc}
                                              title={val.title}
                                              info = {val.info}

                                       />
                                   })
                               }
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Service