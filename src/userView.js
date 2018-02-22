import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/users';

class UserView extends Component {
    componentDidMount() {
        if(!this.props.users.length) {
            this.props.fetchData('https://jsonplaceholder.typicode.com/users/', this.props.match.params.userId);
        }
    }

    render() {
        let list=[];
        let city;
        let company;

        if(this.props.users.length) {
            list = this.props.users;
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === Number(this.props.match.params.userId)) {
                    list = list[i];
                    city = list.address.city;
                    company = list.company.name;
                }
            }
        } else if (this.props.user.address) {
            list = this.props.user;
            city = list.address.city;
            company = list.company.name;
        }

        return (
            <div>
                <h1>{list.name}</h1>
                <table className="app-user-info">
                    <tbody>
                        <tr>
                            <td>Email:</td>
                            <td>{list.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{list.phone}</td>
                        </tr>
                        <tr>
                            <td>Website:</td>
                            <td>{list.website}</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>Company:</td>
                            <td>{company}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, id) => dispatch(itemsFetchData(url, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserView);