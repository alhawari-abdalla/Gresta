(function () {
  const root = document.getElementById("games-grid");
  if (!root || typeof GAMES === "undefined") return;

  const fragment = document.createDocumentFragment();

  GAMES.forEach((game, index) => {
    const article = document.createElement("article");
    article.className =
      "game-card group relative flex flex-col overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-white/[0.035] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md transition duration-500 ease-out hover:scale-[1.02] hover:border-[#D4AF37]/35 hover:shadow-[0_0_55px_-18px_rgba(212,175,55,0.38)]";
    article.style.animationDelay = `${index * 90}ms`;
    article.innerHTML = `
      <div class="relative aspect-[16/10] overflow-hidden">
        <img src="${escapeAttr(game.image)}" alt="${escapeAttr(game.title + " — cover art")}" class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]" loading="lazy" width="800" height="500" />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
        <span class="absolute left-4 top-4 rounded-full border border-[#D4AF37]/30 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8C84B] backdrop-blur-md">Game</span>
      </div>
      <div class="flex flex-1 flex-col gap-4 p-7">
        <h2 class="font-display text-xl font-semibold tracking-wide text-white md:text-2xl">${escapeHtml(game.title)}</h2>
        <p class="flex-1 text-sm leading-relaxed text-zinc-400 md:text-base">${escapeHtml(game.description)}</p>
        <a href="${escapeAttr(game.link)}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-[#E8C84B] via-[#D4AF37] to-[#9e7e26] px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-void shadow-[0_0_40px_-8px_rgba(212,175,55,0.45)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.55)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 focus:ring-offset-2 focus:ring-offset-void">
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
