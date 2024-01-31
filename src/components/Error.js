import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <p className="error-status">{err.status}</p>
            <p className="error-text">{err.statusText}</p>
        </div>
    )
}


export default Error;