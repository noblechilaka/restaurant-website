// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Check if mobile device
const isMobile = window.innerWidth <= 768;

// Hero Section On-Load Animations
const heroTl = gsap.timeline();

// Split main heading into words for stagger
const titleElement = document.querySelector(".second-title");
if (titleElement) {
  const words = titleElement.textContent.split(" ");
  titleElement.innerHTML = words
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");
}

// Adjust durations for mobile
const logoDuration = isMobile ? 0.6 : 0.8;
const linkDuration = isMobile ? 0.4 : 0.5;
const introDuration = isMobile ? 0.6 : 0.8;
const wordDuration = isMobile ? 0.5 : 0.6;
const subtitleDuration = isMobile ? 0.6 : 0.8;
const buttonDuration = isMobile ? 0.6 : 0.8;
const socialDuration = isMobile ? 0.4 : 0.5;

// Logo fade in from top with slight slide-down, delay 0.2s
heroTl.fromTo(
  ".nav-logo",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: logoDuration, ease: "power2.out" },
  0.2
);

// Navbar links fade in one after another with 0.1s stagger, sliding slightly down
heroTl.fromTo(
  ".nav-links a",
  { opacity: 0, y: -10 },
  {
    opacity: 1,
    y: 0,
    duration: linkDuration,
    stagger: 0.1,
    ease: "power2.out",
  },
  "-=0.5"
);

// Intro text fades in and moves upward gently, delay 0.6s
heroTl.fromTo(
  ".intro-title",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: introDuration, ease: "power2.out" },
  0.6
);

// Main heading animates with word stagger reveal, smooth rise from below
heroTl.fromTo(
  ".word",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: wordDuration,
    stagger: 0.1,
    ease: "power2.out",
  },
  0.8
);

// Subtitle fades in, delay 1.2s
heroTl.fromTo(
  ".subtitle",
  { opacity: 0 },
  { opacity: 1, duration: subtitleDuration, ease: "power2.out" },
  1.2
);

// Supporting line fades in softly, delay 1.5s
heroTl.fromTo(
  ".second-subtitle",
  { opacity: 0 },
  { opacity: 1, duration: subtitleDuration, ease: "power2.out" },
  1.5
);

// CTA button fades and scales up slightly, delay 1.8s
heroTl.fromTo(
  ".btn-hero",
  { opacity: 0, scale: 0.95 },
  { opacity: 1, scale: 1, duration: buttonDuration, ease: "power2.out" },
  1.8
);

// Social icons slide in horizontally with small delay of 2.0s
heroTl.fromTo(
  ".nav-social a",
  { opacity: 0, x: -20 },
  {
    opacity: 1,
    x: 0,
    duration: socialDuration,
    stagger: 0.1,
    ease: "power2.out",
  },
  2.0
);

// Adjust scroll animations for mobile
const scrollDelay = isMobile ? 0.2 : 0.3;
const scrollDuration = isMobile ? 0.6 : 0.8;

// Refined Skybar Experience CTA animation: slide in from right with soft opacity and delay
gsap.fromTo(
  ".intro-text .btn",
  { opacity: 0, x: 40 },
  {
    opacity: 1,
    x: 0,
    duration: scrollDuration,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
      once: true,
    },
  }
);

// Our Menu CTA: fade-up with gold shimmer effect
gsap.fromTo(
  ".menu-highlight-text  .btn",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: scrollDuration,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".menu-highlight",
      start: "top 80%",
      once: true,
    },
    onStart: () => {
      const btn = document.querySelector(".menu-highlight-text  .btn");
      if (btn) {
        btn.classList.add("gold-shimmer");
        setTimeout(() => btn.classList.remove("gold-shimmer"), 1500);
      }
    },
  }
);
// Our Menu CTA: fade-up with gold shimmer effect
gsap.fromTo(
  ".hero-title  .btn",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: scrollDuration,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-title",
      start: "top 80%",
      once: true,
    },
    onStart: () => {
      const btn = document.querySelector(".hero-title .btn");
      if (btn) {
        btn.classList.add("gold-shimmer");
        setTimeout(() => btn.classList.remove("gold-shimmer"), 1500);
      }
    },
  }
);

// Elegant Escape CTA: parallax float-in from bottom with subtle motion blur
gsap.fromTo(
  ".interior-text .btn",
  { opacity: 0, y: 40, filter: "blur(2px)" },
  {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: scrollDuration + 0.2,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".interior-section",
      start: "top 80%",
      once: true,
    },
  }
);

