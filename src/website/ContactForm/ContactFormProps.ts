/**
 * Contract for {@link ContactForm}.
 */
export default interface ContactFormProps {
  /**
   * Endpoint the form is POSTed to as `multipart/form-data` with the fields
   * `name`, `email`, `company`, `message`, and `_subject`. The request is
   * made in-page with an `Accept: application/json` header, so the visitor
   * never leaves the site. Any 2xx response counts as delivered; anything
   * else, including a network failure, counts as not delivered.
   */
  readonly action: string;
  /** Value sent as Formspree's `_subject` field on each submission. */
  readonly subject: string;
  /** Text shown on the submit button. */
  readonly submitLabel: string;
  /**
   * Passage shown in place of the form once a submission is delivered. Focus
   * moves to it, so it should read as a complete confirmation on its own.
   */
  readonly successMessage: string;
  /**
   * Passage shown above the button when a submission is not delivered. The
   * form and everything the visitor typed stay in place, so this should
   * invite them to try again.
   */
  readonly errorMessage: string;
}
