(function () {
  const root = document.getElementById("featured-games");
  if (!root || typeof getFeaturedGames !== "function") return;

  const fragment = document.createDocumentFragment();

  getFeaturedGames().forEach((game) => {
    const article = document.createElement("article");
    article.className =
      "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/40 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]";
    article.innerHTML = `
      <div class="relative aspect-[16/10] overflow-hidden">
        <img src="${escapeAttr(game.image)}" alt="${escapeAttr(game.title + ' — cover art')}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width="640" height="400" />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-3 left-3 right-3">
          <h3 class="font-display text-lg font-semibold tracking-wide text-white drop-shadow md:text-xl">${escapeHtml(game.title)}</h3>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-3 p-5 pt-4">
        <p class="text-sm leading-relaxed text-zinc-400">${escapeHtml(game.description)}</p>
        <a href="${escapeAttr(game.link)}" target="_blank" rel="noopener noreferrer"
          class="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/60">
          Play on itch.io
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    `;
    fragment.appendChild(article);
  });

  root.appendChild(fragment);
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
