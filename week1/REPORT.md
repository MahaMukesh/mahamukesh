# Design Decision and Layout Report

## 1. Design Decisions
- **Color Palette:** Used a professional slate scheme (`#2c3e50`, `#34495e`) with a vibrant blue accent (`#3498db`) to emphasize layout components.
- **Typography:** Applied fallback sans-serif fonts to ensure consistent rendering across different systems.

## 2. Layout Strategies
- **Flexbox:** Implemented Flexbox for the top navigation bar to distribute alignment dynamically and accommodate responsive stacking.
- **CSS Grid:** Used CSS Grid with `repeat(auto-fit, minmax(250px, 1fr))` for the core features section to facilitate automatic multi-column wrapping on mobile viewports.

## 3. Challenges Encountered & Resolutions
- **Challenge:** Creating a seamless collapse for the navigation bar on small mobile layouts.
- **Resolution:** Implemented simple media query overrides targeting viewports below `768px` to shift the direction flow of flex children to vertical stacking.
