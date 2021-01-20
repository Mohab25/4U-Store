import React from 'react'
import ReactDOM from "react-dom"
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import CartBody from '../Cart/CartBody'
import './styles/styles.css'
import { PayPalButton } from "react-paypal-button-v2";

// payPal -> check https://developer.paypal.com/docs/business/checkout/configure-payments/single-page-app/#react

export default function Index() {

    let ProductArr = useSelector(state=>state.cartItemChangeReducer.cart_items)
    let total_price_arr = useSelector(state=>state.TotalsReducer.prices_arr) // totals prices is coming from cart and they are updated.
    console.log('Checkout products:',total_price_arr)
    let total_quantity_arr = useSelector(state=>state.TotalsReducer.quantities_arr) // quantities coming form cart and equals to the latest quantities been set.
    let total_price = useSelector(state=>state.TotalsReducer.total_price)
    let total_quantity = useSelector(state=>state.TotalsReducer.total_quantity)


    // implementing payPal 
    const createOrder=(data, actions)=>{
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '88.44'
                }
            }]
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture();
      };





    if(total_quantity_arr.length==0){return(<div></div>)}
    else{
    return (
        <div className='Checkout'>
            <div className='Checkout-main-container'>
                <div className='Cart-summary'>
                    <CartBody products={ProductArr} quantity={total_quantity_arr} total_price={total_price_arr}/>
                </div>
                <form className='checkout-form'>
                    <div className='checkout-personal-info'> 
                            <input type='text' id='name' placeholder='Name..'/>
                            <input type='email' id='emial' placeholder='Email..' className='checkout-email'/>
                    </div>
                    <h4 className='shipping-title'>Shipping Information</h4>
                    <div className='checkout-shipping-info'> 
                        <input type='text' id='Address' placeholder='Address..'/>
                        <input type='text' id='City' placeholder='City..'/>
                        <input type='text' id='State' placeholder='State..'/>
                        <input type='text' id='Zip-Code' placeholder='Zip Code..'/>
                    </div>
    {/* <input type='submit' name='Card-Details' value='Card Details' id='checkout-submit'/>*/}
                    <div style={{marginTop:'10px'}}></div>
                    <PayPalButton
                            createOrder={(data, actions) => createOrder(data, actions)}
                            onApprove={(data, actions) => onApprove(data, actions)}
                            />
                </form>
                
            </div>
        </div>
    )
}
}