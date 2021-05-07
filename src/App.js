import React, { Component } from 'react';
import Nav from './component/nav/nav';
import Welcome from './page/welcome';
import Goods from './page/goods';
import Bar from './page/bar';
import Line from './page/line';
import Pie from './page/pie';
import './App.css';
import {Route} from 'react-router-dom';

const LIST = [{
    text: 'welcome',
    url: '/welcome'
}, {
    text: 'goods',
    url: '/goods'
},{
    text: '折线图-line',
    url: '/line'
},{
    text: '柱状图-bar',
    url: '/bar'
},{
    text: '面积图-area',
    url: '/area'
},{
    text: '条形图-vbar',
    url: '/vbar'
},{
    text: '饼图-pie',
    url: '/pie'
}];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="nav_bar">
                    <Nav list={LIST} />
                </div>
                <div className="conent">
                  <Route path='/welcome' component={Welcome} />
                  <Route path='/goods' component={Goods} />
                  <Route path='/line' component={Line} />
                  <Route path='/bar' component={Bar} />
                  <Route path='/area' component={Bar} />
                  <Route path='/vbar' component={Bar} />
                  <Route path='/pie' component={Pie} />
                </div>
            </div>
        );
    }
}

export default App;