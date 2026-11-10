# Portfolio Camille Martin

Portfolio personnel construit avec Vue 3 et Vite.

## Lancer le projet

```sh
npm install
npm run dev
```

Pour générer la version de production :

```sh
npm run build
```

## Organisation

Le projet reprend une organisation inspirée du modèle MVC :

- `src/router.ts` définit les routes `/`, `/a-propos`, `/projets` et `/contact`.
- `src/views/` contient une vue indépendante pour chaque page.
- `src/components/` contient les éléments partagés comme la navigation et le pied de page.
- Les formulaires et interactions sont contrôlés localement dans leurs vues.
- `src/assets/` centralise les styles globaux et les variables visuelles.

Les textes utilisés reprennent les informations disponibles dans le premier portfolio : `Portfolio BUT2A`, `Étudiant en BUT Informatique (2e année)`, ainsi que les coordonnées encore indiquées sous forme de placeholders.
