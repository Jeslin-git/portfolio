"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const screenshots = [
  { src: "/project1a.png", label: "Project screenshot 1 of 3" },
  { src: "/project1b.png", label: "Project screenshot 2 of 3" },
  { src: "/project1c.png", label: "Project screenshot 3 of 3" },
];

export default function ProjectGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [missingImages, setMissingImages] = useState<boolean[]>(
    screenshots.map(() => false),
  );

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollBy({
      left: direction * gallery.clientWidth * 0.78,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  return (
    <div className="project-gallery-wrap">
      <div className="gallery-controls">
        <p className="gallery-hint">Swipe or scroll to see all three screens</p>
        <div className="gallery-buttons">
          <button
            className="gallery-button"
            type="button"
            aria-label="Scroll screenshots left"
            onClick={() => scrollGallery(-1)}
          >
            ←
          </button>
          <button
            className="gallery-button"
            type="button"
            aria-label="Scroll screenshots right"
            onClick={() => scrollGallery(1)}
          >
            →
          </button>
        </div>
      </div>
      <div
        className="project-gallery"
        ref={galleryRef}
        aria-label="Code Review Assistant screenshots"
        tabIndex={0}
      >
        {screenshots.map((screenshot, index) => (
          <figure className="project-slide" key={screenshot.src}>
            {missingImages[index] ? (
              <div className={`screenshot-placeholder placeholder-${index + 1}`}>
                <span className="placeholder-number">0{index + 1}</span>
                <span>Drop your screenshot here</span>
                <code>public/project1{String.fromCharCode(97 + index)}.png</code>
              </div>
            ) : (
              <Image
                src={screenshot.src}
                alt={screenshot.label}
                fill
                sizes="(max-width: 760px) 86vw, 72vw"
                className="project-screenshot"
                onError={() => {
                  setMissingImages((current) =>
                    current.map((missing, imageIndex) =>
                      imageIndex === index ? true : missing,
                    ),
                  );
                }}
              />
            )}
            <figcaption>SCREEN 0{index + 1} <span>— CODE REVIEW ASSISTANT</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
