import './ContactForm.css';

import {
  type SubmitEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import type ContactFormProps from './ContactFormProps';

/**
 * Where a submission stands. `idle` and `failed` both show the form; `failed`
 * adds the error notice. `sent` replaces the form with the success notice.
 */
type Status = 'failed' | 'idle' | 'sending' | 'sent';

/**
 * Contact form that submits in-page and reports the result where the visitor
 * is looking, instead of handing them to the endpoint's own result page.
 *
 * Name, email, and message are required by browser validation; company is
 * optional. A submission is delivered when the endpoint answers 2xx; on any
 * other outcome the form keeps what the visitor typed and shows the error
 * notice. Focus moves to whichever notice appears, so screen readers announce
 * it. A delivered submission cannot be repeated without remounting.
 */
export default function ContactForm(props: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const sentRef = useRef<HTMLOutputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status === 'sent' || status === 'failed') {
      (sentRef.current ?? errorRef.current)?.focus();
    }
  }, [status]);

  const { action } = props;
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      const body = new FormData(event.currentTarget);
      setStatus('sending');
      const deliver = async () => {
        try {
          const response = await fetch(action, {
            method: 'POST',
            body,
            headers: { Accept: 'application/json' },
          });
          setStatus(response.ok ? 'sent' : 'failed');
        } catch {
          setStatus('failed');
        }
      };
      void deliver();
    },
    [action],
  );

  if (status === 'sent') {
    return (
      <output
        className='contact-form-sent'
        tabIndex={-1}
        ref={sentRef}
      >
        {props.successMessage}
      </output>
    );
  }

  return (
    <form
      className='contact-form'
      action={props.action}
      method='POST'
      onSubmit={handleSubmit}
      aria-busy={status === 'sending'}
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
      {status === 'failed' && (
        <p
          className='contact-form-error'
          role='alert'
          tabIndex={-1}
          ref={errorRef}
        >
          {props.errorMessage}
        </p>
      )}
      <button
        type='submit'
        className='button button-primary'
        disabled={status === 'sending'}
      >
        {props.submitLabel}
      </button>
    </form>
  );
}
