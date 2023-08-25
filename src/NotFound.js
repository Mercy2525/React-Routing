import { useNavigate } from "react-router-dom";


const NotFound = () => {

    let navigate=useNavigate()
    return ( <div>
        <h1>404 ERROR</h1>
        <h1>This page does not exists</h1>

        <button onClick={()=>{navigate("/")}}>Go back Home</button>
    </div> );
}
 
export default NotFound;