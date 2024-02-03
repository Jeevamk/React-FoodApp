import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    return (
        <div className="error-container">
            <p className="error-status font-extrabold text-8xl text-center">{err.status}</p>
            <p className="error-text font-semibold text-3xl text-center">{err.statusText}</p>
        </div>
    )
}


export default Error;