import React, { Component } from 'react';
import { postNewUser } from '../service/fetchData';

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: ['userName', 'age', 'email', 'password', 'password2'],
      formData: {
        userName: '',
        age: '',
        email: '',
        password: '',
        password2: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const formDataCopy = { ...this.state.formData };
    formDataCopy[target.name] = target.value;
    this.setState({ formData: formDataCopy });
  };

  addNewUser = (e) => {
    e.preventDefault();
    postNewUser(this.state.formData);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='add-new-form'>
        <h2>Pridėti naują vartotoją:</h2>
        <form onSubmit={this.addNewUser} onChange={this.handleChange} className='create-user-form'>
          {/* Had to keep in english in order to use map on creating input labels and placeholders */}
          {this.state.inputFields.map((inputField) => (
            <div key={inputField} className='input-element'>
              <label htmlFor={inputField}>
                {inputField === 'password2' ? 'REPEAT PASSWORD' : inputField.toUpperCase()}:
              </label>
              <div className='input-container'>
                <input
                  className='form-input'
                  type={
                    inputField === 'age'
                      ? 'number'
                      : inputField === 'password' || inputField === 'password2'
                      ? 'password'
                      : 'text'
                  }
                  placeholder={inputField === 'password2' ? 'Repeat your password' : `Enter ${inputField}`}
                  name={inputField}
                  id={inputField}
                />
              </div>
            </div>
          ))}

          <button className='primary-btn mr-auto' type='submit'>
            Pridėti į sąrašą
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewUser;
