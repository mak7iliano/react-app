import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            });
    }

    render() {
        return (
            <div className="app-user-list">
                {this.state.posts.map(post =>
                    <Link to={`/user/${post.id}`} className="app-user-element" key={post.id}>
                        {post.name}
                        <div className="user-login">{post.username}</div>
                    </Link>
                )}
            </div>
        );
    }
}

export default UserList;