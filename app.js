const form = document.querySelector('.form');
let tableauResultats = [];
const reponses = ['c','b','c','a','b'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h5');
const noteResultat = document.querySelector('.note');
const comResultat = document.querySelector('.message');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {

    for(let i = 0; i < 5; i++){

        if(tabResultats[i] === reponses[i]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    console.log(verifTableau);
    afficherRésultat(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}


function afficherRésultat(tabCheck) {

    const nbDeFaute = tabCheck.filter(el => el === false).length;
    console.log(nbDeFaute);

    switch(nbDeFaute){

        case 0:
            titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans faute ${emojis[0]}`;
            comResultat.innerText = "";
            noteResultat.innerText = "5/5";
        break;
        case 1:
            titreResultat.innerText = `${emojis[1]} Vous y êtes presque ! ${emojis[1]}`
            comResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `${emojis[1]} Encore un effort ... ${emojis[2]}`
            comResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `${emojis[2]} Il reste quelques erreurs. ${emojis[3]}`
            comResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `${emojis[3]} Peux mieux faire ! ${emojis[3]}`
            comResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `${emojis[4]} Peux mieux faire ! ${emojis[4]}`
            comResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            "Une erreur s'est produite";

    }

    comResultat.classList = "text-center";
    noteResultat.classList = "text-center font-weight-bold"


}

function couleursFonction(tabBool) {

    for(let j = 0; j < tabBool.length; j++){

        if(tabBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';

        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            setTimeout(() => {
                toutesLesQuestions[j].style.background = '#ffffff'
            },2500)

        }

        
    }



}
