"use client";

import { useState } from "react";

export default function EmailReveal() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        className="hero-link"
        type="button"
        aria-expanded={isVisible}
        aria-controls="contact-email"
        onClick={() => setIsVisible((visible) => !visible)}
      >
        Email
        <span aria-hidden="true">{isVisible ? "−" : "↗"}</span>
      </button>
      {isVisible && (
        <span className="hero-link email-address" id="contact-email" aria-live="polite">
          jeslinjames117@gmail.com
        </span>
      )}
    </>
  );
}
