
import { Link } from "react-router-dom";

import styles from './navbar.module.css'
function Navbar() {

return ( 
    <div className={styles.navbar}>
        <Link to="/" className={styles.navLink}>home
        </Link>
       
        <Link to="/checkOut" className={styles.navLink} >
        <i class="fas fa-cart-plus"></i>
     </Link>
     
    </div>
     )
    // }
    // return(
    //     <div className={styles.navbar}>
        
    //     <Link to="/login" className={styles.navLink}>
    //       {isLogin?"Log Out":"Login"} 
    //  </Link>
    // </div>
    // )
    
}

export default Navbar;