import React from 'react'
import FontAwesome from 'react-fontawesome'

/**@class - SideBar
 * @description - contains the sidebar for the dashboard UI
 * @style - should contain separate classes for colour so it can be changed easily
 */

export default class SideBar extends React.Component{
    render(){
        return(
            <div className="side-bar bg-color">
                <div className="logo">
                    
                    <FontAwesome className="fa-4x fa-bank icon"/>
                </div>
                <div className="links-wrapper">

                <div className="links">
                    <text>Bank</text>
                    <ul>
                        <div className="link">
                            <FontAwesome className="fa fa-home"/><li>Overview</li>
                        </div>
                        <div className="link">
                            <FontAwesome className="fa fa-address-card"/><li>Pay/Transfer Money</li>
                        </div>
                        <div className="link">
                            <FontAwesome className="fa fa-lock"/><li>Products</li>
                        </div>
                        <div className="link">
                            <FontAwesome className="fa fa-cog"/><li>Help</li>
                        </div>
                    </ul>
                </div>
                <div className="links">
                    <text>Account</text>
                    <ul>
                        <div className="link">
                            <FontAwesome className="fa fa-home"/><li>Profile</li>
                        </div>
                        <div className="link">
                            <FontAwesome className="fa fa-address-card"/><li>Privacy</li>
                        </div>
                        <div className="link">
                            <FontAwesome className="fa fa-lock"/><li>Settings</li>
                        </div>
                        <div className="link">
                            <FontAwesome className="fa fa-cog"/><li>Support</li>
                        </div>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}