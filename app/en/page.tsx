'use client';

import type { Metadata } from 'next';
import Image from 'next/image';

const serviceAreas = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Google Business Profile Optimization',
    desc: 'We optimize your categories, descriptions, photos, and hours to align with Google\'s ranking algorithm.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Review Acquisition Strategy',
    desc: 'QR code placement, incentive design, and reply templates. Build a lasting review asset that compounds over time.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: 'Multilingual MEO',
    desc: 'Profile optimization in English, Chinese, and Korean to capture inbound visitors actively searching for dining.',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'On-Site Review Operations',
    desc: 'Staff training, verbal prompts, and QR flow design built into your daily operations for consistent review growth.',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Google Posts & Content Management',
    desc: '2–4 posts per month covering new menus, events, and announcements to maintain and improve your algorithm score.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Competitor Analysis & Monthly Reports',
    desc: 'Monthly tracking of impressions, directions, and call clicks — with side-by-side competitor comparisons.',
  },
];

const roadmap = [
  {
    month: 'Month 1',
    label: 'Foundation',
    desc: 'QR codes placed, incentives designed, Google Business Profile optimized. First reviews begin coming in.',
    active: true,
  },
  {
    month: 'Month 2',
    label: 'Momentum',
    desc: 'Review count grows. Map visibility improves. Posts and replies enter a continuous improvement cycle.',
    active: false,
  },
  {
    month: 'Month 3',
    label: 'Validation',
    desc: 'Ranking improvements confirmed. A full 3-month performance report gives you the data to decide what\'s next.',
    active: false,
  },
  {
    month: 'Month 4+',
    label: 'Compounding Growth',
    desc: 'Reviews keep accumulating. A permanent customer acquisition asset — new visitors arrive naturally, every month.',
    active: false,
  },
];

const plans = [
  {
    name: 'Entry',
    price: '19,800',
    description: 'For restaurants taking their first steps in MEO',
    features: [
      'Google Business Profile optimization',
      'Basic information & photo setup',
      'QR code creation & placement support',
      'Monthly performance report',
      'Email support',
    ],
    recommended: false,
  },
  {
    name: 'Standard',
    price: '29,800',
    description: 'For restaurants ready to seriously grow foot traffic',
    features: [
      'Everything in Entry',
      'Incentive design & campaign execution',
      'Google Posts management (4×/month)',
      'Review reply management',
      'Competitor analysis report',
      'Monthly online strategy session',
    ],
    recommended: true,
  },
  {
    name: 'Premium',
    price: '69,800',
    description: 'For restaurants aiming to be #1 in their area',
    features: [
      'Everything in Standard',
      'Multilingual MEO (EN / ZH / KO)',
      'On-site review operation design',
      'Staff training & script provision',
      'Posts management (2×/week)',
      'Dedicated account manager',
    ],
    recommended: false,
  },
];

const voices = [
  {
    name: 'Mr. Tanaka',
    store: 'Izakaya / Shibuya, Tokyo',
    rating: 5,
    text: 'Within two months we broke into the top 3 on Maps for "Shibuya izakaya." Phone inquiries jumped noticeably and weekend reservations started filling up. The detailed coaching on how to ask guests for reviews made all the difference.',
  },
  {
    name: 'Ms. Suzuki',
    store: 'Café / Yokohama, Kanagawa',
    rating: 5,
    text: 'I had never paid attention to Google Maps, but simply cleaning up our profile changed foot traffic. The advice on photo selection and posting timing helped us build something we can maintain ourselves.',
  },
  {
    name: 'Mr. Yamamoto',
    store: 'Yakiniku / Umeda, Osaka',
    rating: 5,
    text: 'Our review count more than doubled in three months. I didn\'t expect a QR code and a simple ask to move the needle this much. The monthly report makes it clear what\'s working, so I can trust the process.',
  },
  {
    name: 'Ms. Ito',
    store: 'Bar / Shinjuku, Tokyo',
    rating: 5,
    text: 'The multilingual optimization brought in noticeably more international guests. That was exactly the gap I needed filled — handling English, Chinese, and Korean profiles myself would have been impossible.',
  },
];

