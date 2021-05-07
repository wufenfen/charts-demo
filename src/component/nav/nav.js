import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

const Nav = props => (
    <ul className="nav">
        {
            props.list.map((ele, idx) => (
                <Link to={ele.url} key={idx}>
                    <li>{ele.text}</li>
                </Link>
            ))
        }
    </ul> 
);

export default Nav;