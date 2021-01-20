import React, { Component} from 'react'
import './styles/styles.css'
import { connect } from "react-redux";
import set_totals from "../../Actions/Cart_Checkout_related/totals";
import {Link} from 'react-router-dom'
import CartBody from './CartBody'

class Index extends Component {
/* the idea here is to have a table contains the whole products being chosen, 
    when the user clicks on the item he is setting a redux state contains a list of 
    objects, each holds the product image,name,price,quantity, the quantity shipped 
    with two arrows, each one increment or decrement of it.  
*/

constructor(props){
    super(props)
    this.state={
        products:[],
        total_price:[],   // this is an array because it is populated as the items got from the database with values of 0, as the value changes dynamically when a button clicked, i need the corresponding index of the item being changed (which has a default of zero)  
        quantity:[],      // the same thing 
        total_price_all_items:0,
        total_quantity_all_items:0
    }
    this.handleClick = this.handleClick.bind(this)
    this.Checkout = this.Checkout.bind(this)
}

// componentDidMount(){
//     fetch('http://127.0.0.1:8000/store/products/').then(res=>res.json()).then(
//         data=>{this.setState({products:data, total_price:Array(data.length).fill(0), quantity:Array(data.length).fill(0)})}
//     )
// }


componentDidMount(){
    let cart_items = this.props.items
    let total_prices = []
    cart_items.map((product,index)=>{total_prices.push(parseFloat(product.price))}) // getting the prices of all the products of the cart when the component mounts 
    let total_quantities= Array(cart_items.length).fill(1) // initial quantities is 1 for each. 
    let total_price_for_all = 0  // this is for initial set when the component mounts look for the loop below (map) 
    let total_quantity_for_all=0 // the same thing 
    total_prices.map(price=>total_price_for_all = total_price_for_all+price)
    total_quantities.map(q=>total_quantity_for_all = total_quantity_for_all+q)
    console.log(total_quantity_for_all)
    this.setState({products:cart_items ,total_price:total_prices, quantity:total_quantities,total_price_all_items:total_price_for_all, total_quantity_all_items:total_quantity_for_all})

}

componentDidUpdate(prevProps){
    // if(prevProps!=this.props){
    //     console.log('new props:',this.props.total_price_from_redux)
    // }
}

    handleClick(index,e){
        let new_quantity = this.state.quantity      // quantity array 
        let total_prices = this.state.total_price   // prices array 
        let price = this.state.products[index].price    // specific item price
        let quantity=0                              // just a default to begin with 
        let total_price=0                           // just a default to begin with
        if(e.target.classList.contains('up-arrow')){
        quantity = new_quantity[index]+1
        }
        else if(e.target.classList.contains('down-arrow')){
        quantity = new_quantity[index]-1<0?0:new_quantity[index]-1
        }
        
        total_price = price*quantity          // total price of the specific item 
        new_quantity[index] = quantity        // setting new quantity array.  
        total_prices[index] = total_price    // setting new prices array. 

        let all_items_prices_total=0      // price of all items 
        let all_items_quantities_total=0  // quantity of all items. 

        new_quantity.map(q=>all_items_quantities_total=all_items_quantities_total+q)
        total_prices.map(p=>all_items_prices_total=all_items_prices_total+p)

        this.setState({quantity:new_quantity, total_price:total_prices,total_price_all_items:all_items_prices_total,total_quantity_all_items:all_items_quantities_total})
        this.props.dispatch(set_totals({total_price:all_items_prices_total,total_quantity:all_items_quantities_total,quantities_arr:new_quantity,prices_arr:total_prices}))
    }


    Checkout(){
        this.props.dispatch(set_totals({quantities_arr:this.state.quantity,prices_arr:this.state.total_price}))

    }

    render() {
        console.log('products:',this.state.products)
        
    if(this.state.products.length==0){return(<div></div>)}
    else{
        return (
            <div className='Cart'>
                <div className='Cart-container'>
                    <div className='total-qunatity-price-holder'>
                        <div>items:{this.state.total_quantity_all_items}</div>
                        <div>Total:{this.state.total_price_all_items.toFixed(2)}$</div>
                        <Link to='/checkout'><button id='to-checkout-btn' onClick={this.Checkout}>Checkout</button></Link>
                    </div>
                    <div className='items-table'>
                        <CartBody products={this.state.products} quantity={this.state.quantity} total_price={this.state.total_price} handleClick={this.handleClick}/>
                    </div>
                </div>
                
            </div>
        )
    }
    }
}

let mapStateToProps=(state)=>({
    total_price_from_redux:state.TotalsReducer.total_price,
    total_quantity_from_redux:state.TotalsReducer.total_quantity,
    items:state.cartItemChangeReducer.cart_items
})

export default connect(mapStateToProps)(Index); 