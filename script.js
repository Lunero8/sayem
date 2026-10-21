// Open links that lead to other websites in a new tab, so the CV stays open.
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (link.hostname !== window.location.hostname) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});