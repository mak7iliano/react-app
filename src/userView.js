import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

class UserView extends Component {
    // static propTypes = {
    //     userId: PropTypes.number.isRequired
    // };

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            city: '',
            company: ''
        };

        console.log(this.props);
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                let posts = res.data;
                let city = res.data;
                let company = res.data;

                for (let i = 0; i < posts.length; i++) {
                    if (posts[i].id === Number(this.props.match.params.userId)) {
                        posts = posts[i];
                        city = posts.address.city;
                        company = posts.company.name;
                        // console.log(posts);
                    }
                }
                this.setState({ posts });
                this.setState({ city });
                this.setState({ company });
            });
    }

    render() {


        return (
            <div>
                <h1>{this.state.posts.name}</h1>
                <table className="app-user-info">
                    <tbody>
                        <tr>
                            <td>Email:</td>
                            <td>{this.state.posts.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{this.state.posts.phone}</td>
                        </tr>
                        <tr>
                            <td>Website:</td>
                            <td>{this.state.posts.website}</td>
                        </tr>
                        {/*<tr>*/}
                            {/*<td>City:</td>*/}
                            {/*<td>{this.state.city}</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                            {/*<td>Company:</td>*/}
                            {/*<td>{this.state.company}</td>*/}
                        {/*</tr>*/}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default UserView;