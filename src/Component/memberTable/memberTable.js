import React, { Component }  from 'react';
import MemberTeamBox from "../memberTeamBox/memberTeamBox";

class MemberTable extends React.Component {
    constructor(props) {
        super(props);
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