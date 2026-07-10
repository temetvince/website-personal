export default interface HeaderProps {
  readonly className?: string;
  readonly navItems: readonly {
    readonly label: string;
    readonly path: string;
  }[];
}
