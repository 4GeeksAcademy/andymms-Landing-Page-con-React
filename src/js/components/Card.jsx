import React from "react";

const Card = (props) => {
    return (
        <div className="card mx-2 my-4" style={{ width: `18rem`, minWidth: '250px', width: '248px' }}>
            <img src={props.imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <a href={props.gameLink} target="_blank" className="btn btn-success">Find out more</a>
            </div>
        </div>
    );
};

export default Card;



