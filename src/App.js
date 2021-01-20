import React ,{Component, Fragment}from 'react'
import './App.css'
import Home from './Components/Home'
import Panel from './Components/Panel'
import Contact from './Components/Contact'
import Featuring from './Components/Featuring'
import Gallery from './Components/Gallery'
import Latest from './Components/Latest'
import Category from './Components/Category'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import {Provider} from 'react-redux'
import {Switch,BrowserRouter,Route,Router} from 'react-router-dom'
import store from './store'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Provider store={store}>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/offers' component={Featuring}/>
      <Route exact path='/samsung' component={Gallery}/>
      <Route exact path='/apple' component={Gallery}/>
      <Route exact path='/huawei' component={Gallery}/>
      <Route exact path='/latest' component={Latest}/>
      <Route path='/category' exact component={()=><Category name=''/>}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/checkout' component={Checkout}/>
    </Switch>
    </Provider>
    </BrowserRouter>
    )}
}

export default App;
