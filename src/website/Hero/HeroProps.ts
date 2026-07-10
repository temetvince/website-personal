/**
 * Contract for {@link Hero}.
 *
 * The hero holds no copy of its own — every string here is supplied by the
 * composing page.
 */
export default interface HeroProps {
  /** Main headline, rendered as the page's only `h1`. */
  readonly headline: string;
  /** Supporting paragraph rendered beneath the headline. */
  readonly subheadline: string;
  /** Resolved image URL for the portrait photo. */
  readonly photoSrc: string;
  /** Alt text describing the portrait photo. */
  readonly photoAlt: string;
  /** Primary call-to-action link (e.g. an anchor to the contact section). */
  readonly primaryCta: {
    readonly label: string;
    readonly path: string;
  };
  /** Quieter secondary link rendered beside the primary call-to-action. */
  readonly secondaryCta: {
    readonly label: string;
    readonly path: string;
  };
  /** Short trailing line (e.g. location served), rendered small and muted. */
  readonly note: string;
}
