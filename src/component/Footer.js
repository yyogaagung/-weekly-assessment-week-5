import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Footer(){
    const counter = useSelector(state => state.total);
    return(
        <Fragment>
            <div className="checkout--wrap">
                <h1 className="checkout--text">Total Belanja : {counter.price} </h1>
                {counter === 0 ? '' : <a><button>checkout</button></a>}
            </div>
        </Fragment>
    );


};