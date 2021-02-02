import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

import ChatList from './ChatList';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";
import axios from 'axios';
// import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
// import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';

class NavRight extends Component {
    state = {
        listOpen: false,
        users: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        const elements = this.state.users.slice(0, 1).map((user, index) =>
            <span key={index} className="text-dark">{user.title}</span>
        )
        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <div className="pro-head">
                            {/* {elements} */}
                            Goubier Arnaud
                        </div>
                    </li>
                </ul>
            </Aux>
        );
    }
}

export default NavRight;
