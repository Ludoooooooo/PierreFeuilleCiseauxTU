var joueur_1 = 0;
var joueur_2 = 0;
var score_1 = 0;
var score_2 = 0;

var Historique = [];


function choixaleatoire(){
    joueur_1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    joueur_2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var ajouter = [joueur_1, joueur_2];

    Historique.push(ajouter);
    for (var i = 0; i < Historique.length; i++) {
        console.log("Partie " + (i + 1) + " :", Historique[i]);
    }

    resultat();
}

function score(){
    if(score_1 == 2){
        console.log("Fin de la partie");
        console.log("Victoire du Joueur 1 !")
    }else if(score_2 == 2){
        console.log("Fin de la partie");
        console.log("Victoire du Joueur 2 !")
    }
}


function resultat(){
    switch (joueur_1) {
        case 1:
            switch (joueur_2) {
                case 1:
                    console.log("Égalité : les deux joueurs ont choisi pierre");
                    break;
                case 2:
                    console.log("Joueur 2 gagne la manche : pierre est recouverte par feuille");
                    score_2 += 1;
                    break;
                case 3:
                    console.log("Joueur 1 gagne la manche : pierre écrase les ciseaux");
                    score_1 += 1;
                    break;
            }
            break;
        case 2:
            switch (joueur_2) {
                case 1:
                    console.log("Joueur 1 gagne la manche : feuille recouvre la pierre");
                    score_1 += 1;
                    break;
                case 2:
                    console.log("Égalité : les deux joueurs ont choisi feuille");
                    break;
                case 3:
                    console.log("Joueur 2 gagne la manche : ciseaux coupent la feuille");
                    score_2 += 1;
                    break;
            }
            break;
        case 3:
            switch (joueur_2) {
                case 1:
                    console.log("Joueur 2 gagne la manche : pierre écrase les ciseaux");
                    score_2 += 1;
                    break;
                case 2:
                    console.log("Joueur 1 gagne la manche : ciseaux coupent la feuille");
                    score_1 += 1;
                    break;
                case 3:
                    console.log("Égalité : les deux joueurs ont choisi ciseaux");
                    break;
            }
            break;
        }

        score();
}



module.exports = {
    choixaleatoire,
    resultat,
    score
  };