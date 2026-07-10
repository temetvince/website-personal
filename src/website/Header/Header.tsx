import './Header.css';

import { Link } from 'react-router-dom';
import type HeaderProps from './HeaderProps';

/**
 * Sticky site header with brand, navigation links, and an optional
 * call-to-action button. Purely presentational: all labels and destinations
 * come from props, and path prefixes decide the link element used (see
 * {@link HeaderProps}).
 */
export default function Header(props: HeaderProps) {
  return (
    <header className='site-header'>
      <a
        href='#top'
        className='site-header-brand'
      >
        {props.brand}
      </a>
      <nav
        className='site-header-nav'
        aria-label='Main'
      >
        {props.navItems.map((item) =>
          item.path.startsWith('http') ?
            <a
              key={item.label}
              href={item.path}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.label}
            </a>
          : item.path.startsWith('#') ?
            <a
              key={item.label}
              href={item.path}
            >
              {item.label}
            </a>
          : <Link
              key={item.label}
              to={item.path}
            >
              {item.label}
            </Link>,
        )}
        {props.cta && (
          <a
            href={props.cta.path}
            className='button button-primary site-header-cta'
          >
            {props.cta.label}
          </a>
        )}
      </nav>
    </header>
  );
}
