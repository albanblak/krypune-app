import {useEffect, useState} from "react";
import {useForkRef} from "@material-ui/core";
import {useJwt,decodeToken} from "react-jwt";


const useAuth = () => {
   const [isLogged, setIsLogged] = useState();


   useEffect(() => {
       const t = localStorage.getItem('user');
       if(t){
           setIsLogged({
               isLoggedIn: true,
               data:decodeToken(t)
           })
       }



   })

    return {isLogged, setIsLogged}

}