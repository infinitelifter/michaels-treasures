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
          <a className="hero__cta" href="#selection">
            See the selection
          </a>
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
                  {site.city}
                </dd>
              </div>
              <div className="trust__cell">
                <dt className="eyebrow">Curated era</dt>
                <dd className="trust__value" style={{ margin: 0 }}>
                  {site.curatedEra}
                </dd>
              </div>
              <div className="trust__cell">
                <dt className="eyebrow">Focus</dt>
                <dd className="trust__value" style={{ margin: 0 }}>
                  Originality &amp; Condition
                </dd>
              </div>
              <div className="trust__cell">
                <dt className="eyebrow">Viewing</dt>
                <dd className="trust__value" style={{ margin: 0 }}>
                  By appointment
                </dd>
              </div>
            </dl>
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
                Rather than maintaining a catalogue that is constantly becoming
                outdated, every new arrival is first shared on Instagram. New
                pieces are typically added weekly.
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
            <Reveal className="how__head">
              <p className="eyebrow" style={{ margin: 0 }}>
                How it works
              </p>
              <p className="body-copy how__intro">
                Honest advice, transparent communication, and no pressure.
                Every enquiry is handled personally from the first message to
                the final delivery.
              </p>
            </Reveal>
            <Reveal className="how__step">
              <span className="how__num">01</span>
              <h3 className="how__name">Enquire</h3>
              <p className="body-copy how__body">
                Reach out via Instagram or the contact form. Whether a watch
                from my current selection has caught your attention, you&apos;re
                looking for a particular model, or you&apos;re considering
                selling a vintage watch, I&apos;ll be happy to help.
              </p>
            </Reveal>
            <Reveal className="how__step">
              <span className="how__num">02</span>
              <h3 className="how__name">Personal Consultation</h3>
              <p className="body-copy how__body">
                Receive additional photographs, movement shots, videos, or any
                other details you may need. If required, the watch can also be
                serviced before delivery. Viewings in Prague are available by
                appointment.
              </p>
            </Reveal>
            <Reveal className="how__step">
              <span className="how__num">03</span>
              <h3 className="how__name">Enjoy Your Watch</h3>
              <p className="body-copy how__body">
                Once everything is confirmed, your watch will be carefully
                packaged and shipped fully insured worldwide, or handed over in
                person in Prague.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="about" data-section="about" className="about">
          <div className="container about__inner">
            <Reveal className="about__copy">
              <p className="eyebrow" style={{ margin: 0 }}>
                About me
              </p>
              <h2 className="serif-h about__title">
                Vintage watches have never been just about telling the time.
              </h2>
              <p className="body-copy about__body">
                For me, they represent a broader appreciation for things that
                are made well and built to last. Whether it&apos;s classic
                tailoring, fine leather goods or a watch from the 1940s, they
                all have something in common: craftsmanship, character and
                timeless design.
              </p>
              <p className="body-copy about__body">
                I don&apos;t believe the best watches are necessarily the
                rarest or the most expensive. I look for pieces with honest
                condition, beautiful proportions and originality, simply the
                watches with character that deserve to be worn, not locked away
                in a safe.
              </p>
              <p className="body-copy about__body">
                Every watch offered through {site.name} is personally selected,
                carefully inspected and presented exactly as it is. I believe a
                great vintage watch deserves to be worn and appreciated,
                becoming part of its owner&apos;s story.
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
                Let&apos;s Start the Conversation
              </h2>
            </Reveal>
            <Reveal>
              <p className="body-copy contact__lede">
                Whether you&apos;re searching for a particular watch, have a
                question about a piece, or are considering selling from your
                collection, I&apos;d be pleased to hear from you.
              </p>
              <p className="contact__sub" style={{ marginBottom: 0 }}>
                Every enquiry is answered personally, usually within 24 hours.
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
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </nav>
          <div className="footer__col">
            <span>{site.legalName}</span>
            <span className="footer__caps">IČO: {site.ico}</span>
            <span>
              {site.streetAddress}, {site.postalCode}, {site.city}
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
