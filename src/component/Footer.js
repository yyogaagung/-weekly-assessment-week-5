import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Footer(){
    const counter = useSelector(state => state.total);
    const {product, price} = useSelector(state => state.total);
    let totalHarga = 0;
    product.map((el) => {totalHarga += el.price })
    return(
        <Fragment>
            <div className="checkout--wrap">
                <h1 className="checkout--text">Total Belanja : {totalHarga}  </h1>
                {counter === 0 ? '' : <a><button>checkout</button></a>}
            </div>
        </Fragment>
    );


};