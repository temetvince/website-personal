import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';
import HeaderProps from './HeaderProps';

export default function Header(props: HeaderProps) {
  return (
    <header className={props.className || ''}>
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
        : <Link
            key={item.label}
            to={item.path}
          >
            {item.label}
          </Link>,
      )}
    </header>
  );
}
