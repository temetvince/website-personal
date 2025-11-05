import React from 'react';
import './Home.css';
import profileImg from '../../../public/IMG_0081.JPG';
import Header from '../Header/Header';

const navItems = [
  {
    label: 'Resume',
    path: 'https://github.com/temetvince/Resume/blob/master/EmmettCaseyResume.pdf',
  },
  { label: 'GitHub', path: 'https://github.com/temetvince' },
  {
    label: 'YouTube',
    path: 'https://www.youtube.com/channel/UCw7tARIJee8gd1OpeSjAEMw',
  },
];

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <Header navItems={navItems} />
      <div className='home-header-container'>
        <div className='home-header'>
          {profileImg && (
            <img
              src={profileImg}
              alt='Emmett Casey'
              className='profile-img'
            />
          )}
          <div className='header-content'>
            <div className='header-text'>
              <h1>Emmett Casey</h1>
              <h2>
                Software Professional • Independent Contractor • Seeker of
                Truths
              </h2>
            </div>

            <p className='home-tagline'>
              Crafting code that endures, much like the pursuit of a meaningful
              life — blending <strong>Stoic discipline</strong> with{' '}
              <strong>Absurdist wonder</strong>. From{' '}
              <strong>improving client outcomes</strong> to pondering why
              there's something rather than nothing, I navigate complexity with
              curiosity and resolve.
            </p>
          </div>
        </div>
      </div>

      <div className='divider'>
        <section className='home-about'>
          <h3>Hello, I'm Emmett</h3>
          <p>
            My path in software began coding QBasic programs in high school,
            which led me to University and eventually a career managing both
            robust systems and high performing teams alike. A former associate
            of major industry players such as Garmin and Oracle, I bring a
            plethora of experience to the table. Today, as an independent
            contractor, I thrive on turning chaotic requirements into clean,
            effective solutions.
          </p>
          <p>
            Beyond the terminal, I'm drawn to the big questions — the absurdity
            of existence, the solace in fleeting moments under the stars, the
            tension between virtue and pragmatism. Awestruck by the scale of the
            universe, I find resonance in Buddhism's compassion, Stoicism's
            control over the self, and Camus' embrace of the absurd. These
            philosophies shape how I code, live, and connect.
          </p>
          <p>
            Whether engineering solutions for businesses or sharing insights on
            YouTube, I seek depth in the digital and the existential. Life's not
            about waiting for success; it's about choosing paths that foster
            growth, even amid chaos.
          </p>
          <div className='personal-note'>
            <em>
              In the face of an indifferent universe, I build, reflect, and
              strive to leave things better — codebases and conversations alike.
            </em>
          </div>
        </section>

        <section className='home-philosophy'>
          <h3>Guiding Principles</h3>
          <p className='philosophy-intro'>
            Inspired by timeless thinkers, these tenets guide my approach to
            work and life:
          </p>
          <ul className='philosophy-list'>
            <li>
              <strong>Strive for Excellence:</strong> The universe owes us
              nothing - we must earn our place through hard work and dedication.
              Always do your best.
            </li>
            <li>
              <strong>Stoic Resilience:</strong> Focus on what's in your
              control; let go of the rest. As Marcus Aurelius said, "You have
              power over your mind — not outside events."
            </li>
            <li>
              <strong>Buddhist Compassion:</strong> Kindness in collaboration,
              understanding in complexity — code reviews with empathy, life with
              patience.
            </li>
            <li>
              <strong>Seeker's Curiosity:</strong> Question why something exists
              over nothing, per Heidegger; apply that wonder to innovation and
              problem-solving.
            </li>
            <li>
              <strong>Authentic Growth:</strong> Confront uncomfortable truths
              for real progress, in software architectures or personal journeys.
            </li>
          </ul>
        </section>

        <section className='home-links'>
          <h3>Let’s Connect</h3>
          <ul className='links-list'>
            <li>
              <a
                href='https://github.com/temetvince/Resume/blob/master/EmmettCaseyResume.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                📄 Resume (PDF)
              </a>
            </li>
            <li>
              <a
                href='https://github.com/temetvince'
                target='_blank'
                rel='noopener noreferrer'
              >
                🐙 GitHub (@temetvince)
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/channel/UCw7tARIJee8gd1OpeSjAEMw'
                target='_blank'
                rel='noopener noreferrer'
              >
                🎥 YouTube Channel
              </a>
            </li>
            <li>
              <a
                href='https://x.com/temetvince'
                target='_blank'
                rel='noopener noreferrer'
              >
                🐦 X / Twitter
              </a>
            </li>
          </ul>
        </section>

        <section className='home-projects'>
          <h3>Fun Projects</h3>
          <div className='projects-grid'>
            <a
              href='https://temetvince.github.io/typescript-ecs/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-card'
            >
              <h4>TypeScript ECS</h4>
              <p>
                A lightweight framework for entity-component systems, perfect
                for games and simulations where structure meets flexibility.
              </p>
            </a>
            <a
              href='https://temetvince.github.io/particle-engine/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-card'
            >
              <h4>Particle Engine</h4>
              <p>
                Browser-based particle simulations — evoking the chaos and
                beauty of existence through code.
              </p>
            </a>
            <a
              href='https://temetvince.github.io/art-grid/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-card'
            >
              <h4>Art Grid</h4>
              <p>
                A drawing or painting tool utilizing a grid system for drawing
                individual subsections of an image, leading to greater overall
                accuracy.
              </p>
            </a>
            <a
              href='https://temetvince.github.io/wormhole-primer/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-card'
            >
              <h4>EVE Wormhole Primer</h4>
              <p>
                Navigating the unknown in EVE Online — a guide to wormhole
                mechanics, survival, and the thrill of discovery.
              </p>
            </a>
            <a
              href='https://github.com/temetvince/x4'
              target='_blank'
              rel='noopener noreferrer'
              className='project-card'
            >
              <h4>X4 Notes</h4>
              <p>
                Tips, tricks, and insights for Egosoft's X4: Foundations —
                enhancing your spacefaring adventures. Includes my favorite
                mods.
              </p>
            </a>
            <a
              href='https://github.com/temetvince/alaankwa'
              target='_blank'
              rel='noopener noreferrer'
              className='project-card'
            >
              <h4>Alaankwa</h4>
              <p>
                An "all but the kitchen sink" mod for Egosoft's X3: Albion
                Prelude and Litcube's Universe (LU) which enhances the game with
                new features, gamestarts, and bug fixes.
              </p>
            </a>
          </div>
        </section>
      </div>

      <footer className='home-footer'>
        <p>
          © {new Date().getFullYear()} Emmett Casey — Built with React,
          TypeScript, and philosophical introspection.
        </p>
        <p className='footer-note'>
          <em>"The unexamined life is not worth living." — Socrates</em>
        </p>
      </footer>
    </div>
  );
};

export default Home;
