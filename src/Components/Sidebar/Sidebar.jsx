import React from 'react'
import "./Sidebar.css"
import {HomeWork, AssignmentInd, AttachMoney, AddShoppingCart ,Security, Receipt, BubbleChart, Build} from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className='sidebar'>
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className='sidebarList'>
                       <li className='sidebarListItems'><HomeWork/>Home</li>
                       <li className='sidebarListItems'><AssignmentInd/>Customer</li>
                       <li className='sidebarListItems'><Receipt/>Lead</li>
                       <li className='sidebarListItems'><Build/>Service</li>
                       <li className='sidebarListItems'><AddShoppingCart/>Product</li>
                       <li className='sidebarListItems'><AttachMoney/>Revenue</li>
                       <li className='sidebarListItems'><BubbleChart/>Employee Details</li>
                       <li className='sidebarListItems'><Security/>Admin</li>
                   </ul>
               </div>
           </div>
        </div>
    )
}
