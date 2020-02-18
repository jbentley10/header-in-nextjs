import React, { useState } from 'react';
import { useStaticKit, ValidationError } from '@statickit/react';
import { sendContactEmail } from '@statickit/functions';

const ContactForm = (props) => {
  const client = useStaticKit();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);
    let resp = await sendContactEmail(client, {
      subject: `${email} submitted the contact form`,
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
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="bg-dark-background text-white" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email" 
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <ValidationError 
        prefix="Email" 
        field="replyTo"
        errors={errors}
      />
      <textarea
        id="message"
        name="message" 
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;