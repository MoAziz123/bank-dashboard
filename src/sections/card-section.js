import React, { useImperativeHandle } from 'react'
import FontAwesome from 'react-fontawesome'
import Card from '../components/card'
/**@class - CardSection
 * @description - used to store all the cards for loading into React
 * @style - should have some padding to offset, colour should be offset of main colour
 * will have top row comprised of 3 cards, then second row of all cards, then third row of 2 cards  
 */

export default class CardSection extends React.Component
{
    render()
    {
        return(
            <div className="money-section">
            <h1>Your money</h1>
            <div className="card-section">
                <div className="card payments">
                    <h2>Balance</h2>
                    <h5>this month</h5>
                    <h1>£458,543</h1>
                </div>
                <div className="card savings">
                    <h2>Savings</h2>
                    <h5>this month</h5>
                    <h1>£46</h1>
                </div>
                <div className="card goals">
                    <h2>Progress</h2>
                    <h5>this month</h5>
                    <h1>39% of £200</h1>
                </div>

                
            </div>
            <div className="view-div">
            <div id="view-more">
                <text>View More</text><FontAwesome className="fa fa-arrow-right"/>
                </div>
                </div>
            
            </div>
        )
    }
}