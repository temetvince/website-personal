import './ContactForm.css';

import type ContactFormProps from './ContactFormProps';

/**
 * Contact form that submits as a plain HTML POST — no JavaScript state, so it
 * works even if the bundle's interactivity fails. Name, email, and message
 * are required by browser validation; company is optional.
 */
export default function ContactForm(props: ContactFormProps) {
  return (
    <form
      className='contact-form'
      action={props.action}
      method='POST'
    >
      <input
        type='hidden'
        name='_subject'
        value={props.subject}
      />
      <div className='contact-form-row'>
        <div className='contact-form-field'>
          <label htmlFor='contact-name'>Name</label>
          <input
            id='contact-name'
            name='name'
            type='text'
            autoComplete='name'
            required
          />
        </div>
        <div className='contact-form-field'>
          <label htmlFor='contact-email'>Email</label>
          <input
            id='contact-email'
            name='email'
            type='email'
            autoComplete='email'
            required
          />
        </div>
      </div>
      <div className='contact-form-field'>
        <label htmlFor='contact-company'>Company (optional)</label>
        <input
          id='contact-company'
          name='company'
          type='text'
          autoComplete='organization'
        />
      </div>
      <div className='contact-form-field'>
        <label htmlFor='contact-message'>What can I help with?</label>
        <textarea
          id='contact-message'
          name='message'
          rows={5}
          required
        />
      </div>
      <button
        type='submit'
        className='button button-primary'
      >
        {props.submitLabel}
      </button>
    </form>
  );
}
