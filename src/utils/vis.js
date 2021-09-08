import {useContext} from "react";
import {UserContext} from "./UserContext";
import {NavTransparentContext} from "./NavTransparentContext";


export const useScroll = (e) => {
    const {navTrans, setNavTrans} = useContext(NavTransparentContext)
    window.pageYOffset > 100 ? setNavTrans(true) : setNavTrans(false);




}