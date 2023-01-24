# Test technique Audiomeans - Arad

## Énoncé

L'idée est de développer une petite bibliothèque de podcasts en client-side seulement. Pas besoin de base de données ni de code serveur.
L'application doit me permettre d'effectuer les actions suivantes:

- Ajouter un podcast à ma bibliothèque (les champs seront un titre, une image)
- Ajouter un épisode au sein d'un podcast (les champs épisode sont: un titre, une description et une date de publication)
- Une page avec la liste de tous les épisodes que je peux filtrer avec un champ simple de recherche.

Bonus:

- possibilité de lier un mp3 à l'épisode et d'avoir un bouton play

## Résultat
![image](https://user-images.githubusercontent.com/69279025/214445904-d0658dc2-6e76-40e9-8b62-1476563c2d2e.png)

Total temps de travail : environ 6h étalées sur 2 jours
Stack : HTML, CSS, JS
J'ai pu implémenter les 3 fonctionnalités principales, sans le bonus que je n'ai pas eu le temps de faire.

### Ajouter un podcast à ma bibliothèque

Le principe de la fonctionnalité se rapprochait beaucoup de celle d'une To Do App. Je suis donc parti d'un tutoriel pour une To Do App que j'ai ensuite adapté au test technique, en ajoutant la charte graphique d'Audiomeans notamment.

Pour l'image du podcast, j'ai d'abord essayé avec un input[type="file"] qui va chercher une image sur son propre ordi, mais cela ne marchait pas. En effet, pour des raisons de sécurité, on ne peut pas récupérer le filepath menant vers l'image de son ordi pour ensuite l'afficher.
J'ai donc opté pour un input[type="URL"] qui prend un URL d'une image disponible sur Internet.

Le fonctionnement est assez simple:

- Un formulaire qui prend le nom et un URL d'une image sur Internet
- Un script JS qui génère à partir du DOM tous les éléments pour afficher un élément Podcast avec son nom et son image dans la liste
- J'ai aussi ajouté la possibilité de modifier le titre du podcast et de supprimer l'élément de la liste. Ces fonctionnalités faisaient partie du tutoriel de la To Do App.

### Ajouter un épisode au sein d'un podcast

Pour cette fonctionnalité, j'ai simplement repris la première fonctionnalité que j'ai adaptée et implémentée au sein d'un élément Podcast de la liste.

### Ajouter un filtre de recherche d'épisode

J'ai implémenté un filtre de recherche assez simple qui va vérifier si l'élément recherché fait partie du contenu des balises <p> contenant toutes les infos sur tous les épisodes de tous les podcasts confondus.
Il cache toutes les informations ne correspondant pas à la recherche.
Les résultats de la recherche s'affichent en temps réel.

L'affichage des résultats peut être amélioré, car actuellement, si on cherche un titre d'un épisode, on verra le titre, mais toutes les autres infos sur l'épisode (la description et la date) seront cachées, ce qui n'est pas pratique, et pas esthétique non plus.

![image](https://user-images.githubusercontent.com/69279025/214446140-d8e187c5-8db9-4658-a487-c94d98541c1f.png)

