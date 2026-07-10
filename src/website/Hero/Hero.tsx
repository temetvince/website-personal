import './Hero.css';

import type HeroProps from './HeroProps';

/**
 * The front-page lead: a centered headline, a deck, a captioned portrait, and
 * a pair of call-to-action links. Renders the page's only `h1`, so the
 * composing page must not render another.
 */
export default function Hero(props: HeroProps) {
  return (
    <section className='hero'>
      <div className='hero-inner'>
        <h1>{props.headline}</h1>
        <div className='hero-body'>
          <div className='hero-text'>
            <p className='hero-deck'>{props.subheadline}</p>
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
          <figure className='hero-figure'>
            <img
              src={props.photoSrc}
              alt={props.photoAlt}
              className='hero-photo'
            />
            <figcaption>{props.photoCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
