import './Masthead.css';

import type MastheadProps from './MastheadProps';

/**
 * The nameplate across the top of the page: title, standing tagline, and a
 * dateline rule.
 *
 * The title is deliberately not a heading element. It repeats the site name
 * already carried by the header brand and the footer, and the page's single
 * `h1` belongs to the hero's headline, where the value proposition lives.
 * Promoting this to an `h1` would give the document two competing ones.
 */
export default function Masthead(props: MastheadProps) {
  return (
    <div className='masthead'>
      <div className='masthead-inner'>
        <p className='masthead-title'>{props.title}</p>
        <p className='masthead-tagline'>{props.tagline}</p>
        <ul className='masthead-dateline'>
          {props.dateline.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
