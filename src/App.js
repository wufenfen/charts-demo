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
    text: '折线图/面积图',
    url: '/line'
},{
    text: '柱状图/条形图',
    url: '/bar'
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
                  <Route path='/pie' component={Pie} />
                </div>
            </div>
        );
    }
}

export default App;