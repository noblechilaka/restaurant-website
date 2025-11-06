# GSAP Animation Optimization Plan

## 1. GPU Acceleration and Rendering Stability

- [x] Add `will-change: transform, opacity;` to animated elements in CSS
- [x] Add `force3D: true` to GSAP animations
- [x] Add `transform: translateZ(0);` or `translate3d(0,0,0)` to prevent text flickering
- [x] Add `backface-visibility: hidden;` and `-webkit-font-smoothing: antialiased;` for text clarity

## 2. Font and Image Stability

- [x] Preload key fonts in HTML head
- [x] Set explicit width/height for hero and background images

## 3. GSAP ScrollTrigger Optimization

- [ ] Set `fastScrollEnd: true`, `invalidateOnRefresh: true`, and `thresholds` in ScrollTrigger
- [ ] Animate only `transform` and `opacity` properties
- [ ] Use `scrub: 1` for natural easing
- [ ] Add small delay with `start: "top 85%"`

## 4. Animation Performance

- [ ] Set `gsap.ticker.fps(60)` for smooth frame rate
- [ ] Use `ScrollTrigger.batch()` for multiple triggers
- [ ] Disable heavy easing on mobile with conditional checks

## 5. Visual Smoothness

- [ ] Maintain consistent "ease-out" feel (power3.out or expo.out)
- [ ] Test responsiveness on iOS Safari and Chrome mobile

## 6. Update Animations.js

- [ ] Refactor all scroll animations to use optimized settings
- [ ] Implement batching where possible
- [ ] Add mobile-specific optimizations
