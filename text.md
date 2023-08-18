# C'est juste un test pour savoir comment marche WEBGL sur server 


Il est basé sur un ancien logiciel nommé OpenGl 


Il ne nécessite aucune installation, il faut juste avoir un localhost server 


Il permet manipuler des images en 2D et 3D 

On va voir comment il marche...


 ## Déjà il fait appelle à pleins de notions mathématiques comme : 

## vertex (ou sommet en français) :

/ en geometrie : c'est un point fondamental dans un espace tridimensionnel. Il est défini par ses coordonnées spatiales (X, Y, Z), qui indiquent sa position dans cet espace. En graphiques 3D, les vertex (sommets) sont les éléments de base à partir desquels sont construits les objets et les formes. 

Les vertex (sommets) jouent un rôle essentiel dans le rendu d'images 3D, car ils déterminent la structure et la géométrie des objets affichés à l'écran. En d'autres termes, ils sont les "points de base" à partir desquels les objets 3D prennent forme et apparence.


## Episode 3 : Geometries dessin d'un triangle rouge : 
sources : INvent Box Tuto : https://www.youtube.com/watch?v=bP7_FeP9kU4&list=PL2935W76vRNHFpPUuqmLoGCzwx_8eq5yK&index=1

### Voici la traduction et l'explication des étapes dans main.js: lié à l'épisode 3 de la playlist de Invent Box

// LES ÉTAPES :
// Définition des données de vertex (sommets)

// Création d'un tampon (buffer)

// Chargement des données de vertex dans le tampon

// Création du shader de sommets (vertex shader)

// Création du shader de fragments (fragment shader)

// Création du programme

// Attachement des shaders au programme

// Activation des attributs de vertex

// Dessin (traçage)

### Explications : 




**1 - Définition des données de vertex (sommets) :**
Ici, on définit les coordonnées des sommets qui composent la forme que l'on souhaite dessiner. Dans cet exemple, on a défini les coordonnées de trois points pour former un triangle.

**2 - Création d'un tampon (buffer) :**
Un tampon (buffer) est une région de mémoire sur la carte graphique où on peut stocker des données. À cette étape, on crée un tampon dans lequel on va charger les données de vertex.

**3 - Chargement des données de vertex dans le tampon :**
On prend les données de vertex qu'on a définies à l'étape 1 et on les charge dans le tampon créé à l'étape 2. Cela permet à la carte graphique d'accéder rapidement à ces données lorsqu'elle dessine la forme.

**4 - Création du shader de sommets (vertex shader) :**
Les shaders sont de petits programmes qui s'exécutent sur la carte graphique pour effectuer des opérations spécifiques. Ici, on crée un shader de sommets qui prend les coordonnées des sommets en entrée et les transforme, généralement en calculant leur position finale à l'écran.

**5 - Création du shader de fragments (fragment shader) :**
De même, on crée un shader de fragments, qui gère la couleur des fragments individuels (pixels) générés par le shader de sommets. Dans cet exemple, le fragment shader attribue simplement une couleur rouge uniforme à tous les fragments.

**6 - Création du programme :**
Un programme WebGL est constitué de deux shaders, le vertex shader et le fragment shader. On crée ici le programme WebGL qui utilisera ces deux shaders pour effectuer le rendu.

**7 - Attachement des shaders au programme :**
On attache les shaders qu'on a créés au programme WebGL qu'on a également créé. Cela signifie que ces shaders seront utilisés lors de l'exécution du programme.

**8 - Activation des attributs de vertex :**
Les attributs de vertex sont des données qui sont passées au shader de sommets. Ici, on active l'attribut "position" qu'on a utilisé dans notre vertex shader. Cela indique à WebGL qu'on utilisera cet attribut pour les coordonnées des sommets.

**9 - Dessin (traçage) :**
Enfin, on effectue le dessin proprement dit en utilisant la fonction gl.drawArrays(). On spécifie le mode de dessin (dans cet exemple, gl.TRIANGLES pour dessiner des triangles), l'indice de départ et le nombre de sommets à dessiner.

**RESUME :** Ces étapes constituent **l'essentiel du processus de rendu WebGL**. Elles nous permettent de transférer des données vers la carte graphique, de définir comment ces données seront utilisées pour créer des formes et de créer des shaders pour contrôler l'apparence visuelle de ces formes. En fin de compte, cela aboutit au rendu d'images interactives en 2D et 3D dans un navigateur web.




##### EPISODE 4 : faire un triangle multicolor (variant) avec 3 couleurs primaires sur les 3 sommets 

source : youtube.com/watch?v=zbS4a10xBk8


