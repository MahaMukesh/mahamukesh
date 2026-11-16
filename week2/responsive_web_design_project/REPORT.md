# Week 2 Report: Implementation of Responsive Web Design

## 1. Planning and Methods Used
To construct an adaptable structure that displays properly across desktops, tablets, and mobile devices, we integrated relative units and fluid scaling properties:
- **Fluid Typography:** Utilized the CSS `clamp()` function (`font-size: clamp(2rem, 5vw, 3.5rem)`) allowing header fonts to scale fluidly without sudden layout shifts.
- **Adaptive Grid:** Implemented CSS Grid using `auto-fit` and relative `minmax(300px, 1fr)` column constraints. This automatically calculates columns depending on the viewport width.
- **Flexible Navigation:** Flexbox layout wraps standard headers vertically once screen dimensions collapse past mobile boundaries.

## 2. Key Media Queries
- **Tablet Breakpoint (`max-width: 768px`):** Realigns the global navigation menu elements vertically, standardizes alignment, and minimizes excess padding within the hero container.
- **Mobile Portrait Breakpoint (`max-width: 480px`):** Rescales navigation to single-column lists and adapts interactive buttons to occupy 100% of the viewport width.

## 3. Challenges & Resolutions
- **Challenge:** Elements dropping off the screen or overflowing horizontally on small screens under 360px.
- **Resolution:** Introduced a generic `* { box-sizing: border-box; }` reset alongside setting a fluid width constraint (`width: 90%`) on general body wrapper containers.
