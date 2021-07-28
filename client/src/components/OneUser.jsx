import React, { Component } from 'react';

class OneUser extends Component {
  state = {};

  render() {
    const { userName, age, email, updatedAt } = this.props.oneUser;
    const updatedTime = new Date(updatedAt).toLocaleDateString('LT');

    return (
      <tbody className='table-body'>
        <tr className='table-row'>
          <td className='table-row__userName'>{userName}</td>
          <td className='table-row__age'>{age}</td>
          <td className='table-row__email'>{email}</td>
          <td className='d-none'>{updatedTime}</td>
          <td className='buttons'>
            <button className='edit-btn mr-1 secondary-btn'>Edit</button>
            <button className='delete-btn secondary-btn'>Delete</button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default OneUser;
