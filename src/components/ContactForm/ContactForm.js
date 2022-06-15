import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  onChange = (e) => {
    this.setState({
      id: Date.now(),
      [e.target.name]: e.target.value,
    })
  };

  saveContact = (e) => {
    e.preventDefault();
    this.props.addContact({
      ...this.state,
    });
  }

  resetInput = (e) => {
    e.target.previousElementSibling.value = '';
  }

  emptyForm = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  }

  render() {
    return (
      <form className='form' onSubmit={this.saveContact}>
        <div className='input-wrap'>
          <input name='firstName' type='text' placeholder='First name' onChange={this.onChange} />
          <button type='button' className='btn-clear-form' onClick={this.resetInput}>X</button>
        </div>
        <div className='input-wrap'>
          <input name='lastName' type='text' placeholder='Last name' onChange={this.onChange} />
          <button type='button' className='btn-clear-form' onClick={this.resetInput}>X</button>
        </div>
        <div className='input-wrap'>
          <input name='email' type='email' placeholder='Email' onChange={this.onChange} />
          <button type='button' className='btn-clear-form' onClick={this.resetInput}>X</button>
        </div>
        <div className='input-wrap'>
          <input name='phone' type='text' placeholder='Phone' onChange={this.onChange} />
          <button type='button' className='btn-clear-form' onClick={this.resetInput}>X</button>
        </div>
        <button type='submit'>Save</button>
        <button type='button' onClick={this.emptyForm}>Delete</button>
      </form>
    )
  }
}

export default ContactForm
