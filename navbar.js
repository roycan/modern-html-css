// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.createElement("div");
  navbar.innerHTML = `
    <nav class="navbar">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="accordion.html">Accordion</a></li>
        <li><a href="dropdown.html">Dropdown</a></li>
        <li><a href="popover.html">Popover</a></li>
        <li><a href="container-queries.html">Container Queries</a></li>
        <li><a href="scroll-snap.html">Scroll Snap</a></li>
        <li><a href="dialog.html">Dialog</a></li>
        <li><a href="form-validation.html">Form Validation</a></li>
        <li><a href="focus.html">Focus States</a></li>
        <li><a href="theme.html">Theme Toggling</a></li>
        <li><a href="animation.html">CSS Animation</a></li>
        <li><a href="cascade.html">Cascade Layers</a></li>
      </ul>
    </nav>
    <style>
      .navbar {
        background: #f0f2f5;
        border-bottom: 1px solid #d0d7de;
        padding: 0.5rem 1rem;
      }
      .navbar ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .navbar a {
        text-decoration: none;
        color: #0366d6;
        font-weight: 500;
      }
      .navbar a:hover {
        text-decoration: underline;
      }
    </style>
  `;
  document.body.insertBefore(navbar, document.body.firstChild);
});
