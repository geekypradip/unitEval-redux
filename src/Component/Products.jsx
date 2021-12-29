import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import FetchProducts from "./api/allRequest";
import { useSelector,useDispatch } from "react-redux";
import { Decrement, Increment } from "../redux/counter/actions/action";
import styles from './style/style.module.css'
function Products() {
    const countState=useSelector((state)=>state.counter);
const dispatch=useDispatch();
  
    const [products,setProducts]=useState([])
    useEffect(()=>{
        setProducts([{name:"Loading...",
    id:-1}])
       FetchProducts()
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
   function handleDecrese(){
       if(countState!==0)dispatch(Decrement(1))
   }
    return (  
        <div className={styles.products_container}>
          {
              products?.map((item)=>
                  <div key={item.id} className={styles.products_card}>
                    <div className={styles.product_name}>
                        {item.name}
                    </div>
                    <div className={styles.detais}>
                        <img src={item.image} alt="" />
                        <div>RS: {item.price}</div>
                        <div className={styles.qty}>
                                <div onClick={()=>dispatch(Increment(1))}>+</div>
                                <div>{countState}</div>
                                <div onClick={()=>handleDecrese()}>-</div>
                        </div>
                    </div>
                    <button>ADD</button>
                  </div>
              )
          }
        </div>
    );
}

export default Products;