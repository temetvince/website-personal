/**
 * Contract for {@link Masthead}.
 */
export default interface MastheadProps {
  /** The name set in large display type across the top of the page. */
  readonly title: string;
  /** Single line of standing copy beneath the title. */
  readonly tagline: string;
  /**
   * Dateline entries, spread across the rule beneath the title. Supply
   * exactly three for the intended left/center/right distribution; more will
   * space evenly but crowd. Each entry must be unique — entries are used as
   * React keys.
   */
  readonly dateline: readonly string[];
}
