import { errorLink } from "../util/constant";
const Error=()=>{
    return(
        <div className="error">
            <h1>This path is not available</h1>
            <img className="errorImg" src={errorLink} alt="" />
        </div>
    )
}
export default Error;
