import React from 'react'
import ProfilePic from '../assets/images/profilepic.jpg'
import FontAwesome from 'react-fontawesome'

/**@class - TopBar
 * @description - used to show logout option as well as page title
 * @style - white background, blue-ish color, flex-direction row
 *flex-end - userimg should be column, logout should be row
 */

export default class TopBar extends React.Component
{
    render(){
        return(
            <div className="top-bar-wrapper">

            <div className="top-bar">
                <div className="user-img">
                    <text>Dashboard</text>
                    <FontAwesome className="fa fa-angle-double-right"/>
                    <text>Bank</text>
                    <FontAwesome className="fa fa-angle-double-right"/>
                    <text className="link-active">Overview</text>
                </div>
            <div className="log-out">
                <text>Mo</text>
                <FontAwesome className="fa fa-chevron-down"/>
                <div className="overview-list">
                <ul>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Pay/Transfer Money</li>
                    <li>Accounts</li>
                    <li>Settings</li>
                </ul>
            </div>
           
            </div>
          
            </div>
           
            </div>
        )
    }
}