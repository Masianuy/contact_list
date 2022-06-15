import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        firstName: 'Mari',
        lastName: 'Masianuy',
        email: 'Masianuy91@gmail.com',
        phone: '+380961776689',
      },
      {
        id: 2,
        firstName: 'Tima',
        lastName: 'Root',
        email: 'Root@gmail.com',
        phone: '+380961113333',
      },
    ],
  };

  saveToStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  delContact = (id) => {
    const contacts = this.state.contacts.filter(contact => { return contact.id !== id});
    this.setState({
      contacts
    });
    this.saveToStorage(contacts);
  }

  addContact = (newContact) => {
    const contacts = [...this.state.contacts, newContact];
    this.setState({
      contacts: contacts,
    });
    this.saveToStorage(contacts);
  };

  addEmptyContact = () => {
    console.log('ss')
    const emptyContact = {
      id: Date.now(),
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
    this.setState({
      ...this.state.contacts.push(emptyContact)
    })
  }

  render() {
    return (
      <div className='container'>
        <header>
          <h1>Contact list</h1>
        </header>
        <div className='wrap'>
          <ContactList  contacts={this.state.contacts} 
                        delItem={this.delContact}/>
          <ContactForm  addContact={this.addContact}
                        contactForEdit={this.state.contactForEdit}/>
        </div>
        <button className='btn-add' type='button' onClick={this.addEmptyContact}>New</button>
      </div>
    )
  }
}

export default App
