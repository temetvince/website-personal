/**
 * All copy and section data for the {@link Home} page, kept apart from the
 * markup so the page file stays purely compositional. Everything is exported
 * `as const`: deeply readonly, matching the readonly props contracts of the
 * presentational components.
 */

/**
 * Formspree endpoint the contact form posts to. The form ID belongs to
 * Emmett's Formspree account; the README's "Contact form" section describes
 * where submissions go and how to change the destination.
 */
export const contactFormAction = 'https://formspree.io/f/xzezgqrp';

/** Confirmation shown in place of the contact form once a message is sent. */
export const contactFormSuccess =
  "Thanks — your message is on its way. I read every one myself, and I'll be in touch soon.";

/** Notice shown above the submit button when a message could not be sent. */
export const contactFormError =
  "Something went wrong and your message wasn't sent. Please try again in a moment.";

/** Name set in display type across the top of the page. */
export const mastheadTitle = 'Emmett Casey';

/** Standing tagline printed beneath the masthead title. */
export const mastheadTagline =
  'Custom Software · Integrations · Technical Leadership';

/**
 * Dateline entries beneath the masthead, distributed left, center, and right.
 * Every entry is a standing fact, not a dated one — nothing here needs
 * maintaining as time passes.
 */
export const dateline = [
  'Joplin, Missouri',
  'Serving the Four-State Region',
  'Now Booking Discovery Calls',
] as const;

/** Cutline printed beneath the hero portrait. */
export const heroPhotoCaption = 'Emmett Casey — Joplin, Missouri';

/**
 * A line lifted verbatim from the closing paragraph of the story and set as a
 * pull quote. Keep it identical to the sentence it quotes — a pull quote that
 * paraphrases its own article is a mistake, not a flourish.
 */
export const pullQuote =
  "I listen first, build what's needed, write it down, and leave your team better than I found it.";

/** Standing sidebar printed beside the story, in display order. */
export const factBox = [
  { label: 'Based in', value: 'Joplin, Missouri' },
  {
    label: 'Education',
    value:
      'B.S. Computer Science, minor in Mathematics — University of Arkansas',
  },
  {
    label: 'Previously',
    value: 'Garmin · Cerner · Oracle · Artisan Technology Group',
  },
  {
    label: 'Practice',
    value:
      'Custom software, integrations, cloud, and technical leadership for Midwest businesses',
  },
  { label: 'Availability', value: 'Booking discovery calls' },
] as const;

/** Anchor links for the sticky header, in display order. */
export const navItems = [
  { label: 'About', path: '#about' },
  { label: 'Services', path: '#services' },
  { label: 'Approach', path: '#approach' },
  { label: 'Experience', path: '#experience' },
  { label: 'Contact', path: '#contact' },
] as const;

/** Call-to-action button in the sticky header. */
export const headerCta = {
  label: 'Schedule a Call',
  path: '#contact',
} as const;

/** Primary hero call-to-action, pointing at the contact section. */
export const heroPrimaryCta = {
  label: 'Schedule a Discovery Call',
  path: '#contact',
} as const;

/** Secondary hero link, pointing at the services section. */
export const heroSecondaryCta = {
  label: 'See How I Can Help',
  path: '#services',
} as const;

/** Hero subheadline paragraph. */
export const heroSubheadline =
  "I'm Emmett Casey. I help businesses in Joplin and across the Midwest build the software they actually need — custom tools, integrations, cloud, and technical leadership — with the standards I honed at Garmin, Cerner, and Oracle, and none of the big-firm overhead.";

/** Past employers shown in the credibility strip, in display order. */
export const companies = [
  'Garmin',
  'Cerner',
  'Oracle',
  'Artisan Technology Group',
] as const;

