import Image from "next/image";
import { EnquiryForm } from "@/components/EnquiryForm";

function GoldSeam() {
  return (
    <svg
      className="gold-seam"
      viewBox="0 0 1200 50"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="m0 24 176 2 47-10 82 13 185-7 61 10 112-15 91 8 154-5 99 9 193-5M223 16l18-16m422 17 24 33m221-30 24-20" />
    </svg>
  );
}
export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="wrap site-header">
        <a className="brand" href="#top" aria-label="Kintsugi AI home">
          <span className="logo-crop">
            <Image
              src="/kintsugi-logo.png"
              alt=""
              width={150}
              height={150}
              priority
            />
          </span>
          <span>
            KINTSUGI <b>AI</b>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#what-we-do">What we do</a>
          <a className="nav-contact" href="#enquire">
            Enquire <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="wrap intro" aria-labelledby="hero-title">
          <p className="eyebrow">AI AUTOMATION & CUSTOM SOFTWARE · ADELAIDE</p>
          <h1 className="display" id="hero-title">
            Intelligence <em>build stronger.</em>
          </h1>
          <p>
            Less admin. Better connections. Software built around your business.
          </p>
        </section>
        <div className="wrap">
          <GoldSeam />
        </div>
        <div className="wrap main-grid">
          <section
            id="what-we-do"
            className="about"
            aria-labelledby="about-title"
          >
            <p className="eyebrow">WHAT WE DO</p>
            <h2 className="display" id="about-title">
              Your business.
              <br />
              <em>Working better.</em>
            </h2>
            <p>
              We work with businesses to build software, programs and AI
              automations that solve everyday problems and take repetitive work
              off your hands.
            </p>
            <p>
              From a tailored package to a made-to-order tool, we start by
              understanding how you work and what you want to improve.
            </p>
            <ul className="services">
              <li>
                <span aria-hidden="true">01</span>
                <div>
                  <h3>Automate the everyday</h3>
                  <p>Enquiries, follow-ups, data entry and repetitive admin.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">02</span>
                <div>
                  <h3>Connect your tools</h3>
                  <p>
                    Bring information and workflows together across your
                    business.
                  </p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">03</span>
                <div>
                  <h3>Build what you need</h3>
                  <p>
                    Custom software and practical AI tools shaped around your
                    team.
                  </p>
                </div>
              </li>
            </ul>
            <p className="brand-note">
              Inspired by Kintsugi. Finding strength in better connections.
            </p>
          </section>
          <section
            className="enquire-panel"
            id="enquire"
            aria-labelledby="enquire-title"
          >
            <p className="eyebrow">LET’S TALK</p>
            <h2 className="display" id="enquire-title">
              What could work
              <br />
              <em>better for you?</em>
            </h2>
            <p className="form-intro">
              Tell us a little about your business and what you’d like to
              improve. We’ll get in touch to discuss it.
            </p>
            <p className="required-note">Fields marked * are required.</p>
            <EnquiryForm />
          </section>
        </div>
      </main>
      <footer className="wrap site-footer">
        <span>KINTSUGI AI</span>
        <p>Intelligence build stronger.</p>
        <span>Adelaide, Australia</span>
      </footer>
    </div>
  );
}
