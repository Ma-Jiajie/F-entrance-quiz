import React, { Component }  from 'react';
import "./Footer.css"

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h3>学员列表</h3>
                <div className="member-list">
                    <ul>
                        <li><label>张飞</label></li>
                        <li><label>蔡文姬</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label>鲁班七号</label></li>
                        <li><label><button className="add-button">+添加</button></label></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;