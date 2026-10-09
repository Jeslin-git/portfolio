import Image from "next/image";
import EmailReveal from "@/components/email-reveal";
import ProjectGallery from "@/components/project-gallery";
import ThemeToggle from "@/components/theme-toggle";

const links = [
  { label: "GitHub", href: "https://github.com/Jeslin-git", icon: "↗" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeslin-james-638046353",
    icon: "↗",
  },
  { label: "Resume", href: "/resume.pdf", icon: "↓" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-lavender" aria-hidden="true" />
      <div className="ambient ambient-peach" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Jeslin James home">
          jj<span>.</span>
        </a>
        <a className="projects-nav" href="#project-1">PROJECTS <span>↘</span></a>
        <div className="topbar-actions">
          <span className="availability availability-nav">
            <span className="availability-dot" />
            Open to opportunities
          </span>
          <ThemeToggle />
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> PORTFOLIO · 2026</p>
          <h1 id="hero-title">
            <span className="hello">Hey, there<span className="hello-comma">.</span></span>
            <span className="name">I AM JESLIN<span className="name-period">.</span></span>
          </h1>
          <p className="role-line">
            Full-stack developer
            <br />
            <span className="role-secondary">& UI/UX designer</span>
          </p>
          <p className="hero-description">
            Final-year BTech CS student at MACE Kothamangalam, also pursuing the
            IIT Madras BSc program and leading web for IEEE MACE. I turn ideas
            into useful things—with a little extra love for the details.
          </p>

          <div className="availability availability-main">
            <span className="availability-dot" />
            Available for SDE roles
            <span className="availability-note">· let&apos;s make something good</span>
          </div>

          <div className="hero-links" aria-label="Social and contact links">
            {links.map((link) => (
              <a
                className="hero-link"
                href={link.href}
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
                <span aria-hidden="true">{link.icon}</span>
              </a>
            ))}
            <EmailReveal />
          </div>
          <p className="micro-note">Usually in a code editor. Sometimes in Figma.</p>
        </div>

        <div className="hero-art" aria-label="Portrait of Jeslin James">
          <div className="art-sticker sticker-top">DESIGN<br />MINDED</div>
          <div className="portrait-frame">
            <Image
              src="/me.jpeg"
              alt="Jeslin James"
              fill
              priority
              sizes="(max-width: 760px) 78vw, 390px"
              className="portrait-image"
            />
            <div className="portrait-fade" />
            <div className="portrait-caption">
              <span className="caption-mark">✳</span>
              <span>hi, I&apos;m Jeslin</span>
            </div>
          </div>
          <div className="art-sticker sticker-bottom">CODE<br />& COLOUR</div>
          <span className="art-sparkle sparkle-one" aria-hidden="true">✳</span>
          <span className="art-sparkle sparkle-two" aria-hidden="true">✦</span>
        </div>

      </section>

      <section className="project-section" id="project-1" aria-labelledby="project-title">
        <div className="project-heading">
          <p className="project-eyebrow"><span /> SELECTED WORK · 01</p>
          <div className="project-title-row">
            <div>
              <p className="project-number">01 / WEB APP</p>
              <h2 id="project-title">Code Review<br /><em>Assistant.</em></h2>
            </div>
          </div>
        </div>

        <ProjectGallery />

        <div className="project-details">
          <article className="project-summary">
            <p className="detail-label">THE PROJECT</p>
            <h3>A second set of eyes for your code.</h3>
            <p>
              Code Review Assistant helps developers get AI-assisted feedback
              on their code, making it easier to spot potential issues and
              think through improvements before moving on.
            </p>
            <p className="project-note">
              The review service runs on a free-tier backend, so its first
              request may take about a minute to wake up. Subsequent requests
              should be quicker.
            </p>
            <a
              className="project-live-link"
              href="https://codeai-axurqlnye-jeslins-projects-5f8dd491.vercel.app/dashboard"
              target="_blank"
              rel="noreferrer"
            >
              OPEN LIVE DEMO <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="project-requirements">
            <p className="detail-label">PROJECT REQUIREMENTS</p>
            <h3>Designed around a simple review flow.</h3>
            <ul>
              <li>Let a developer submit code for an AI-assisted review.</li>
              <li>Present useful feedback in a clear, easy-to-scan format.</li>
              <li>Keep the experience straightforward on desktop and mobile.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
