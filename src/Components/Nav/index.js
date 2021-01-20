import React,{useState,useEffect,useRef} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {HashLink,} from 'react-router-hash-link'
import {Nav,Nav_container,Nav_title,Nav_links_list,Nav_links_items,Nav_icon_container,Nav_icon_checkbox,Label,NavAnchor}
from './style/styles'
import logo from './images/menu-white.png'
import {useSelector} from 'react-redux'


export default function Index(props) {
    /*first hide the nav, until the user scrolls down a bit to keep the look of the
        panel image 
        refer to scroll function below 
    */
    let [position,setPosition] = useState('absolute')
    let [Navposition,setNavposition] = useState('-100') 

    let [linkColor,setLinkColor] = useState('white')

    let place = window.location.href

    /**
     * set the right position of the navbar on mobile screen and change it 
     * when the user click the humberger icon 
     * refer also to mobileNavPositionChange method 
     */

     let [mobileNavPosition,setmobileNavPosition] = useState('-340')

    let toggle=()=>{
        /**
         * the main functionality here is to toggle the menu on and off, based on a 
         * checkbox behind the humburger icon,
         */
        const list = document.getElementById('nav_list');
        let checkbox = document.getElementById('checkbox');
        if (checkbox.checked==false){
            setmobileNavPosition('0');
            checkbox.checked=true;
        }
        
        else if(checkbox.checked==true && window.innerWidth<=540){
            checkbox.checked=false;
            setmobileNavPosition('-340');
        }

        else if(checkbox.checked==true && window.innerWidth>540){
            checkbox.checked=false;
            setmobileNavPosition('-340');
        }
    }
    
    let scroll=()=>{
        /**
         * this funciton is about changing the hidden navbar after the user scrolls 
         * down and reach to more than 100px below the top of the page. 
         */
        if(window.scrollY>100){  // there are two properties: scrollY and PageYOffset, this later is better for old browsers. 
            setNavposition('0'); 
            setPosition('fixed')
    }
        else{
            console.log('it is less than 100')
            setNavposition('-100')
            
        }
    }

    let moveToView=(e)=>{
        let view = `${e.target.outerHTML}`.toLowerCase()
        console.log('props(latest):',props.latest)
        switch(true){ // this switch(true) is a hack
            case view.includes('offers'):{props.offers.current.scrollIntoView({behavior:'smooth'})};break;
            case view.includes('latest'):{props.latest.current.scrollIntoView({behavior:'smooth'})};break;
            case view.includes('samsung'):{console.log('find sam');props.sam.current.scrollIntoView({behavior:'smooth'})};break;
            case view.includes('apple'):{props.app.current.scrollIntoView({behavior:'smooth'})};break;
            case view.includes('huawei'):{props.hua.current.scrollIntoView({behavior:'smooth'})};break;
            
        }
        //if(`${e.target.outerHTML}`.toLowerCase().includes('samsung')){console.log('she said yes!')}
        //props.sam.current.scrollIntoView({behavior:'smooth'})
    }

    let activate=()=>{
        
    }

    /*
        there must be a better way to call scroll method to change navbar visibility,
         without using scroll event, as it is costly, it will just keep calling 
         scroll  
    */
    window.addEventListener('scroll',scroll)
    
    // grab the cart number of items from redux 
    let icon_number = useSelector(store=>store.CartIconReducer)['icon_total'] 
    return (
        <div>
            <Nav show={Navposition} position={position}>
                <Nav_container>
                    <Nav_title> 4U STORE</Nav_title>
                    <Nav_links_list right={mobileNavPosition} id='nav_list'>
                        <Nav_links_items onClick={activate} color={linkColor}><NavAnchor style={{active:'#002177'}}>Home</NavAnchor></Nav_links_items>
                        <Nav_links_items onClick={moveToView}><NavAnchor >Offers</NavAnchor></Nav_links_items>
                        <Nav_links_items onClick={moveToView}><NavAnchor >Latest</NavAnchor></Nav_links_items>
                        <Nav_links_items onClick={moveToView}><NavAnchor ><span><i className='fa fa-android' style={{marginRight:'4px'}}></i></span></NavAnchor></Nav_links_items>
                        <Nav_links_items onClick={moveToView}><NavAnchor ><span><i className='fa fa-apple' style={{marginRight:'4px'}}></i></span></NavAnchor></Nav_links_items>
                        <Nav_links_items onClick={moveToView}><><NavAnchor ><span><i className='fa fa-mobile'  style={{marginRight:'4px'}}></i>Huawei</span></NavAnchor></></Nav_links_items>
                        <Nav_links_items onClick={moveToView}><NavAnchor >Contact</NavAnchor></Nav_links_items>
                        <Nav_links_items><Link to='/cart'><i className='fas fa-shopping-cart'></i><span className='icon_number'>{icon_number}</span></Link></Nav_links_items>
                    </Nav_links_list>
                    
                    <Nav_icon_container sr={logo}>
                        <Label onClick={toggle}></Label>
                        <Nav_icon_checkbox id='checkbox'></Nav_icon_checkbox>    
                    </Nav_icon_container>

                </Nav_container>

            </Nav>           
        </div>
    )
}
