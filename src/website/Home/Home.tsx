import './Home.css';

import { Fragment } from 'react';

import profileImg from '../../assets/portrait.jpg';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Masthead from '../Masthead/Masthead';
import ServiceGrid from '../ServiceGrid/ServiceGrid';
import * as content from './HomeContent';

/**
 * The complete landing page for elcasey.com, set as a newspaper front page:
 * masthead, lead story, credibility strip, story, services, approach,
 * experience highlights, trust signals, and contact form. All copy and
 * section data come from {@link module:HomeContent} and are passed down to
 * purely presentational components; this module only composes.
 *
 * Sections alternate between the base and `section-alt` backgrounds. Adding
 * or removing one means re-checking that no two `section-alt` bands end up
 * adjacent, which would erase the boundary between them.
 */
export default function Home() {
  return (
    <div id='top'>
      <a
        href='#main'
        className='skip-link'
      >
        Skip to content
      </a>
      <Header
        brand='Emmett Casey'
        navItems={content.navItems}
        cta={content.headerCta}
      />
      <main
        id='main'
        tabIndex={-1}
      >
        <Masthead
          title={content.mastheadTitle}
          tagline={content.mastheadTagline}
          dateline={content.dateline}
        />

        <Hero
          headline='Big-league experience. Midwest practicality.'
          subheadline={content.heroSubheadline}
          photoSrc={profileImg}
          photoAlt='Emmett Casey'
          photoCaption={content.heroPhotoCaption}
          primaryCta={content.heroPrimaryCta}
          secondaryCta={content.heroSecondaryCta}
          note='Based in Joplin, Missouri · Serving the four-state region and beyond'
        />

        <div className='credibility'>
          <p className='credibility-label'>Experience earned at</p>
          <ul className='credibility-list'>
            {content.companies.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </div>

        <section
          id='about'
          className='section'
        >
          <div className='section-inner'>
            <h2>My Story</h2>
            <p className='byline'>By Emmett Casey</p>
            <div className='story'>
              <div className='story-main prose'>
                <p>
                  I've spent my career building software where the stakes are
                  high. I led a team at Garmin. I engineered and taught at
                  Cerner, where I helped train hundreds of new software
                  engineers. I built clinical software for Children's National
                  Hospital through the Oracle Bear Institute of Technology. And
                  I consulted for clients at Artisan Technology Group as a
                  senior engineer and engineering manager.
                </p>
                <p>
                  Those places taught me what good engineering actually looks
                  like: systems that hold up in production, decisions that get
                  written down, and teams that communicate clearly — because in
                  a hospital, "it mostly works" isn't good enough.
                </p>
                <p>
                  In 2024 I stepped away from full-time work to care for my
                  grandfather during his final months. It was the most important
                  work I've ever done, and it settled what I want the next
                  chapter to be: doing genuinely useful work for people close to
                  home.
                </p>
                <blockquote className='pull-quote'>
                  <p>{content.pullQuote}</p>
                </blockquote>
                <p>
                  That's what this practice is. I bring the rigor of the big
                  organizations to the businesses that keep this region running
                  — without the bureaucracy, the buzzwords, or the
                  over-engineering. I listen first, build what's needed, write
                  it down, and leave your team better than I found it.
                </p>
              </div>
              <aside className='card story-aside'>
                <h3>At a Glance</h3>
                <dl>
                  {content.factBox.map((fact) => (
                    <Fragment key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </Fragment>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section
          id='services'
          className='section section-alt'
        >
          <div className='section-inner'>
            <h2>How I Can Help</h2>
            <p className='section-lede'>
              If it involves software and it matters to your operation, it's
              probably in scope. These are the most common ways I help:
            </p>
            <ServiceGrid services={content.services} />
          </div>
        </section>

        <section
          id='approach'
          className='section'
        >
          <div className='section-inner'>
            <h2>My Approach</h2>
            <p className='section-lede'>
              No mystery, no jargon — the same four steps on every engagement.
            </p>
            <ol className='card-grid approach-steps'>
              {content.approachSteps.map((step, index) => (
                <li
                  key={step.title}
                  className='card'
                >
                  <p className='eyebrow'>No. {index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id='experience'
          className='section section-alt'
        >
          <div className='section-inner'>
            <h2>Experience Highlights</h2>
            <p className='section-lede'>The roles that shaped how I work.</p>
            <div className='card-grid'>
              {content.highlights.map((highlight) => (
                <article
                  key={highlight.org + highlight.role}
                  className='card'
                >
                  <p className='eyebrow'>{highlight.org}</p>
                  <h3>{highlight.role}</h3>
                  <p>{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='why'
          className='section'
        >
          <div className='section-inner'>
            <h2>Why Work With Me</h2>
            <p className='section-lede'>
              What you can count on when you hire me.
            </p>
            <div className='card-grid'>
              {content.trustSignals.map((signal) => (
                <article
                  key={signal.title}
                  className='card'
                >
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='section section-alt'
        >
          <div className='section-inner'>
            <h2>Let's Talk About What You're Working On</h2>
            <p className='section-lede contact-lede'>
              A discovery call is a free, no-pressure conversation about your
              situation — what's working, what isn't, and whether I can help. If
              I'm not the right fit, I'll say so and point you somewhere better.
            </p>
            <ContactForm
              action={content.contactFormAction}
              subject='New inquiry from elcasey.com'
              submitLabel='Send Message'
              successMessage={content.contactFormSuccess}
              errorMessage={content.contactFormError}
            />
          </div>
        </section>
      </main>

      <footer className='site-footer'>
        <div className='site-footer-inner'>
          <p>© {new Date().getFullYear()} Emmett Casey — Joplin, Missouri</p>
          <p>Amateur radio operator KI5SPL</p>
        </div>
      </footer>
    </div>
  );
}
