import React, { Component } from 'react';
import { getAllUsers } from '../service/fetchData';

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsersData: [],
    };
  }

  componentDidMount = async () => {
    await this.loadAllUsers();
  };

  loadAllUsers = async () => {
    const resultData = await getAllUsers();
    this.setState({ allUsersData: resultData });
  };

  render() {
    return (
      <div>
        {this.state.allUsersData.map((User) => (
          <div className='one-user'> {Object.entries(User)} </div>
        ))}
      </div>
    );
  }
}

export default AllUsers;
