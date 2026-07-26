# Premiers secours en Suisse

Aide-mémoire de premiers secours pour la Suisse. Site statique, sans dépendance,
sans étape de build, fonctionnant hors ligne.

## Lancer

Ouvrir `index.html` suffit pour consulter le site.

Pour tester le mode hors ligne (le service worker exige `http://`) :

```sh
python -m http.server 8080
# puis http://localhost:8080
```

Charger la page une fois, puis couper le serveur : le site reste entièrement
consultable.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure, sprite d'icônes SVG, en-tête, pied de page |
| `styles.css` | Design system, grille, mode sombre, impression |
| `sources.js` | Registre des sources, **une seule** définition par référence |
| `content.js` | Tout le contenu médical, sous forme de données |
| `app.js` | Rendu, dépliage, niveaux de détail, recherche, routage par ancre |
| `sw.js` | Cache hors ligne |
| `manifest.json` | Installation sur mobile (PWA) |

## Trois niveaux de détail

| Niveau | Public | Contenu |
|---|---|---|
| **Essentiel** | Tout le monde | Les puces de la carte, toujours visibles |
| **Complet** | Témoin qui veut agir correctement | Procédure pas à pas, niveau cours BLS-AED (SRC) |
| **Pro** | Curieux / soignants | Physiopathologie, justification des chiffres, suite professionnelle, **sources** |

Le niveau est choisi globalement (barre du haut, mémorisé) ou section par section.

## Modifier le contenu

Tout se passe dans `content.js`. Une section = un objet :

```js
{
  id: 'rcp-dae',            // sert aussi d'ancre : index.html#rcp-dae
  group: 'vitales',         // doit exister dans window.GROUPS
  num: 4,
  title: 'RCP / DAE, adulte',
  icon: 'heart-pulse',      // <symbol id="i-heart-pulse"> dans index.html
  accent: 'red',            // 'red' ou 'blue'
  essentiel: [ '…' ],       // puces de la carte
  complet:   [ { type: 'steps', title: '…', items: [ '…' ] } ],
  pro:       [ { type: 'prose', text: [ '…' ] } ],
  sources:   [ 'erc-bls' ]  // clés de sources.js
}
```

Balisage dans les chaînes : `**gras**`, et `{144}` devient un lien d'appel.
Le rendu passe par des nœuds DOM, jamais par `innerHTML`.

Types de blocs disponibles : `steps` · `list` · `prose` · `note` · `warn` ·
`myth` · `good` · `table` · `kv` · `tree` · `fast` · `figure` · `image`.

## Illustrations

Deux mécanismes distincts, à ne pas confondre.

`figure` affiche un **schéma original** défini dans `figures.js`. Ces schémas se
limitent volontairement aux **repères de position** (électrodes, garrot,
distances, zones de brûlure), où être schématique n'induit pas en erreur. Ils ne
montrent aucun geste : un dessin approximatif d'une technique oriente vers un
geste faux, donc augmente le risque.

`image` affiche une **planche sous licence** déposée dans `planches/`. Ces
fichiers ne sont pas versionnés avec le site : ils viennent de votre licence
(SRC, Samaritains, ou autre ayant droit). Voir `planches/LISEZMOI.txt` pour la
liste des fichiers attendus.

```js
{ type: 'image', wide: true, src: 'planches/pls.jpg',
  title: 'Position latérale de sécurité',
  alt: 'Description complète pour les lecteurs d’écran, obligatoire.',
  caption: 'Légende affichée sous l’image.',
  credit: 'Mention exacte exigée par votre contrat de licence.' }
```

Une planche absente ne casse rien : la figure reste masquée et se retire du DOM,
la section demeure lisible. La figure n'apparaît qu'après chargement réussi, ce
qui évite aussi bien l'image cassée que le cadre vide.

Après avoir déposé des planches, ajoutez leurs chemins à `PLATES` dans `sw.js`
pour garantir leur disponibilité hors ligne, puis incrémentez `CACHE`.

`tree` est un arbre de décision **récursif** : chaque question porte ses propres
branches, et une branche peut contenir une question de suite via `then`. Ne
jamais représenter un algorithme par une suite de questions suivie d'un seul
couple oui/non, un chemin se retrouverait à côté du résultat d'une autre
question.

```js
{ type: 'tree', title: 'Algorithme', wide: true,
  q: 'Réagit-elle ?',
  branches: [
    { label: 'Oui', tone: 'y', text: '…' },
    { label: 'Non', tone: 'n', text: '…',
      then: { q: 'Respire-t-elle normalement ?', branches: [ … ] } }
  ] }
```
Ajouter `wide: true` pour occuper toute la largeur sur grand écran.
Un nouveau type se déclare dans l'objet `BLOCK` de `app.js`.

## Règle de sourçage

**Aucun chiffre sans source.** Dose, durée, ratio, profondeur, seuil : chacun
doit être traçable jusqu'à une entrée de `sources.js`, citée dans le tableau
`sources` de la section. Les sources s'affichent au niveau Pro.

Une affirmation qu'on ne peut pas sourcer est retirée, pas approximée.

Contenu aligné sur les **directives ERC / SRC 2025** (publiées le 22.10.2025).
Le SRC prévoit une période de transition pour les cours donnés selon la version
2021 jusqu'au **31.12.2026** : les deux versions circulent donc actuellement.

Après toute modification de contenu, incrémenter `CACHE` dans `sw.js`
(`psch-v2` → `psch-v3`) pour forcer la mise à jour du cache hors ligne.

## Vérifier

```sh
node --check content.js && node --check app.js && node --check sources.js
```

Contrôle d'intégrité des données (identifiants uniques, groupes connus, sources
existantes) :

```sh
node -e "global.window={};require('./sources.js');require('./content.js');
const S=window.SECTIONS,R=window.SOURCES;
const bad=[];S.forEach(s=>(s.sources||[]).forEach(i=>{if(!R[i])bad.push(s.id+' -> '+i)}));
console.log(S.length+' sections, sources manquantes:', bad.length?bad:'aucune');"
```

## Avertissement

Ce site est un aide-mémoire. Il ne remplace ni un cours de premiers secours
reconnu (SRC / Samaritains) ni un avis médical. En cas de doute : **144**.
