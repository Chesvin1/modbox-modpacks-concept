// Fixed sample content for the concept. No catalog API or server actions.
const modpacks = [
  { title: 'All the Mods 10 - ATM10', author: 'ATMTeam', image: 'all-the-mods-10.png', summary: 'The top pack of 2026 with around 500 mods! Tons of quests and a proper endgame.', category: 'Exploration', extra: 4, downloads: '22.6M', updated: 'Oct 15, 2026', version: '1.21.1', loader: 'NeoForge' },
  { title: 'DeceasedCraft - Urban Zombie Apocalypse', author: 'TqLxQuanZ', image: 'deceasedcraft.png', summary: 'Explore, loot and shoot your way through cities overrun by the infected in this zombie apocalypse modpack.', category: 'Exploration', extra: 6, downloads: '9.8M', updated: 'Jul 17, 2026', version: '1.20.1', loader: 'Forge' },
  { title: 'Prominence™ II: Hasturian Era', author: 'ElocinDev', image: 'prominence.webp', summary: 'Lore-rich RPG | Explore the Kingdom of Vaaz with voiced NPCs, a custom Questing System, Custom Gear, Bosses, Talent Tree and more!', category: 'Adventure and RPG', extra: 3, downloads: '13.2M', updated: 'Oct 23, 2026', version: '1.20.1', loader: 'Fabric' },
  { title: 'Better MC [FORGE] BMC4', author: 'LunaPixelStudios', image: 'better-mc-forge-bmc4.png', summary: "A Proper Vanilla+ Modpack | Don't play Vanilla play this!", category: 'Vanilla+', extra: 4, downloads: '18.8M', updated: 'Oct 9, 2026', version: '1.20.1', loader: 'Forge' },
  { title: 'COBBLEVERSE - Pokemon Adventure [Cobblemon]', author: 'LUMYVERSE', image: 'cobbleverse.png', summary: 'Start a true Pokémon adventure in Minecraft: Cobblemon 1.7.3 | ALL 1025 Pokémon! | Custom Music | Shaders | Optimized and more.', category: 'Adventure and RPG', extra: 2, downloads: '5.3M', updated: 'Jul 22, 2026', version: '1.21.1', loader: 'Fabric' },
  { title: 'RLCraft', author: 'Shivaxi', image: 'rlcraft.png', summary: 'A modpack specially designed to bring an incredibly hardcore and semi-realistic challenge revolving around survival, RPG elements, and adventure-like exploration.', category: 'Adventure and RPG', extra: 4, downloads: '30.4M', updated: 'Jun 27, 2023', version: '1.12.2', loader: 'Forge' },
  { title: 'DawnCraft - Echoes of Legends', author: 'bstylia14', image: 'dawn-craft.gif', summary: 'An adventure RPG with challenging bosses, new combat mechanics, a quest-driven story and a world to explore.', category: 'Adventure and RPG', extra: 4, downloads: '8.1M', updated: 'Oct 12, 2026', version: '1.18.2', loader: 'Forge' },
  { title: 'Vault Hunters Third Edition', author: 'iskall85', image: 'vault-hunters-1-18-2.png', summary: 'Build your character, master new abilities and explore the vaults for powerful loot and artifacts.', category: 'Adventure and RPG', extra: 3, downloads: '6.4M', updated: 'Sep 28, 2026', version: '1.18.2', loader: 'Forge' },
  { title: 'All the Mods 9 - ATM9', author: 'ATMTeam', image: 'all-the-mods-9.png', summary: 'Hundreds of mods, a full quest book, technology, magic and exploration. Can you craft the ATM Star?', category: 'Extra Large', extra: 5, downloads: '16.2M', updated: 'Oct 8, 2026', version: '1.20.1', loader: 'Forge' },
  { title: 'FTB Skies', author: 'FTB', image: 'ftb-skies.png', summary: 'Start on an island in the sky and build your way through a quest-led adventure with magic, machines and automation.', category: 'Skyblock', extra: 3, downloads: '3.2M', updated: 'Sep 16, 2026', version: '1.19.2', loader: 'Forge' }
];

const categories = ['Adventure and RPG', 'Combat / PvP', 'Expert', 'Exploration', 'Extra Large', 'FTB Official Pack', 'Hardcore', 'Horror', 'Magic', 'Map Based', 'Mini Game', 'Multiplayer', 'Quests', 'RLCraft', 'Sci-Fi', 'Skyblock', 'Small / Light', 'Tech', 'Vanilla+'];
const categoryOptions = document.getElementById('category-options');
const allCategories = document.getElementById('all-categories');

for (const category of categories) {
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'category';
  input.value = category;
  label.append(input, document.createTextNode(category));
  categoryOptions.append(label);
}

const escapeText = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

document.getElementById('modpack-list').innerHTML = modpacks.map(pack => `
  <article class="modpack">
    <img class="modpack-thumb" src="assets/${pack.image}" alt="${escapeText(pack.title)} artwork" width="96" height="96">
    <div class="modpack-content">
      <h3>${escapeText(pack.title)}</h3>
      <p class="modpack-author">By ${escapeText(pack.author)}</p>
      <p class="modpack-summary">${escapeText(pack.summary)}</p>
      <div class="modpack-meta">
        <span class="tags"><span class="tag">${escapeText(pack.category)}</span><span class="tag tag-extra">+${pack.extra}</span></span>
        <span class="stat"><i class="fa" aria-hidden="true">&#xf019;</i><span aria-label="${pack.downloads} downloads">${pack.downloads}</span></span>
        <span class="stat"><i class="fa" aria-hidden="true">&#xf017;</i><span aria-label="Updated ${pack.updated}">${pack.updated}</span></span>
        <span class="stat"><i class="fa" aria-hidden="true">&#xf11b;</i><span aria-label="Minecraft ${pack.version}">${pack.version}</span></span>
        <span>${pack.loader}</span>
      </div>
    </div>
    <i class="fa modpack-arrow" aria-hidden="true">&#xf105;</i>
  </article>`).join('');

// Filters only change their selected appearance. The example results stay fixed.
categoryOptions.addEventListener('change', () => {
  const allSelected = !categoryOptions.querySelector('input:checked');
  allCategories.classList.toggle('active', allSelected);
  allCategories.setAttribute('aria-pressed', String(allSelected));
});

allCategories.addEventListener('click', () => {
  categoryOptions.querySelectorAll('input').forEach(input => { input.checked = false; });
  allCategories.classList.add('active');
  allCategories.setAttribute('aria-pressed', 'true');
});

document.querySelector('.show-less').addEventListener('click', event => {
  const collapsed = categoryOptions.classList.toggle('collapsed');
  event.currentTarget.textContent = collapsed ? 'Show more' : 'Show less';
  event.currentTarget.setAttribute('aria-expanded', String(!collapsed));
});

document.querySelector('.sort-direction').addEventListener('click', event => {
  const button = event.currentTarget;
  const ascending = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(ascending));
  button.setAttribute('aria-label', ascending ? 'Ascending order' : 'Descending order');
  button.querySelector('i').textContent = ascending ? '\uf062' : '\uf063';
});
