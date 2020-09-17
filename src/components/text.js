import React from 'react'
import FontAwesome from 'react-fontawesome'

/**
 * @class - IntroBar
 * @description - contains the entry text for dashboard
 */
export default class IntroBar extends React.Component
{
    render(){
        return(
            <div className="text-bar fg-color bg-color">
                <h1>Hello {name}</h1>
                <h3>Welcome to your new dashbaord. Here, you can check out payments, and such
                    provided by atlas. :)
                </h3>


            </div>
        )
    }

}