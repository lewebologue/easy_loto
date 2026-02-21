# EasyLoto

Application Angular (v17) pour gérer et afficher les tirages de loto.

Prérequis
- Node.js >= 18
- npm
- Docker (optionnel)

Scripts utiles (voir [package.json](package.json))
- Développement : npm run start
- Build : npm run build
- Tests : npm run test

Construction et déploiement
- Installation des dépendances :
  npm ci
- Build production :
  npm run build
  (sortie : dist/easy_loto — configuré dans [angular.json](angular.json))
- Docker :
  - Build image : docker build -t easy_loto .
  - Lancer via docker-compose : docker-compose up --build
  - Lancer via docker-compose en mode détaché: docker-compose up --build -d
  (voir [Dockerfile](Dockerfile) et [docker-compose.yml](docker-compose.yml))

Structure principale
- Entrée : [src/main.ts](src/main.ts)
- Routes : [src/app/app.routes.ts](src/app/app.routes.ts)
- Pages :
  - Accueil : [src/app/pages/home/home.component.ts](src/app/pages/home/home.component.ts)
  - Affichage : [src/app/pages/display/display.component.ts](src/app/pages/display/display.component.ts)
- Composants :
  - Grille : [src/app/components/grid/grid.component.ts](src/app/components/grid/grid.component.ts)
  - Partie : [src/app/components/party/party.component.ts](src/app/components/party/party.component.ts)
- Service d'état partagé : [`LotoStateService`](src/app/services/loto-state.service.ts)

Notes rapides
- Le service [`LotoStateService`](src/app/services/loto-state.service.ts) utilise BroadcastChannel pour synchroniser l'état entre onglets/fenêtres.
- Les templates SCSS globaux sont dans [src/styles.scss](src/styles.scss).

Contribuer
- Respecter la structure des composants standalone et les règles TypeScript/Angular du projet.
- Exécuter les tests unitaires : npm run test

Liens rapides
- [package.json](package.json)
- [angular.json](angular.json)
- [Dockerfile](Dockerfile)
- [docker-compose.yml](docker-compose.yml)
- [src/main.ts](src/main.ts)
- [src/app/services/loto-state.service.ts](src/app/services/loto-state.service.ts)