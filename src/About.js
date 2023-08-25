import { Link } from "react-router-dom";

function About(){
    return <div>
        <h1>This is my About Component</h1>
        <button><Link to="/home">Back to Home</Link></button>
    </div>
}

export default About;