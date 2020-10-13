import React, { Component }  from 'react';
import "./Header.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h3>分组列表</h3>
                <button className="separate-button">分组学员</button>
            </div>
        );
    }
}

export default Header;