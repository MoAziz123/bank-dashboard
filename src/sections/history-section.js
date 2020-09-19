import React, { useImperativeHandle } from 'react'
import FontAwesome from 'react-fontawesome'
import Card from '../components/card'
import Chart from '../assets/images/download.gif'
import Barclays from '../assets/images/download.png'

/**@class - StatSection
 * @description - used to show user their statistics
 * @style - should have some padding to offset, colour should be offset of main colour
 * will have top row comprised of 3 cards, then second row of all cards, then third row of 2 cards  
 */

export default class PaymentSection extends React.Component
{
    render()
    {
        return(
            <div className="money-section">
            <h1>Your payment history</h1>
            <div className="history-section">
                <h3>History over the past 3 months</h3>
                <div className="card-list">
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-user"/>
                    </div>

                    <text>A Rosario</text>
                    <button type="button">View</button>
                </div>
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-user"/>
                    </div>

                    <text>M Aziz</text>
                    <button type="button">View</button>
                </div>
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-user"/>
                    </div>

                    <text>S Alexa</text>
                    <button type="button">View</button>
                </div>
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-user"/>
                    </div>

                    <text>R Bolton</text>
                    <button type="button">View</button>
                </div>
                
            </div>     

            </div>
            </div>
        )
    }
}