<template>
  <footer class="site-footer">
    <p>© 2026 Ton Prénom Ton Nom - Portfolio BUT2A</p>
    <div><RouterLink to="/contact">Me contacter ↗</RouterLink><span>Étudiant en BUT Informatique</span></div>
  </footer>
</template>

<style scoped>
.site-footer { align-items: center; border-top: 1px solid var(--line); color: var(--muted); display: flex; font-size: .7rem; justify-content: space-between; padding: 2rem clamp(1.25rem, 6vw, 7.5rem); }.site-footer div { display: flex; gap: 1.5rem; }.site-footer a { color: var(--ink); text-decoration: none; }.site-footer a:hover { color: #87a819; }
@media (max-width: 680px) { .site-footer, .site-footer div { align-items: flex-start; flex-direction: column; gap: .6rem; } }
</style>
