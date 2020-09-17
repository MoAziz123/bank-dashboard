import React from 'react'
import FontAwesome from 'react-fontawesome'

/**@class - card
 * @description - contains details about user bank and stuff
 * @style - color should be separate in style, so can be changed later
 * should have a box-shadow surrounding it, and should be a quadrilateral
 * 
 */

 export default class Card extends React.Component
 {
     render=()=>{
         return(
             <div className="card">
                 <text className="card-title"></text>
                 <img src=""/>
             </div>
         )
     }
 }