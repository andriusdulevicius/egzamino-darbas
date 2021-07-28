import React, { Component } from 'react';
import { postNewUser } from '../service/fetchData';
import { toast } from 'react-toastify';
import { validate } from '../service/validation';

const initialErrorData = {
  userName: '',
  age: '',
  email: '',
  password: '',
  password2: '',
};

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
      errorData: initialErrorData,
    };
  }

  handleChange = ({ target }) => {
    const validationError = validate(target.name, target.value);

    if (target.name === 'password' || target.name === 'password2') {
      this.setState({ errorData: { ...this.state.errorData, password2: '' } });
    }

    const formDataCopy = { ...this.state.formData };
    const errorDataCopy = { ...this.state.errorData };
    formDataCopy[target.name] = target.value;
    errorDataCopy[target.name] = validationError;
    this.setState({ formData: formDataCopy, errorData: errorDataCopy });
  };

  addNewUser = (e) => {
    e.preventDefault();
    const { password, password2 } = this.state.formData;
    if (password !== password2) {
      this.setState({ errorData: { ...this.state.errorData, password2: 'Slaptažodžiai turi sutapti!' } });
      return;
    }
    if (JSON.stringify(this.state.errorData) !== JSON.stringify(initialErrorData)) return;
    // Reikia patikrinti ar nera erroru
    postNewUser(this.state.formData);
    toast.success(`Naujas vartotojas pridėtas į sąrašą.`);
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
                {this.state.errorData[inputField] !== '' && (
                  <span className='input-error error-msg'>{this.state.errorData[inputField]}</span>
                )}
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
