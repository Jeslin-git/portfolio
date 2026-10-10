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
            Developer in the making
            <br />
            <span className="role-secondary">(& Occasional designer)</span>
          </p>
          <p className="hero-description">
            I’m a final-year CS student who learns by building stuff, breaking it, and fixing it again. (One day of deployment errors and I’ll never forget what CORS is.)

I’m into web apps and AI tools, and looking for my first SDE role where I can keep building and learning fast.

Outside code, I&apos;m a digital artist and I mess around in Figma and Photoshop, overthink every movie I watch, and fall into research rabbit holes.
          </p>

          <div className="availability availability-main">
            <span className="availability-dot" />
            Available for SDE/AI roles
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

        <ProjectGallery
          imagePrefix="project1"
          imageCount={3}
          projectTitle="Code Review Assistant"
        />

        <div className="project-details">
          <article className="project-summary">
            <p className="detail-label">THE PROJECT</p>
            <h3>A second set of eyes for your code.</h3>
            <p>
              Code Review Assistant helps developers get AI-assisted feedback
              on their code, making it easier to spot potential issues and
              think through improvements before moving on. This was a solo project built with AI assisistance.
            </p>
            <p className="project-note">
              To try it: sign up, add your own API key in Settings. The backend is on a free tier, so the first load can take about
      a minute to wake up. Subsequent requests are quicker.
            </p>
            <a
              className="project-live-link"
              href="https://codeai-swart.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              OPEN LIVE DEMO <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="project-requirements">
            <p className="detail-label">TRY IT IN 3 STEPS</p>
            <h3>Takes about two minutes.</h3>
            <ol>
              <li>Open the live demo and sign up.</li>
              <li>
                In Settings, add an AI provider. Gemini works and has a free tier: get
                a free key at aistudio.google.com/apikey.
              </li>
              <li>Upload a ZIP or paste some code, run a review, then chat about the findings.</li>
            </ol>
            <p className="project-note">
              Tip: use a free-tier key, not your main one.
            </p>
          </article>
        </div>
      </section>

      <section
        className="project-section"
        id="project-2"
        aria-labelledby="project-title-2"
      >
        <div className="project-heading">
          <p className="project-eyebrow"><span /> SELECTED WORK · 02</p>
          <div className="project-title-row">
            <div>
              <p className="project-number">02 / AI TOOL</p>
              <h2 className="project-title-long" id="project-title-2">
                AI Resume<br /><em>Screening Assistant.</em>
              </h2>
            </div>
          </div>
        </div>

        <ProjectGallery
          imagePrefix="project2"
          imageCount={4}
          projectTitle="AI Resume Screening Assistant"
        />

        <div className="project-details">
  <article className="project-summary">
    <p className="detail-label">THE PROJECT</p>
    <h3>Resumes in, ranked matches out.</h3>
    <p>
      AI Resume Screening Assistant ranks resumes against a job description,
      so recruiters can see the best-fitting candidates first instead of
      reading every resume. Built by a team of 8 during a one-week
      MACE–AIA/Cognizant hackathon.
    </p>
    <a
              className="project-live-link"
              href="https://ai-resume-screener-8399.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              OPEN LIVE DEMO <span aria-hidden="true">↗</span>
            </a>
  </article>

  <article className="project-requirements">
    <p className="detail-label">MY PART</p>
    <h3>The matching engine.</h3>
    <ul>
      <li>TF-IDF to match the exact skills and keywords in a resume against the job description.</li>
      <li>Embeddings to catch meaning, so similar skills still match even when the wording differs.</li>
      <li>The scoring logic that turns those signals into a ranked match score.</li>
    </ul>
    <p className="project-note">
      Stack: Python, scikit-learn. Teammates built the rest of the app around it.
    </p>

          </article>

        </div>
      </section>
    </main>
  );
}
