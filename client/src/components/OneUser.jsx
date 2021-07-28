import React, { Component } from 'react';
import { editOneUser } from '../service/fetchData';
import { toast } from 'react-toastify';

class OneUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editStatus: false,
      editedUser: {
        _id: this.props.oneUser._id,
        userName: this.props.oneUser.userName,
        age: this.props.oneUser.age,
        email: this.props.oneUser.email,
        updatedAt: this.props.oneUser.updatedAt,
      },
    };
  }

  handleChange = ({ target }) => {
    const editedUserCopy = { ...this.state.editedUser };
    editedUserCopy[target.name] = target.value;
    this.setState({ editedUser: editedUserCopy });
  };

  handleEdit = async (userId, newBody) => {
    await editOneUser(userId, newBody);
    this.setState({ editStatus: false });
    toast.info('User has been updated');
  };

  toggleEdit = () => {
    this.setState({ editStatus: !this.state.editStatus });
  };

  render() {
    const { onDelete } = this.props;
    const { _id, userName, age, email, updatedAt } = this.state.editedUser;
    const updatedTime = new Date(updatedAt).toLocaleDateString('LT');

    return (
      <tbody className='table-body'>
        {!this.state.editStatus ? (
          <tr className='table-row'>
            <td className='table-row__userName'>{userName}</td>
            <td className='table-row__age'>{age}</td>
            <td className='table-row__email'>{email}</td>
            <td className='d-none'>{updatedTime}</td>
            <td className='buttons'>
              <button className='edit-btn mr-1 secondary-btn' onClick={() => this.toggleEdit(_id)}>
                Edit
              </button>
              <button className='delete-btn secondary-btn' onClick={() => onDelete(_id)}>
                Delete
              </button>
            </td>
          </tr>
        ) : (
          <tr className='table-row'>
            <td>
              <input
                className='table-row__userName'
                type='text'
                value={userName}
                onChange={this.handleChange}
                name='userName'
              />
            </td>
            <td>
              <input className='table-row__age' type='number' value={age} onChange={this.handleChange} name='age' />
            </td>
            <td>
              <input className='table-row__email' type='text' value={email} onChange={this.handleChange} name='email' />
            </td>
            <td className='d-none'>{updatedTime}</td>
            <td className='buttons'>
              <button
                className='save-btn mr-1 secondary-btn'
                onClick={() => this.handleEdit(_id, { userName, age, email })}
              >
                Save
              </button>
              <button className='delete-btn secondary-btn' onClick={() => onDelete(_id)}>
                Delete
              </button>
            </td>
          </tr>
        )}
      </tbody>
    );
  }
}

export default OneUser;
