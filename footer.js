// footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p>© roycan 2026</p>
    <style>
      footer {
        margin-top: 3rem;
        padding: 1rem;
        text-align: center;
        background: #f0f2f5;
        border-top: 1px solid #d0d7de;
        font-size: 0.9rem;
        color: #555;
      }
      footer p {
        margin: 0;
      }
    </style>
  `;
  document.body.appendChild(footer);
});
