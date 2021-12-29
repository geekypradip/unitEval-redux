import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import FetchProducts from "./api/allRequest";

import styles from './style/style.module.css'
function Products() {
    const [qty,setqty]=useState(0)
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
       if(qty!==0)setqty((e)=>e-1)
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
                                <div onClick={()=>setqty((e)=>e+1)}>+</div>
                                <div>{qty}</div>
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