import React, { Component } from 'react';
import './Header.css';

class Header extends React.Component {
  // TODO 若没有使用props与state则可以省略
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // TODO 可以使用语义化标签
      <div className="header">
        <h3>分组列表</h3>
        <button className="separate-button">分组学员</button>
      </div>
    );
  }
}

export default Header;
