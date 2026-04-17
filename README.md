# Site Raphaël Paya — Déploiement Vercel

Ce dépôt contient le code source de votre site personnel. Il est configuré pour un déploiement continu sur Vercel.

## Comment déployer en 3 minutes

### 1. Créer le dépôt sur GitHub
1. Allez sur [github.com/new](https://github.com/new).
2. Nommez le dépôt `raphaelpaya-site`.
3. Ne l'initialisez pas (laissez "Public" ou "Private" selon votre choix).

### 2. Relier votre site local à GitHub
Ouvrez votre terminal et exécutez ces commandes dans le dossier du projet :
```bash
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/raphaelpaya-site.git
git branch -M main
git push -u origin main
```
*(Remplacez `VOTRE_NOM_UTILISATEUR` par votre pseudo GitHub)*.

### 3. Connecter Vercel
1. Allez sur [vercel.com/new](https://vercel.com/new).
2. Sélectionnez le dépôt `raphaelpaya-site` que vous venez de créer.
3. Cliquez sur **Deploy**.

## Améliorer votre site
À chaque fois que vous modifiez le code (par exemple `index.html`), il vous suffit de faire :
```bash
git add .
git commit -m "Description des changements"
git push
```
Votre site sera mis à jour **automatiquement** en quelques secondes !
