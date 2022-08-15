import { useContext } from "react";
import { userContext } from "./UseContextProvider";


const useAuth=() => {
    return useContext(userContext);
}


export default useAuth;