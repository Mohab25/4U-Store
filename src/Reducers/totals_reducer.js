import {TOTAL_PRICE_QUANTITY} from '../Actions/Cart_Checkout_related/types'

let State={
    total_price:0,
    total_quantity:0,
    quantities_arr:[],
    prices_arr:[]
}

export default function totals_Reducer(state=State,action){
    switch(action.type){
        case TOTAL_PRICE_QUANTITY: return{...state,total_price:action.payload['total_price'],total_quantity:action.payload['total_quantity'],prices_arr:action.payload['prices_arr'],quantities_arr:action.payload['quantities_arr']}
        default:return{...state}
    
    }
}


