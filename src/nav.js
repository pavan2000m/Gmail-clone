import React from 'react';
import NavComponents from './navcomponents';
 import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import './nav.css';


function Nav(){
    return(
        <div className='container'>
            <div className='nav_left'>
                <NavComponents Icon={MenuIcon}></NavComponents>
                <img   src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=''></img>
                <div className="search_box">
                    <SearchIcon  />
                    <form>
                    <input type="text"  />
                    <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            
            <div className='nav_right'>
               <NavComponents Icon={NotificationsIcon} />
               <NavComponents Icon={AppsIcon} />
               <NavComponents avatar />
                
               

            </div>

        </div>
    )
}
export default Nav;