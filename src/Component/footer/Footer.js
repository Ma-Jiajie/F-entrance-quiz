import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import "./Footer.css"

class Footer extends React.Component {
    constructor() {
        super();
        // this.State = {
        //     added: true
        // }
    }

    handleClickOnLikeButtonAndOnChangeLikeText = () => {
        this.setState({
            added: !this.state.added
        })
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
                        {/*{ this.state.added ?*/}
                        {/*    <li><label><button className="add-button" onClick={this.handleClickOnLikeButtonAndOnChangeLikeText}>+添加</button></label></li>  :*/}
                        {/*    <li><label><text onChange={this.handleClickOnLikeButtonAndOnChangeLikeText}></text></label></li>*/}
                        {/*}*/}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;