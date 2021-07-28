import React, { Component } from 'react';
import { getAllUsers, deleteOneUser } from '../service/fetchData';
import OneUser from './OneUser';

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

  handleDelete = async (userId) => {
    await deleteOneUser(userId);
    this.loadAllUsers();
  };

  render() {
    return (
      <div className='users-page'>
        <h1 className='users-header'>Vartotojų sąrašas:</h1>
        <table className='users-table'>
          <thead className='table-head'>
            <tr>
              <th>Vardas</th>
              <th>Amžius</th>
              <th>El-paštas</th>
              <th className='d-none'>Atnaujintas</th>
              <th>Veiksmai</th>
            </tr>
          </thead>

          {this.state.allUsersData.map((user) => (
            <OneUser key={user._id} oneUser={user} onDelete={this.handleDelete} />
          ))}
        </table>
      </div>
    );
  }
}

export default AllUsers;
