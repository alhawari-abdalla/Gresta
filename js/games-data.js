/**
 * Portfolio game catalog — edit titles, descriptions, images, and itch.io links.
 */
const GAMES = [
  {
    title: "Neon Drift",
    description:
      "Arcade racing through a synthwave city. Chain boosts, dodge traffic, and chase leaderboard glory in short, intense runs.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    link: "https://gresta.itch.io/neon-drift",
  },
  {
    title: "Echoes of the Void",
    description:
      "A narrative puzzle adventure where sound reveals hidden paths. Unravel fragments of memory in a minimalist sci-fi world.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    link: "https://gresta.itch.io/echoes-of-the-void",
  },
  {
    title: "Pixel Forge",
    description:
      "Roguelite crafting battler: gather resources, forge gear, and survive escalating waves in handcrafted pixel arenas.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?auto=format&fit=crop&w=1200&q=80",
    link: "https://gresta.itch.io/pixel-forge",
  },
  {
    title: "Starfall Tactics",
    description:
      "Turn-based skirmishes on orbital platforms. Position squads, exploit cover, and outthink the AI in bite-sized missions.",
    image:
      "https://images.unsplash.com/photo-1614726365723-49cfae96c6a0?auto=format&fit=crop&w=1200&q=80",
    link: "https://gresta.itch.io/starfall-tactics",
  },
];

/** Games shown on the home page (first N). */
const FEATURED_COUNT = 3;

function getFeaturedGames() {
  return GAMES.slice(0, FEATURED_COUNT);
}