/** Service offerings for the "How I Can Help" grid, in display order. */
export const services = [
  {
    title: 'Custom Internal Tools & Dashboards',
    description:
      "Replace the spreadsheet that's held together with hope. I build job trackers, dashboards, and internal apps that fit the way your operation actually works — not the way an off-the-shelf product assumes it does.",
    iconPaths: ['M3 5h18v11H3z', 'M12 16v4', 'M8 20h8', 'M7 12l3-3 2 2 4-4.5'],
  },
  {
    title: 'Integrations & Automation',
    description:
      "Your systems should talk to each other. I connect what you already have — ERP, e-commerce, scheduling, accounting — and automate the reports and re-typing that eat someone's Monday.",
    iconPaths: ['M4 7h13', 'M14 4l3 3-3 3', 'M20 17H7', 'M10 14l-3 3 3 3'],
  },
  {
    title: 'Cloud Solutions',
    description:
      "Practical AWS and Azure work: hosting, migrations, backups, and cost cleanup. Right-sized for your budget, not a Fortune 500's.",
    iconPaths: ['M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z'],
  },
  {
    title: 'Legacy System Modernization',
    description:
      "That critical system nobody dares touch? I've untangled worse. I modernize incrementally, so the business keeps running while the risk comes down.",
    iconPaths: [
      'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8',
      'M3 3v5h5',
      'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16',
      'M21 21v-5h-5',
    ],
  },
  {
    title: 'Technical Leadership & Mentoring',
    description:
      'A fractional engineering leader for your team: honest code reviews, hiring help, processes that fit your size, and mentoring from someone who has taught hundreds of engineers.',
    iconPaths: [
      'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
      'M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
      'M22 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
  },
  {
    title: 'Discovery & Architecture Consulting',
    description:
      "Not sure what you need, or whether a vendor's quote is fair? I'll assess your situation and hand you a clear, honest plan — one you can execute with me or without me.",
    iconPaths: [
      'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
      'M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z',
    ],
  },
] as const;

/** Process steps for the "My Approach" section, in order. */
export const approachSteps = [
  {
    title: 'Listen first',
    description:
      'We start with your operation, not my toolbox. Before I propose anything, I want to understand how the work actually flows and where it hurts.',
  },
  {
    title: 'Right-size the solution',
    description:
      "The best answer is the simplest one that solves the problem and holds up. Sometimes that's custom software. Sometimes it's a configuration change and a shorter invoice. I'll tell you either way.",
  },
  {
    title: 'Build in the open',
    description:
      "Regular demos, plain-English updates, and no surprises on scope or cost. You'll always know where things stand.",
  },
  {
    title: 'Hand over the keys',
    description:
      "Documentation, training, and knowledge transfer are part of the job, not an add-on. You own the result — you're never locked into me.",
  },
] as const;

/** Career highlights for the "Experience" section, in display order. */
export const highlights = [
  {
    org: 'Garmin',
    role: 'Team Lead',
    text: 'Led a software team end to end: planning the work, growing the engineers, managing performance honestly across the whole spectrum, and making the call when priorities collided.',
  },
  {
    org: 'Cerner',
    role: 'Software Engineer & Instructor',
    text: 'Built healthcare software and taught software engineering to hundreds of new engineers — turning classroom concepts into production habits.',
  },
  {
    org: "Children's National · Oracle",
    role: 'Senior Software Engineer',
    text: "Shipped clinical software into production at a children's hospital through the Oracle Bear Institute of Technology — a regulated environment where reliability is non-negotiable.",
  },
  {
    org: 'Artisan Technology Group',
    role: 'Senior Engineer & Engineering Manager',
    text: 'Consulted for clients while co-managing the engineering team: scoping work, delivering it, and building the documentation and onboarding that helped the team scale.',
  },
  {
    org: 'Across every role',
    role: 'Production Operations',
    text: "Handled critical outages under pressure: diagnosing the failure, coordinating the response, communicating plainly, and following through so it doesn't repeat.",
  },
  {
    org: 'Across every role',
    role: 'Technical Breadth',
    text: 'Full-stack development with React, Java, and C#; cloud on AWS and Azure; integrations, data pipelines, middleware, and mobile.',
  },
] as const;

/** Trust signals for the "Why Work With Me" grid, in display order. */
export const trustSignals = [
  {
    title: 'Standards from high-stakes environments',
    text: 'I learned my craft where failure meant more than a bad quarter — healthcare systems, navigation devices, production outages in the middle of the night. Your project gets that same discipline.',
  },
  {
    title: 'Real leadership experience',
    text: "I've managed teams, mentored hundreds of engineers, and had the hard conversations. I can lead your project, or make your existing team stronger.",
  },
  {
    title: "Communication you don't have to decode",
    text: "Plain English, honest estimates, and regular updates. If something's off track, you'll hear it from me first — early, not after the deadline.",
  },
  {
    title: 'Built to be maintained',
    text: "Everything I deliver comes with documentation and knowledge transfer. If you can't run it without me, I haven't finished the job.",
  },
  {
    title: 'Midwest practical',
    text: "I'm local, I answer my phone, and I'll tell you when you don't need what you're about to pay for. Straightforward is cheaper for both of us.",
  },
] as const;
