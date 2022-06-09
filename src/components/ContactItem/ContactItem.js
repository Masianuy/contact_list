import React, { Component } from 'react';
import './ContactItem.css';

class ContactItem extends Component {
  render() {
    return (
    <div className='list-item' key={this.props.id}>
      <p>{this.props.firstName} {this.props.lastName}</p>
      <button type='button' className='del-btn' 
          onClick={(e) => (this.props.delItem(this.props.id))}>X</button>
    </div>
    )
  }
}

export default ContactItem