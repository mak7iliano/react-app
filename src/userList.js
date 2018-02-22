import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/users';


class UserList extends Component {
    componentDidMount() {
      this.props.fetchData('https://jsonplaceholder.typicode.com/users');
    }

    render() {
        return (
            <div className="app-user-list">
                {this.props.users.map(post =>
                    <Link to={`/user/${post.id}`} className="app-user-element" key={post.id}>
                        {post.name}
                        <div className="user-login">{post.username}</div>
                    </Link>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);