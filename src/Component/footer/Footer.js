import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: true,
    };
  }

  // TODO 命名优化
  handleClickOnLikeButtonAndOnChangeLikeText = () => {
    const added = this.state.added;
    this.setState({
      added: !added,
    });
  };

  render() {
    const added = this.state.added;
    return (
      <div className="header">
        <h3>学员列表</h3>
        <div className="member-list">
          <ul>
            {/* TODO 使用map方法渲染li */}
            <li>
              <label>张飞</label>
            </li>
            <li>
              <label>蔡文姬</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            <li>
              <label>鲁班七号</label>
            </li>
            {/* TODO text onchange？应该使用input上onKeyUp吧 */}
            {added ? (
              <li>
                <label>
                  <button
                    className="add-button"
                    onClick={this.handleClickOnLikeButtonAndOnChangeLikeText}
                  >
                    +添加
                  </button>
                </label>
              </li>
            ) : (
              <li>
                <label>
                  <text onChange={this.handleClickOnLikeButtonAndOnChangeLikeText} />
                </label>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
