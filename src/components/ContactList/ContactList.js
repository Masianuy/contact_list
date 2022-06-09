import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

class ContactList extends Component {

  render() {
    return (
      <div className='list-wrap'>
        {this.props.contacts.map(contact => 
          {return (<ContactItem key={contact.id} 
                    id={contact.id} 
                    firstName={contact.firstName}
                    lastName={contact.lastName} 
                    delItem={this.props.delItem}
                  />)}
        )}
      </div>
    )
  }
}

export default ContactList