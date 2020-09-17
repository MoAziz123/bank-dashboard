import React, { useImperativeHandle } from 'react'
import FontAwesome from 'react-fontawesome'
import Card from '../components/card'
import Chart from '../assets/images/download.gif'
/**@class - StatSection
 * @description - used to show user their statistics
 * @style - should have some padding to offset, colour should be offset of main colour
 * will have top row comprised of 3 cards, then second row of all cards, then third row of 2 cards  
 */

export default class StatSection extends React.Component
{
    render()
    {
        return(
            <div className="money-section">
            <h1>Your stats</h1>
                <div className="stat-section">
                    <h2>Your savings over time</h2>
                    <div className="stat">
                        <img src={Chart}/>
                        <div className="money-col">
                            <h3>Money in:</h3>
                            <p>£340</p>
                            <h3>Money out:</h3>
                            <p>£487,664</p>
                        </div>
                    </div>


                </div>            
            </div>
        )
    }
}