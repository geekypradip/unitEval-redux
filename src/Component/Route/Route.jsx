import { Route, Switch} from "react-router-dom";
import CheckOut from "../CheckOutCart";
import Produts from "../Products";


function RouteControll() {
    // const {id}=useParams()
    // console.log(id)
        return (  
        
           <Switch>
               <Route exact path="/">
                   <Produts/>
               </Route>
               {/* <Route exact path="/login">
                    <Login/>
               </Route> */}
               <Route exact path="/checkOut">
                  <CheckOut/>
               </Route>
           </Switch>
       
    );
   }

export default RouteControll;