import React, { useRef, useState } from 'react';
import './Footer.css'  
import emailjs from '@emailjs/browser';
const Footer = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_aa102lm';
    const templateId = 'template_mdrigtr';
    const publicKey = 'l80u2ZppR7TWIN-qA';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Smartest.ai',
      project:  project ,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setProject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    }
    
    return (
      <form onSubmit={handleSubmit} className='emailForm' id='Footer'>
      <span>Contact Us</span>
      <input className='footer1'
        type="text"
        placeholder="Your Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        
      />
<hr />
      <input className='footer2'
        type="email"
        placeholder="Your Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
<hr />

      <input className='footer3'
        type="text"
        placeholder="Project Title"
        value={project}
        onChange={(e) => setProject(e.target.value)}
        required
      />
<hr />
<div className="texta">      
      <textarea 
      required
        cols="30"
        rows="10"
        placeholder='Project Discription'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      </div>
      <div className="btnn">      
      <button className='btnn' type="submit">Send</button>
      </div>
    </form>
  )
}

export default Footer
