import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import { site, faq, photos } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <Nav />

      <header id="home" data-section="home" className="hero">
        <div className="hero__media">
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__vignette" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="hero__title">{site.name}</h1>
          <p className="hero__sub">
            <span className="hero__sub-rule" aria-hidden="true" />
            <span className="hero__sub-text">{site.tagline}</span>
          </p>
        </div>
        <span className="hero__scroll-rule" aria-hidden="true" />
      </header>

      <main id="main">
        <Reveal as="section" className="trust" aria-label="At a glance">
          <div className="container">
            <dl className="trust__grid" style={{ margin: 0 }}>
              <div className="trust__cell">
                <dt className="eyebrow">Based in</dt>
                <dd className="trust__value" style={{ margin: 0 }}>
                  {site.city}, {site.country}
                </dd>
              </div>
              <div className="trust__cell">
                <dt className="eyebrow">Dealing since</dt>
                <dd className="trust__value trust__value--mono" style={{ margin: 0 }}>
                  {site.dealingSince}
                </dd>
              </div>
              <div className="trust__cell">
                <dt className="eyebrow">Registered</dt>
                <dd className="trust__value trust__value--mono" style={{ margin: 0 }}>
                  {site.ico}
                </dd>
              </div>
              <div className="trust__cell">
                <dt className="eyebrow">Viewings</dt>
                <dd className="trust__value" style={{ margin: 0 }}>
                  By appointment
                </dd>
              </div>
            </dl>
            <p className="trust__note">
              Every watch is personally selected, inspected, and photographed by
              Michal. Nothing is listed that I would not wear myself.
            </p>
          </div>
        </Reveal>

        <section
          id="collection"
          data-section="collection"
          className="collection"
          aria-label="Collection — selected pieces"
        >
          <Carousel />
        </section>

        <section id="selection" data-section="selection" className="selection">
          <div className="container selection__inner">
            <Reveal className="selection__copy">
              <p className="eyebrow" style={{ margin: 0 }}>
                Current selection
              </p>
              <h2 className="serif-h selection__title">
                The collection changes constantly.
              </h2>
              <p className="body-copy selection__body">
                What is available today may be gone tomorrow. Rather than
                maintain a catalogue that is always slightly out of date, I show
                every piece on Instagram as it arrives — photographed on the
                wrist, in daylight, exactly as you would see it in person. New
                arrivals are posted weekly.
              </p>
              <a
                className="selection__cta"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore current selection →
              </a>
            </Reveal>
            <Reveal className="selection__photo">
              <figure className="selection__frame" style={{ margin: 0 }}>
                <Image
                  src={photos.selection.src}
                  alt={photos.selection.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
              </figure>
              <p className="selection__caption">Latest arrival · Prague</p>
            </Reveal>
          </div>
        </section>

        <section className="how" aria-label="How it works">
          <div className="container">
            <Reveal>
              <p className="eyebrow how__eyebrow" style={{ marginTop: 0 }}>
                How it works
              </p>
            </Reveal>
            <Reveal className="how__step">
              <span className="how__num">01</span>
              <h3 className="how__name">Enquire</h3>
              <p className="body-copy how__body">
                Message me on Instagram or through the form below. Tell me what
                you are looking for, or what you have.
              </p>
            </Reveal>
            <Reveal className="how__step">
              <span className="how__num">02</span>
              <h3 className="how__name">See it</h3>
              <p className="body-copy how__body">
                Additional photographs, video, movement shots — whatever you
                need. Viewings in Prague by appointment.
              </p>
            </Reveal>
            <Reveal className="how__step">
              <span className="how__num">03</span>
              <h3 className="how__name">Receive it</h3>
              <p className="body-copy how__body">
                Insured shipping across the EU and worldwide, or handed over in
                person in Prague.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="about" data-section="about" className="about">
          <div className="container about__inner">
            <Reveal className="about__copy">
              <p className="eyebrow" style={{ margin: 0 }}>
                About
              </p>
              <h2 className="serif-h about__title">
                I have been drawn to old watches for as long as I can remember.
              </h2>
              <p className="body-copy about__body">
                Not for the labels, and not as investments — for the small,
                human details. The patina a dial takes on over sixty years.
                Hands cut by someone whose name we will never know. A movement
                that has kept running through several lifetimes and simply
                carries on.
              </p>
              <p className="body-copy about__body">
                I look for pieces that have been left honest: original dials,
                unpolished cases, service histories that make sense. Every watch
                is inspected before it is offered, and photographed as it
                actually is — on a wrist, in daylight, flaws included.
              </p>
              <p className="body-copy about__body">
                {site.name} is a vintage watch dealer based in {site.city},{" "}
                {site.country}, run by {site.legalName}. I work from the city,
                and I am always happy to meet in person.
              </p>
              <p className="about__sig">— {site.legalName}</p>
            </Reveal>
            <Reveal className="about__photo">
              <figure className="about__frame" style={{ margin: 0 }}>
                <Image
                  src={photos.about.src}
                  alt={photos.about.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="faq" aria-label="Frequently asked questions">
          <div className="container">
            <Reveal>
              <p className="eyebrow faq__eyebrow" style={{ marginTop: 0 }}>
                Frequently asked
              </p>
            </Reveal>
            <Reveal className="faq__list">
              {faq.map((f) => (
                <div className="faq__item" key={f.question}>
                  <h3 className="faq__q">{f.question}</h3>
                  <p className="body-copy faq__a">{f.answer}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="contact" data-section="contact" className="contact">
          <div className="container">
            <Reveal>
              <h2 className="serif-h contact__title">
                Looking for something particular? Or thinking of selling?
              </h2>
            </Reveal>
            <Reveal>
              <p className="contact__sub" style={{ marginBottom: 0 }}>
                I read and answer every message personally — usually within 24
                hours.
              </p>
            </Reveal>
            <div className="contact__cols">
              <Reveal className="contact__form-col">
                <ContactForm />
              </Reveal>
              <Reveal className="contact__details">
                <div>
                  <div className="contact__detail-label">Email</div>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
                <div>
                  <div className="contact__detail-label">Where</div>
                  <div className="contact__detail-value">
                    {site.city}, {site.country}
                  </div>
                </div>
                <div>
                  <div className="contact__detail-label">Instagram</div>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.instagramHandle}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="footer__wordmark">{site.name}</span>
            <span className="footer__caps">© 2026 {site.legalName}</span>
          </div>
          <nav className="footer__col footer__col--legal" aria-label="Legal">
            <a href="#cookies">Cookies</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </nav>
          <div className="footer__col">
            <span className="footer__caps">{site.ico}</span>
            <span className="footer__caps">
              {site.registeredAddress}, {site.city}, {site.country}
            </span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a
              className="footer__caps"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
