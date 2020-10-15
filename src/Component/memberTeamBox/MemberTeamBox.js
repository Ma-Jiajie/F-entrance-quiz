import React, { Component } from 'react';
import './MemberTeamBox.css';
import axios from 'axios';

class MemberTeamBox extends React.Component {
  constructor(props) {
    super(props);
    // TODO 设置初始默认值
    this.state = {};
  }

  // TODO 请求不应该放在列表元素中，会造成重复请求
  componentDidMount() {
    axios.get(`https://localhost:8080/members`).then((res) => {
      // TODO 确定result不应该是res.data?
      const result = res;
      this.setState({ result });
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="team-name">1组</div>
        <div className="member-list">
          <ul>
            <li>
              <label>1.张飞</label>
            </li>
            <li>
              <label>2.蔡文姬</label>
            </li>
            <li>
              <label>3.鲁班七号</label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MemberTeamBox;
