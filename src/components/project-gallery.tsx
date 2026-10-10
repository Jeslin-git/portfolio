"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ProjectGalleryProps = {
  imagePrefix: string;
  imageCount: number;
  projectTitle: string;
};

export default function ProjectGallery({
  imagePrefix,
  imageCount,
  projectTitle,
}: ProjectGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const screenshots = Array.from({ length: imageCount }, (_, index) => {
    const imageLetter = String.fromCharCode(97 + index);
    return {
      src: `/${imagePrefix}${imageLetter}.png`,
      fileName: `${imagePrefix}${imageLetter}.png`,
      label: `${projectTitle} screenshot ${index + 1} of ${imageCount}`,
    };
  });
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
        <p className="gallery-hint">
          Swipe or scroll to see all {imageCount} screens
        </p>
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
        aria-label={`${projectTitle} screenshots`}
        tabIndex={0}
      >
        {screenshots.map((screenshot, index) => (
          <figure className="project-slide" key={screenshot.src}>
            {missingImages[index] ? (
              <div className={`screenshot-placeholder placeholder-${index + 1}`}>
                <span className="placeholder-number">0{index + 1}</span>
                <span>Drop your screenshot here</span>
                <code>public/{screenshot.fileName}</code>
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
            <figcaption>
              SCREEN 0{index + 1} <span>— {projectTitle.toUpperCase()}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
