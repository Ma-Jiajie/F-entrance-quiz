import React, { Component }  from 'react';
import MemberTeamBox from "../memberTeamBox/MemberTeamBox";

class MemberTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <MemberTeamBox />
                <MemberTeamBox />
                <MemberTeamBox />
                <MemberTeamBox />
                <MemberTeamBox />
                <MemberTeamBox />
            </div>
        );
    }
}

export default MemberTable;