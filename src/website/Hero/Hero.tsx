import './Hero.css';

import type HeroProps from './HeroProps';

/**
 * Full-width introduction banner: headline, subheadline, portrait photo, and
 * a pair of call-to-action links. Renders the page's only `h1`, so the
 * composing page must not render another.
 */
export default function Hero(props: HeroProps) {
  return (
    <section className='hero'>
      <div className='hero-inner'>
        <div className='hero-text'>
          <h1>{props.headline}</h1>
          <p className='hero-subheadline'>{props.subheadline}</p>
          <div className='hero-actions'>
            <a
              href={props.primaryCta.path}
              className='button button-primary'
            >
              {props.primaryCta.label}
            </a>
            <a
              href={props.secondaryCta.path}
              className='button button-secondary'
            >
              {props.secondaryCta.label}
            </a>
          </div>
          <p className='hero-note'>{props.note}</p>
        </div>
        <img
          src={props.photoSrc}
          alt={props.photoAlt}
          className='hero-photo'
        />
      </div>
    </section>
  );
}
