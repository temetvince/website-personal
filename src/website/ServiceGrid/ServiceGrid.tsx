import './ServiceGrid.css';

import type ServiceGridProps from './ServiceGridProps';

/**
 * Responsive grid of service cards, each with a line icon, headline, and
 * passage. Icons are decorative and hidden from assistive technology; the
 * headline carries the meaning.
 */
export default function ServiceGrid(props: ServiceGridProps) {
  return (
    <div className='card-grid'>
      {props.services.map((service) => (
        <article
          key={service.title}
          className='card'
        >
          <svg
            className='service-icon'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.75'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            {service.iconPaths.map((d) => (
              <path
                key={d}
                d={d}
              />
            ))}
          </svg>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}
