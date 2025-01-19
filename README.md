# Projet CLI en TypeScript

Ce projet est un outil CLI (élément interactif en ligne de commande) développé en TypeScript. Il permet de poser des questions à l'utilisateur sous forme de stepper et de sauvegarder les réponses dans un fichier JSON.

## Prérequis

- [Node.js](https://nodejs.org/) (à partir de la version 16)
- [pnpm](https://pnpm.io/) (à installer globalement : `npm install -g pnpm`)

## Installation

1. Installez les dépendances :
   ```bash
   pnpm install
   ```

## Développement

Pour travailler sur le projet ou le tester localement, utilisez les commandes suivantes :

### Lancer le projet

- **Mode développement** :
  ```bash
  pnpm dev
  ```
  Cette commande utilise `tsx` pour exécuter directement le code TypeScript sans le compiler.

- **Mode production** :
  ```bash
  pnpm build
  pnpm start
  ```
  - `pnpm build` compile le code TypeScript en JavaScript dans le dossier `dist`.
  - `pnpm start` exécute le fichier compilé depuis le dossier `dist`.

### Sauvegarder les réponses utilisateur

Les réponses de l'utilisateur sont automatiquement enregistrées dans un fichier `responses.json` situé à la racine du projet.

### Réinitialiser les réponses

Pour effacer toutes les réponses enregistrées :
```bash
pnpm reset
```

Cette commande réinitialise le fichier `responses.json` en écrivant un objet vide.

## Gestion des dépendances

- **Installer une nouvelle dépendance** :
  ```bash
  pnpm add <nom_de_la_dependance>
  ```
  Exemple :
  ```bash
  pnpm add lodash
  ```

- **Installer une dépendance en développement** :
  ```bash
  pnpm add -D <nom_de_la_dependance>
  ```

- **Mettre à jour toutes les dépendances** :
  ```bash
  pnpm update
  ```

## Tests

Si vous ajoutez des tests, vous pouvez utiliser un outil comme [Jest](https://jestjs.io/) ou [Vitest](https://vitest.dev/). Pour configurer les tests :

1. Installez Jest :
   ```bash
   pnpm add -D jest @types/jest ts-jest
   ```

2. Configurez Jest dans un fichier `jest.config.ts`.

3. Lancez les tests :
   ```bash
   pnpm test
   ```

## Workflow Git

1. **Récupérer les dernières modifications** :
   ```bash
   git pull
   ```

2. **Committer vos modifications** :
   ```bash
   git add .
   git commit -m "Description de la modification"
   ```

3. **Envoyer les modifications sur le dépôt distant** :
   ```bash
   git push
   ```

## Structure du projet

Voici la structure du projet :
```
.
├── src/                # Code source du projet
│   ├── index.ts       # Point d'entrée principal
│   ├── questions.ts   # Logique des questions posées au user
├── responses.json      # Fichier de sauvegarde des réponses utilisateur
├── package.json        # Configuration du projet et des scripts
├── tsconfig.json       # Configuration TypeScript
└── README.md           # Documentation du projet
```

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```
3. Faites vos modifications et soumettez une Pull Request.

## License

Ce projet est sous licence [MIT](LICENSE).

