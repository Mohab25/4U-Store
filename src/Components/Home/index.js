import React, { Component } from 'react'
import Loader from '../Loader/index'
import Nav from '../Nav'
import Panel from '../Panel'
import Latest from '../Latest'
import Main from '../Main'
import Featuring from '../Featuring'
import Gallery from '../Gallery'
import Cards from '../Product_Cards_Holder'
// cards here
import Banner from '../Banner'
import Values from '../Values'
import Contact from '../Contact'
import Footer from '../Footer'

export default class Index extends Component {
constructor(props){
    super(props);
    this.state={ 
        samsung:undefined,
        time_load:false
    }

     // References from hash navigation 
    this.latestRef = React.createRef()
    this.offersRef = React.createRef()
    this.samsungRef = React.createRef()
    this.appleRef = React.createRef()
    this.huaweiRef = React.createRef()

}
componentDidMount(){
    setTimeout(()=>{
        this.setState({time_load:true})
    },0)
}
    render() {
        if(this.state.time_load===false){
            return(
                <Loader/>
                
            )
        }
        else{
        return (
                <div>
                    <Nav sam={this.samsungRef} app={this.appleRef} hua={this.huaweiRef} latest={this.latestRef} offers={this.offersRef}/>
                    <Panel/>
                    <Main ref={this.offersRef}/>
                    <Cards filter='Best'/>                
                    <Featuring/>  
                    <Latest ref={this.latestRef}/>
                    <Cards filter='latest'/>
                    <Gallery id='Samsung' ref={this.samsungRef}/>
                    <Cards   filter='Samsung'/>
                    <Values/>
                    <Gallery id='Apple' ref={this.appleRef}/>
                    <Cards filter='Apple'/>
                    <Gallery id='Huawei' ref={this.huaweiRef}/>
                    <Cards filter='Huawei'/>
                    <Banner/>
                    <Cards/>
                    <Contact/>
                    <Footer/>
                </div>
                
        )

}
}
}
