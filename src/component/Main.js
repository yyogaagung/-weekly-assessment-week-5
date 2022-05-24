import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchPostAsync, increment } from "../action";



const ProductList = ()=>{
    // const [cars, setCars] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [err, setErr] = useState(false);
    const dispatch = useDispatch()
    const {list, loading, error} = useSelector(state => state.productList);
    const {product, price} = useSelector(state => state.total);
    console.log(product,'isi dari product total')

    useEffect(()=>{
    dispatch(fetchPostAsync())
},[dispatch])

    return(
        <div className="wrap-product">
            <ol>
                {loading && <div>loading...</div>}
                {(!loading && !error) && list.map((el,index)=>(
                <li key={index}>
                    <div className=" main-wrap-konten ">
                        <section className="card-konten">
                                <div className="wrap-img">
                                    <img src={el.image.url} alt=""/>                        
                                </div>
                                <div className="middle">
                                    <h6 className="judul-artikel">{el.productName}</h6>
                                    <h6 className="price-car">Rp{el.price}/hari</h6>
                                </div>
                                <div className="wrap-desc">
                                    <p className="desc">Stok: {el.availableQuantity}</p>
                                </div>          

                                <div className="quantity-wrap">
                                    {product.map((ele, ind) => {if(ele.uid == el.uid ){
                                        return(
                                            <button  onClick={() => {if( price > 0) {dispatch(decrement(el))} price = 0 }}>-</button>
                                        )
                                        
                                    }})}
                                    <button onClick={() => dispatch(increment(el))}>+</button>
                                </div>
                                
                                
                            
                        </section>
                </div>
                </li>
                ))}
                {(!loading && error) && <div>unexpected error</div>}
            </ol>
            
        </div>
    )
}

export default ProductList;