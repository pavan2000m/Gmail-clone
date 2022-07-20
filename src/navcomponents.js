import React from "react";
import { Avatar } from "@material-ui/core";
import './navcomponents.css';



function NavComponents({Icon,avatar}){
    return (<div className="navContents_container">
            {Icon && <Icon/> }
            {avatar && <Avatar src="" className="avatar"/>}
            
         </div>);

}
export default NavComponents;