export default function HomeEn() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b" style={{ borderColor: '#E5E5E5' }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="https://meo.platanus-p.com/en/">
            <Image src="/logo.webp" alt="Platanus Planning" width={160} height={17} priority />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#about', label: 'What is MEO' },
              { href: '#service', label: 'Services' },
              { href: '#tactics', label: 'Approach' },
              { href: '#plans', label: 'Pricing' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest transition-colors"
                style={{ color: '#888' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://meo.platanus-p.com/"
              className="text-xs tracking-widest transition-colors"
              style={{ color: '#888' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
            >
              日本語
            </a>
          </nav>
          <a
            href="https://platanus-p.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-xs tracking-widest px-5 py-2 text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#3DBFB0' }}
          >
            Free Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg pt-14 min-h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-0">

            {/* Left: Text */}
            <div className="w-full md:w-[480px] flex-shrink-0 md:pr-8 z-10">

              {/* Label */}
              <p className="text-xs tracking-widest mb-4" style={{ color: '#666' }}>
                RESTAURANT-FOCUSED MAP ENGINE OPTIMIZATION
              </p>

              {/* Main Copy */}
              <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6 tracking-tight">
                Dining bars, izakayas, cafés…<br />
                <span style={{ color: '#3DBFB0' }}>Bring customers in</span><br />
                through Google Maps.
              </h1>

              <p className="text-sm leading-loose mb-4 max-w-md" style={{ color: '#AAAAAA' }}>
                Restaurant-focused MEO services to reach the top of local search.<br />
                We build a customer acquisition asset that keeps working for you.
              </p>
              <p className="text-sm leading-loose mb-8" style={{ color: '#555' }}>
                Ads stop when you stop paying. Reviews compound forever.
              </p>

              {/* Genre Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['Dining Bar', 'Izakaya', 'Café', 'Yakiniku', 'Sushi / Japanese', 'Italian', 'Yakitori', 'All Restaurant Types'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 border tracking-wide"
                    style={{ borderColor: '#3a3a3a', color: '#777' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-3 mb-12">
                <a
                  href="https://platanus-p.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-4 text-white text-sm tracking-wider text-center whitespace-nowrap transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#3DBFB0' }}
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#about"
                  className="inline-block px-6 py-4 text-sm tracking-wider text-center whitespace-nowrap border transition-colors"
                  style={{ borderColor: '#555', color: '#AAAAAA' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#3DBFB0';
                    e.currentTarget.style.color = '#3DBFB0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#555';
                    e.currentTarget.style.color = '#AAAAAA';
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div
              className="flex-1 mt-10 md:mt-0 flex items-center justify-center md:justify-end"
              style={{ filter: 'drop-shadow(0 0 64px rgba(61,191,176,0.15))' }}
            >
              <Image
                src="/main-visual.png"
                alt="Google Maps MEO Optimization"
                width={1200}
                height={900}
                priority
                className="w-full h-auto max-w-[1200px] select-none"
                style={{ mixBlendMode: 'screen', opacity: 0.93 }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* What is MEO */}
      <section id="about" className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>WHAT IS MEO</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>What is MEO?</h2>
            <div className="section-divider"></div>
            <p className="text-sm leading-loose max-w-xl mx-auto" style={{ color: '#888' }}>
              MEO (Map Engine Optimization) is the practice of optimizing your presence on Google Maps.
              By ranking higher in local searches, you reach high-intent customers at the exact moment they decide where to go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border mb-12" style={{ borderColor: '#E5E5E5' }}>
            {[
              {
                step: '01',
                title: 'Search',
                desc: 'A user searches "Shibuya ramen" or "Shinjuku izakaya" — a location plus a category.',
              },
              {
                step: '02',
                title: 'Google Maps Appears',
                desc: 'A map pack appears at the top of results. The top 3 listings (MAP3) get the most visibility and clicks.',
              },
              {
                step: '03',
                title: 'Visit',
                desc: 'Directions, calls, and reservations happen directly from Maps — faster conversions than SEO.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 border-b md:border-b-0 md:border-r last:border-r-0"
                style={{ borderColor: '#E5E5E5' }}
              >
                <p className="text-4xl font-light mb-4" style={{ color: '#3DBFB0' }}>{item.step}</p>
                <h3 className="text-base font-medium mb-3" style={{ color: '#333' }}>{item.title}</h3>
                <p className="text-sm leading-loose" style={{ color: '#888' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Ads vs Reviews */}
          <h3 className="text-center text-base font-medium mb-8" style={{ color: '#333' }}>
            Why reviews — not ads?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: '#E5E5E5' }}>
            <div className="bg-white p-10">
              <p className="text-xs tracking-widest mb-4" style={{ color: '#888' }}>TRADITIONAL ADVERTISING</p>
              <p className="text-2xl font-light mb-6" style={{ color: '#333' }}>Ads = <span style={{ color: '#e05a5a' }}>Expense</span></p>
              <ul className="space-y-3">
                {[
                  'Stop paying → stop getting customers',
                  'Monthly ad spend strains operations',
                  'Cost with no lasting asset',
                  'Temporary results only',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full border" style={{ borderColor: '#ddd' }}>
                      <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none">
                        <path d="M2 4h4" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-sm" style={{ color: '#888' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10" style={{ borderTop: '3px solid #3DBFB0' }}>
              <p className="text-xs tracking-widest mb-4" style={{ color: '#3DBFB0' }}>REVIEW STRATEGY</p>
              <p className="text-2xl font-light mb-6" style={{ color: '#333' }}>Reviews = <span style={{ color: '#3DBFB0' }}>Investment</span></p>
              <ul className="space-y-3">
                {[
                  'Reviews accumulate — rankings keep rising',
                  'Zero ad spend needed for ongoing traffic',
                  'Reviews are a permanent acquisition asset',
                  'Compounding effect grows over time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="#3DBFB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm" style={{ color: '#555' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service" className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>SERVICE AREAS</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>What We Cover</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              Every aspect of Google Maps optimization — handled end to end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8"
                style={item.highlight
                  ? { borderTop: '3px solid #3DBFB0' }
                  : { borderTop: '3px solid #E5E5E5' }
                }
              >
                <div className="mb-4" style={{ color: item.highlight ? '#3DBFB0' : '#888' }}>
                  {item.icon}
                </div>
                <h3
                  className="text-sm font-medium mb-3 leading-snug"
                  style={{ color: item.highlight ? '#3DBFB0' : '#333' }}
                >
                  {item.title}
                  {item.highlight && (
                    <span
                      className="ml-2 text-xs px-2 py-0.5 align-middle"
                      style={{ backgroundColor: '#3DBFB0', color: '#fff', fontSize: '10px' }}
                    >
                      Signature
                    </span>
                  )}
                </h3>
                <p className="text-xs leading-loose" style={{ color: '#888' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>ROADMAP</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>Growth Roadmap</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              Review campaigns launch within 2 weeks of sign-up. Measurable results within 3 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ backgroundColor: '#E5E5E5' }}>
            {roadmap.map((item, i) => (
              <div key={i} className="bg-white p-8" style={i === 0 ? { borderTop: '3px solid #3DBFB0' } : {}}>
                <p className="text-xs tracking-widest mb-2" style={{ color: i === 0 ? '#3DBFB0' : '#888' }}>{item.month}</p>
                <h3 className="text-base font-medium mb-4" style={{ color: '#333' }}>{item.label}</h3>
                <p className="text-xs leading-loose" style={{ color: '#888' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Expected Results */}
          <div className="mt-12 p-10 text-center" style={{ backgroundColor: '#1e2e2d' }}>
            <p className="text-xs tracking-widest mb-8" style={{ color: '#3DBFB0' }}>EXPECTED RESULTS</p>
            <p className="text-sm mb-8" style={{ color: '#aaa' }}>
              Projected figures for a restaurant with 100 monthly guests at ¥5,000 average spend (from Month 3 onward)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '+15 guests/mo', label: 'New monthly visitors (from Month 3)' },
                { value: '¥225,000', label: 'Estimated 3-month revenue increase' },
                { value: '×2.4', label: 'Average impression growth rate' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-3xl font-light mb-2" style={{ color: '#3DBFB0' }}>{item.value}</p>
                  <p className="text-xs" style={{ color: '#666' }}>{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-8" style={{ color: '#555' }}>
              * Projected values. Actual results vary by location, category, and existing review count.
            </p>
          </div>
        </div>
      </section>

      {/* User Voices */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>USER VOICE</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>What Our Clients Say</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {voices.map((v, i) => (
              <div key={i} className="p-8 border" style={{ borderColor: '#E5E5E5' }}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4" viewBox="0 0 16 16" fill="#3DBFB0">
                      <path d="M8 1l2.163 4.38 4.837.703-3.5 3.411.826 4.815L8 12l-4.326 2.309.826-4.815L1 6.083l4.837-.703z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-loose mb-6" style={{ color: '#555' }}>
                  &ldquo;{v.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#F0F0F0' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                    style={{ backgroundColor: '#3DBFB0' }}
                  >
                    {v.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#333' }}>{v.name}</p>
                    <p className="text-xs" style={{ color: '#aaa' }}>{v.store}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mt-10 py-8 text-center border-t border-b" style={{ borderColor: '#E5E5E5' }}>
            <p className="text-xs tracking-widest mb-3" style={{ color: '#aaa' }}>OVERALL SATISFACTION</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-6 h-6" viewBox="0 0 16 16" fill="#3DBFB0">
                    <path d="M8 1l2.163 4.38 4.837.703-3.5 3.411.826 4.815L8 12l-4.326 2.309.826-4.815L1 6.083l4.837-.703z"/>
                  </svg>
                ))}
              </div>
              <p className="text-3xl font-light" style={{ color: '#333' }}>4.9 <span className="text-base" style={{ color: '#aaa' }}>/ 5.0</span></p>
            </div>
            <p className="text-xs mt-2" style={{ color: '#aaa' }}>* Based on a client satisfaction survey (n=52)</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>PRICING</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>Plans & Pricing</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              No setup fees. No cancellation penalties. Start with a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`plan-card bg-white flex flex-col ${plan.recommended ? 'relative' : ''}`}
                style={plan.recommended ? { border: '2px solid #3DBFB0' } : { border: '1px solid #E5E5E5' }}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-white text-xs px-4 py-1 tracking-widest" style={{ backgroundColor: '#3DBFB0' }}>
                      Recommended
                    </span>
                  </div>
                )}
                <div className="p-8 border-b" style={{ borderColor: '#E5E5E5' }}>
                  <h3 className="text-sm font-medium tracking-wider mb-1" style={{ color: '#333' }}>
                    {plan.name}
                  </h3>
                  <p className="text-xs mb-5" style={{ color: '#888' }}>{plan.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-light" style={{ color: '#333' }}>¥{plan.price}</span>
                    <span className="text-xs mb-1" style={{ color: '#888' }}>/month (excl. tax)</span>
                  </div>
                </div>
                <ul className="p-8 space-y-3 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 4" stroke="#3DBFB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm" style={{ color: '#555' }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: '#aaa' }}>
            * Plans can be customized to fit your needs. Feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>CONTACT</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>Free Consultation & Enquiries</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              Tell us about your current situation and goals. We will recommend the right plan for you.
            </p>
          </div>
          <div className="text-center py-8">
            <a
              href="https://platanus-p.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 text-white text-sm font-medium tracking-widest transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#3DBFB0' }}
            >
              Contact Us Here
            </a>
            <p className="mt-5 text-xs" style={{ color: '#aaa' }}>
              You will be redirected to the Platanus Planning enquiry form.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: '#E5E5E5', backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <a href="https://platanus-p.com/">
                <Image src="/logo.webp" alt="Platanus Planning" width={160} height={17} className="mb-1" />
              </a>
              <p className="text-xs" style={{ color: '#aaa' }}>Platanus Planning Co.</p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="https://platanus-p.com/"
                className="text-xs tracking-wider transition-colors"
                style={{ color: '#888' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                Company Website
              </a>
              <a
                href="https://meo.platanus-p.com/"
                className="text-xs tracking-wider transition-colors"
                style={{ color: '#888' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                日本語
              </a>
              <a
                href="https://platanus-p.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider transition-colors"
                style={{ color: '#888' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: '#E5E5E5' }}>
            <p className="text-xs" style={{ color: '#ccc' }}>
              © {new Date().getFullYear()} Platanus Planning Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
