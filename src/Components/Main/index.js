import React from 'react'
import {useState,useEffect} from 'react'
import { Home,HomeContainer,MainTitle,MainSubtitle,HomeTitle,HomeSubtitle,HomePara,HomeBtn,MainTitleContainer} from './style/styles'
import '../Product_Cards_Holder/Card-product 2/styles/font-awesome.css'
import Gallery from '../Gallery'
import Cards from '../Product_Cards_Holder'

function Main(props) {
    /**
     * this is very simple, just make a fetch request and update the state hook, 
     * you call for the image of the banner, it's title and subtitle and it's 
     * button text 
     */
    let [BannerOb,setBannerOb] = useState([])
    let obj = {'title':''}
    useEffect(()=>{
        fetch('http://mohab25.pythonanywhere.com/components/firstbanner/').then(res=>res.json()).then(data=>{
            setBannerOb(data);
            console.log(data); 
            
        })
    },[]);
    
    obj = BannerOb[0];
    console.log(obj);
    if(obj!=undefined){
    return (
        <div id='offers' ref={props.MainRef}>
            <MainTitleContainer>
                <MainTitle>Our Top Rated Offers </MainTitle>
                <MainSubtitle>Check out offers much <i className='fa fa-heart'></i> by our customers  </MainSubtitle>
            </MainTitleContainer>
            <Home bg_url={obj.image}>
            <HomeContainer>
                        <HomeTitle>{obj.title}</HomeTitle>
                        <HomeSubtitle>{obj.subtitle}</HomeSubtitle>
                        <HomePara>{obj.description}</HomePara>
                        <HomeBtn> <i className='icon-play-circle icon-large'></i> {obj.btn_text}</HomeBtn>
            </HomeContainer>     
            </Home>

        </div>
    )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}


export default React.forwardRef((props,ref)=>(<Main {...props} MainRef={ref}/>))