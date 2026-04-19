(function () {
  const root = document.getElementById("games-grid");
  if (!root || typeof GAMES === "undefined") return;

  const fragment = document.createDocumentFragment();

  GAMES.forEach((game, index) => {
    const article = document.createElement("article");
    article.className =
      "game-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] opacity-0 shadow-xl shadow-black/40 transition duration-300 hover:border-fuchsia-500/35 hover:shadow-[0_0_45px_-12px_rgba(217,70,239,0.35)]";
    article.style.animationDelay = `${index * 80}ms`;
    article.innerHTML = `
      <div class="relative aspect-[16/10] overflow-hidden">
        <img src="${escapeAttr(game.image)}" alt="${escapeAttr(game.title + ' — cover art')}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width="800" height="500" />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070c] via-[#07070c]/20 to-transparent"></div>
        <span class="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan-300/90 backdrop-blur-sm">Game</span>
      </div>
      <div class="flex flex-1 flex-col gap-3 p-6">
        <h2 class="font-display text-xl font-semibold tracking-wide text-white md:text-2xl">${escapeHtml(game.title)}</h2>
        <p class="flex-1 text-sm leading-relaxed text-zinc-400 md:text-base">${escapeHtml(game.description)}</p>
        <a href="${escapeAttr(game.link)}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50">
          Play on itch.io
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    `;
    fragment.appendChild(article);
  });

  root.appendChild(fragment);

  requestAnimationFrame(() => {
    root.querySelectorAll(".game-card").forEach((el) => {
      el.classList.add("animate-in");
    });
  });
})();

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
