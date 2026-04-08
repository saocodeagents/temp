function updateLoadTime() {
  const loadTimeEl = document.getElementById("load-time");
  if (!loadTimeEl) return;

  const now = new Date();
  loadTimeEl.textContent = now.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

window.addEventListener("DOMContentLoaded", updateLoadTime);
