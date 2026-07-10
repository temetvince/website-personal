/**
 * Contract for {@link Header}.
 *
 * Each item's `path` selects its rendering: paths beginning with `http`
 * render as external links that open in a new tab, paths beginning with `#`
 * render as same-page anchor links, and anything else renders as a
 * client-side router link. Labels must be unique — they are used as React
 * keys.
 */
export default interface HeaderProps {
  /** Site name shown at the left edge; links back to the top of the page. */
  readonly brand: string;
  /** Navigation links rendered in order. */
  readonly navItems: readonly {
    readonly label: string;
    readonly path: string;
  }[];
  /**
   * Optional emphasized call-to-action rendered after the nav links. Its
   * `path` follows the same rendering rules as `navItems`.
   */
  readonly cta?: {
    readonly label: string;
    readonly path: string;
  };
}
