/* <script type="text/javascript">

    /!*        Pour écrire : *!/

    window.document.write('Je fais du JS');

/!* Ici windows est un objet, on l'instencie, on affiche une de ses propriété ici "document" qui permet d'afficher du texte.*!/

document.write('Je fais du JS');

/!*        Il n'est pas obligatoire d'appeler l'objet ! (window)'*!/

</script>*/

/*Instencier une variable : */

/*var message = "Je fais du JS"*/

/* Concatenation : En Javascript l'opérateur de concatenation est le + !*/

/*message = '<h1>' + message + '</h1>';*/

/*J'affiche mon message ci dessous :*/

/*document.write(message)*/

/*Les boucles (For et conditions avec modulo): */

/*Ici on affiches tout les multiples de 9 de -1722 à 2756*/

/*
let message = '<ul>';

for (let i = -1722 ; i <= 2756 ; i++) {
    if (i % 9 === 0) {
    message += '<li>';
    message += i;
    message += '</li>';

    }
}

message += '</ul>';

/!*Alert à la même utilité que le Die*!/
alert('Aye !')

document.write(message);
*/

/* On initialise les variables avec prompt qui fait pop une fenetre pour rentrer un truck :
let valeur =  prompt('Veuillez saisir un nom')
let msg = '';

console.log(valeur);

On vérifie que isNaN (C'est à dire on vérifie que c'est un nombre ou pas) :

if (!isNaN(valeur)) {

    if(valeur > 0) { msg = 'Positif'; }
    else if(valeur <0) { msg ='Nefatif'; }
    else { msg ='Nul !'}

}

else msg = 'Un nombre j\'ai dit';

On ressort la valeur ci dessous :

document.write(msg);
*/

/*.On recupères l'id et on lui définit un type text*/

document.getElementById('truc').innerText = 'Coucou';

/*On récupères l'id et on lui définit une couleur via l'attribut style qui dit qu'on fait du css */

document.getElementById('truc').style.color = '#FF0000';

/*On récupères l'id et on lui définit un background color via l'attribut style qui dit qu'on fait du css */

document.getElementById('truc').style.backgroundColor = '#000';

