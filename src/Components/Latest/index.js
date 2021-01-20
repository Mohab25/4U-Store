import React, { Component,Fragment } from 'react'
import './styles/styles.css'

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[]
        };
        this.mapper = this.mapper.bind(this)
    }

    async componentDidMount(){
        await fetch('http://mohab25.pythonanywhere.com/store/Latest/').then(res=>res.json()).then(
            (data)=>{
                this.setState({items:data});        
            }
        )
        // either to use await, or to call mapper inside the fetch data promise. 
        this.mapper() 
        
    }
    mapper=()=>{
        /* what do i want to do? , so i want to set the images of the product according
        to the data on items array, i want to set all the other properties as well... 
        */
       console.log(this.state.items)
    }
    render() {
        if(this.state.items.length===0){
            return(
                <></>
            )
        }
        else{
        let item = this.state.items.map((item,index)=>
            <div key={index} id='latest'>
                <div className='Latesbox'>
                    <h4 className='Latesbox-title'>{item.name}<p className='Phone-name'>{item.price}$</p></h4>
                    <p className='Latesbox-paragraph'>{item.description} </p>
                </div>
                <div className='Latesbox Latesbox-img'>
                    <div className='Latestbox-img-signs-container'>
                        <span className='Latestbox-img-info-sign'><i className='icon-info'></i></span>    
                        <span className='Latestbox-img-cart-sign'><i className='icon-shopping-cart'></i></span>    
                    </div>
                    <div style={{backgroundImage:`url('${item.image}')`}}className='Latesbox-image'></div>
                    <div className='Latesbox-image-text'>
                        <h6>{item.title}</h6>
                        <p>{item.description}</p> 
                    </div>
                    <span className='right-arrow'><i className='icon-chevron-right'></i></span>    
                
                </div>
            </div>
            
            )
        return (
            <>
                <div className='Latest-titles-container' ref={this.props.LatestRef}>
                    <h1 className='Latest-section-title'>Latest Pieces </h1>
                    <h2 className='Latest-section-subtitle'>Check Out The Latest Items Shipped To Our Store </h2>
                </div>
                <div id='Lateswrapper'>
                    <div id='Latescontainer'>
                        {item}
                    </div>
                </div>
            </>
        )
        }
    }
}

export default React.forwardRef((props,ref)=>(<Index {...props} LatestRef={ref}/>))