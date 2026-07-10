/**
 * Contract for {@link ContactForm}.
 */
export default interface ContactFormProps {
  /**
   * Form-handler endpoint the browser POSTs to (e.g. a Formspree form URL).
   * Submission is a plain HTML form post: the endpoint receives the fields
   * `name`, `email`, `company`, and `message`, and is responsible for the
   * post-submit page the visitor lands on.
   */
  readonly action: string;
  /** Value sent as Formspree's `_subject` field on each submission. */
  readonly subject: string;
  /** Text shown on the submit button. */
  readonly submitLabel: string;
}
