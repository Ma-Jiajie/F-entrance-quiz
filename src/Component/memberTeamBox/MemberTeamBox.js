import React, { Component }  from 'react';
import "./MemberTeamBox.css"
import axios from "axios";

class MemberTeamBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get(`https://localhost:8080/members`).then((res)=>{
            const result = res;
            this.setState({result});
        })

    }

    render() {
        return (
            <div className="nav">
                <div className="team-name">1组</div>
                <div className="member-list">
                    <ul>
                        <li><label>1.张飞</label></li>
                        <li><label>2.蔡文姬</label></li>
                        <li><label>3.鲁班七号</label></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MemberTeamBox;