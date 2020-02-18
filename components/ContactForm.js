import React, { useState } from 'react';
import { useStaticKit, ValidationError } from '@statickit/react';
import { sendContactEmail } from '@statickit/functions';
import Button from '../components/Button';

const ContactForm = (props) => {
  const client = useStaticKit();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);
    let resp = await sendContactEmail(client, {
      subject: `${name} submitted the contact form`,
      replyTo: email,
      fields: { message }
    });
    
    switch (resp.status) {
      case 'ok':
        setIsSubmitted(true);
        break;
      
      case 'argumentError':
        setErrors(resp.errors);
        setIsSubmitting(false);
        break;
      
      default:
        setIsSubmitting(false);
        break;
    }
  }
  if (isSubmitted) {
    return (
      <div className="py-16">
        <p>Thank you for your message! I'll get back to you as soon as I can.</p>
      </div>
    );
  }
  return (
    <form className="bg-dark-background text-white pb-16" onSubmit={handleSubmit}>
      <ul className="form bg-lighter-background rounded border-solid border-2 border-white sm:w-full md:w-1/2 m-auto">
        <li className="my-4">
          <label className="m-auto display-block font-barlow pb-2" htmlFor="name">
            First and Last Name
          </label>
          <input
            id="name"
            type="text" 
            name="name" 
            onChange={e => setName(e.target.value)}
            value={name}
            className="m-auto display-block" 
          />
        </li>
        <li className="my-4">
          <label className="m-auto display-block font-barlow pb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email" 
            onChange={e => setEmail(e.target.value)}
            value={email}
            className="m-auto display-block" 
          />
          <ValidationError 
            prefix="Email" 
            field="replyTo"
            errors={errors}
          />
        </li>
        <li className="my-4">
          <label className="m-auto display-block font-barlow pb-2" htmlFor="message">
            How can I help you?
          </label>
          <textarea
            id="message"
            name="message" 
            onChange={e => setMessage(e.target.value)}
            value={message}
            className="m-auto display-block w-64 h-32" 
          />
        </li>
        <li className="text-center pt-5 pb-10">
          <button className="button text-center text-white font-barlow font-extrabold sm:text-lg md:text-2xl p-button-padding rounded-button-radius bg-button-purple cursor-pointer hover:bg-button-purple-darker" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </li>
      </ul>
    </form>
  );
}

export default ContactForm;