// Footer CTA: fade-in with background glow sweep animation
gsap.fromTo(
  ".footer-cta-btn",
  { opacity: 0, backgroundPosition: "200% center" },
  {
    opacity: 1,
    backgroundPosition: "50% center",
    duration: scrollDuration + 0.5,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      once: true,
    },
  }
);

// Section Title Gold Underline Animation on Scroll
gsap.utils.toArray("h2").forEach((title) => {
  ScrollTrigger.create({
    trigger: title,
    start: "top 80%",
    end: "bottom 20%",
    toggleClass: { targets: title, className: "underline-active" },
    toggleActions: "play none none reverse",
  });
});

// Skybar Experience Section Animations
gsap.utils.toArray(".intro-image-1, .intro-image-2").forEach((el, i) => {
  gsap.fromTo(
    el,
    { y: i % 2 === 0 ? 20 : -20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: scrollDuration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 80%",
        once: true,
      },
    }
  );
});

gsap.fromTo(
  ".intro-text",
  { opacity: 0, x: 50 },
  {
    opacity: 1,
    x: 0,
    duration: scrollDuration,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
      once: true,
    },
  }
);

gsap.fromTo(
  ".intro-text .btn",
  { opacity: 0, x: 20 },
  {
    opacity: 1,
    x: 0,
    duration: scrollDuration,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
      once: true,
    },
  }
);

// Our Menu Section Animations
gsap.fromTo(
  ".menu-highlight-text h2, .menu-highlight-text p",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: scrollDuration,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".menu-highlight",
      start: "top 80%",
      once: true,
    },
  }
);

gsap.fromTo(
  ".menu-highlight-image",
  { opacity: 0, scale: 0.95 },
  {
    opacity: 1,
    scale: 1,
    duration: scrollDuration,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".menu-highlight",
      start: "top 80%",
      once: true,
    },
  }
);

// An Elegant Escape Section Animations
gsap.fromTo(
  ".interior-text",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: scrollDuration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".interior-section",
      start: "top 80%",
      once: true,
    },
  }
);

gsap.utils
  .toArray(".interior-image-main, .interior-image-overlay")
  .forEach((el, i) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: scrollDuration,
        delay: i * scrollDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".interior-section",
          start: "top 80%",
          once: true,
        },
      }
    );
  });

gsap.fromTo(
  ".interior-text .btn",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: scrollDuration,
    delay: scrollDelay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".interior-section",
      start: "top 80%",
      once: true,
    },
  }
);

// // Footer Animations
// gsap.fromTo(
//   ".footer",
//   { opacity: 0, y: 50, filter: "blur(5px)" },
//   {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".footer",
//       start: "top 90%",
//       once: true,
//     },
//   }
// );

// Testimonials carousel scroll reveal
gsap.fromTo(
  ".testimonials-carousel",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: scrollDuration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".testimonials-section",
      start: "top 85%",
      once: true,
    },
  }
);

// Other pages: Animate sections with fade and slide up
gsap.utils.toArray("section").forEach((section) => {
  gsap.fromTo(
    section,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: scrollDuration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true,
      },
    }
  );
});

// Parallax scroll effect for hero sections on about, menu, contact pages
gsap.utils.toArray(".page-hero-bg, .hero-bg img").forEach((img) => {
  gsap.to(img, {
    scale: 1.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: img.closest(".page-hero"),
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

// Fade in hero content on these pages
gsap.utils.toArray(".page-hero-content").forEach((content) => {
  gsap.fromTo(
    content,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: scrollDuration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: content.closest(".page-hero"),
        start: "top 80%",
        once: true,
      },
    }
  );
});



//SCROLL SPEED ADJUSTMENTS//
// Initialize Lenis (smooth scrolling)
const lenis = new Lenis({
  duration: 1.3,          // feel of scroll speed
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 1.5,
});

// GSAP + ScrollTrigger sync with Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


// Example Scroll Animations
gsap.utils.toArray('.fade-up').forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      end: "bottom 10%",
      scrub: 1,
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power2.out"
  });
});

// // Example Hero Animation (modify classes to match your HTML)
// gsap.from(".hero-title span", {
//   y: 40,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.05,
//   delay: 0.5,
//   ease: "power2.out"
// });

// gsap.from(".hero-subtitle", {
//   opacity: 0,
//   y: 20,
//   duration: 1,
//   delay: 1.3,
//   ease: "power2.out"
// });

// gsap.from(".hero-btn", {
//   opacity: 0,
//   scale: 0.9,
//   duration: 0.8,
//   delay: 1.8,
//   ease: "power2.out"
// });

// Example Scroll Animations
gsap.utils.toArray('.fade-up').forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      end: "bottom 10%",
      scrub: 1,
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power2.out"
  });
});