#### ETAPES : 

épisode 4 :

Étapes pour attacher des données de couleur aux sommets et afficher un triangle multicolore :

Nommer les attributs : Dans le vertex shader, déclarez les attributs que vous souhaitez utiliser, par exemple position et color.

Créer des tampons : Utilisez gl.createBuffer() pour créer deux tampons : un pour les positions des sommets (positionBuffer) et un pour les données de couleur (colorBuffer).

Charger les données dans les tampons : Utilisez gl.bindBuffer(gl.ARRAY_BUFFER, buffer) pour lier chaque tampon, puis utilisez gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW) pour charger les données des sommets et des couleurs dans les tampons.

Définir les attributs dans le shader : Dans le vertex shader, déclarez les attributs position et color et liez-les aux positions correspondantes dans le sommet.

Connecter les attributs génériques : Utilisez gl.vertexAttribPointer pour relier les attributs génériques aux attributs nommés. Assurez-vous de lier le bon tampon à chaque attribut avant d'appeler gl.vertexAttribPointer.

Activer les attributs : Utilisez gl.enableVertexAttribArray pour activer les attributs génériques, indiquant à WebGL d'utiliser les données fournies.

Définir la précision des nombres à virgule flottante : Déclarez la précision des nombres à virgule flottante en utilisant precision mediump float; ou une autre précision dans vos shaders.

Utiliser les attributs dans le shader : Utilisez les attributs position et color dans le vertex shader pour positionner les sommets et attribuer les couleurs.

Utiliser un attribut varying : Dans le vertex shader, déclarez un attribut varying, par exemple varying vec3 vColor;, pour stocker la couleur à utiliser dans le fragment shader.

Interpolation des couleurs : Dans le fragment shader, utilisez l'attribut varying vColor pour obtenir la couleur interpolée du triangle.

Compiler et lier le programme : Compilez les shaders, créez un programme, attachez les shaders au programme et liez le programme à l'aide des fonctions gl.createShader, gl.attachShader, et gl.linkProgram.

Dessiner le triangle multicolore : Utilisez gl.drawArrays avec gl.TRIANGLES pour dessiner le triangle multicolore en utilisant les données de sommets et de couleurs.

### EPISODE 5 : FAIRE TOURNER LE TRIANGLE via WebGL 

source : https://www.youtube.com/watch?v=D3Z2mqxCN2g

NOTION -> une matrice (ou matrix en anglais):

#### definition : 


**Une matrice** est une structure mathématique qui organise des valeurs en lignes et en colonnes. Elle est utilisée pour effectuer des transformations géométriques comme la translation, la rotation et l'échelle sur des objets 2D ou 3D.

Dans la programmation graphique, les matrices 4x4 sont couramment utilisées pour représenter ces transformations. Elles permettent de combiner plusieurs opérations en une seule matrice, simplifiant ainsi les calculs.

Par exemple, imagine que tu veuilles déplacer, tourner et redimensionner un objet dans un jeu vidéo en 2D. Tu utiliserais une **matrice 4x4** pour regrouper ces opérations. La matrice te permet de "voir" l'objet sous différents angles et tailles tout en gardant en compte la vue 2D de l'écran.


---- IMPORTANT -----
En résumé, une matrice est une façon organisée de manipuler des opérations de transformation géométrique, comme la translation, la rotation et l'échelle, sur des objets 2D ou 3D dans un environnement graphique. Les **matrices 4x4** sont **utiles pour combiner plusieurs transformations en une seule**, tout en **tenant compte de la perspective 2D de l'écran.**


####exemple 
<!-- // ci-dessous un exemple de matrix ( matrice)
const matrix = [

    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1 // les coordonnées x, y et z peuvent être remplacés par un multiplicateur pour la ligne de cci- après : 

];

// matrix $[2, 3, 4, 1]; // les chiffres qui remplaceront x y et z (ligne 133) vont être les multiplicateurs de ceux dans le tableaux ligne 137. -->

#### installation : 

Mais c'est juste pour montrer ce qu'est une matrice/matrix

Nous allons nous faciliter la vie et utiliser une bibliothèque.


De ce fait, on aura besoin d'installer la bibliothèque glMatrix 

Donc voici les étapes :

1- commande terminal : npm install gl-matrix

 Attendez que l'installation soit terminée. Une fois terminée, la bibliothèque gl-matrix sera téléchargée et installée dans votre projet.

2- Dans votre code JavaScript où vous utilisez gl-matrix-min, vous pouvez l'importer comme ceci :

code : import * as glmatrix from 'gl-matrix';
