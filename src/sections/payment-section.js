import React, { useImperativeHandle } from 'react'
import FontAwesome from 'react-fontawesome'
import Card from '../components/card'
import Chart from '../assets/images/download.gif'
import Barclays from '../assets/images/download.png'
/**@class - PaymentSection
 * @description - used to show user their cards
 * @style - list should be able to scrollable   
 */

export default class PaymentSection extends React.Component
{
    render()
    {
        return(
            <div id="card-sec" className="money-section">
            <h1>Your cards</h1>
            <div className="payment-section">
                <div className="current-card">
                    <div className="current-item">
                        <img src={Barclays}/>
                        <text>XXXX-XXXX-XXXX-6100</text>
                        </div>
                        <div className="card-detail-row">
                            <div className="current-card-details">
                                <div className="ccd-item">
                                    <text>Card</text>
                                    <text>Barclays</text>
                                </div>
                                <div className="ccd-item">
                                    <text>Card Type</text>
                                    <text>Debit</text>
                                </div>
                                <div className="ccd-item">
                                    <text>Account Number:</text>
                                    <text>40743285</text>
                                </div>
                                
                           
                            <div className="ccd-item">
                                    <text>Card</text>
                                    <text>Barclays</text>
                                </div>
                                <div className="ccd-item">
                                    <text>Card Type</text>
                                    <text>Debit</text>
                                </div>
                                <div className="ccd-item">
                                    <text>Account Number:</text>
                                    <text>40743285</text>
                                </div>
                            </div>
                        </div>
                    

                </div>
                <div className="card-list">
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-credit-card"/>
                    <text>XXXX-XXXX-XXXX-6100</text>
                    </div>

                    <text>Credit Card A</text>
                    <button type="button">View</button>
                </div>
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-credit-card"/>
                    <text>XXXX-XXXX-XXXX-6100</text>
                    </div>

                    <text>Credit Card A</text>
                    <button type="button">View</button>
                </div>
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-credit-card"/>
                    <text>XXXX-XXXX-XXXX-6100</text>
                    </div>

                    <text>Credit Card A</text>
                    <button type="button">View</button>
                </div>
                <div className="card-item">
                    <div className="card-details">
                    <FontAwesome className="fa-2x fa-credit-card"/>
                    <text>XXXX-XXXX-XXXX-6100</text>
                    </div>

                    <text>Credit Card A</text>
                    <button type="button">View</button>
                </div>
                </div>
                
            </div>     
            </div>
        )
    }
}