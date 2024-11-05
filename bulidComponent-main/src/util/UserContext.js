import { createContext } from "react";

const UserContext=createContext(
    {
        loggedInUser:" "
    }
)
export default UserContext;  //exporting the context so that it can be used in other components