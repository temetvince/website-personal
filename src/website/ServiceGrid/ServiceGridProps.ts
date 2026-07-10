/**
 * Contract for {@link ServiceGrid}.
 */
export default interface ServiceGridProps {
  /**
   * Services rendered as cards, in order. `iconPaths` holds SVG path data
   * drawn as line strokes on a 24×24 viewBox; each service's `title` must be
   * unique — it is used as the React key.
   */
  readonly services: readonly {
    readonly title: string;
    readonly description: string;
    readonly iconPaths: readonly string[];
  }[];
}
