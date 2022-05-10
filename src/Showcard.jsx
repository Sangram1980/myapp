import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Showcard(props) {
    return (   
        <>
            <div className="card-group">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Showcard;