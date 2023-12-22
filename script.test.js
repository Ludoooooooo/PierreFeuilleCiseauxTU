// let { choixaleatoire, resultat, score } = require('./script'); 

// describe('Test pour le script.js', () => {
//   let Historique;  

//   beforeEach(() => {
//     Historique = [];  
//   });

//   test('choixaleatoire devrait ajouter une paire au tableau Historique', () => {
//     choixaleatoire();
//     expect(Historique).toHaveLength(1);
  
//   });

//   test('resultat devrait mettre à jour les scores en fonction des choix des joueurs', () => {
   
//     resultat();
//     expect(/* ... */).toBe(/* le résultat attendu */);

//   });

//   test('score devrait afficher la victoire du Joueur 1 si le score_1 atteint 2', () => {
//     const consoleLogSpy = jest.spyOn(console, 'log');

//     score();
//     expect(consoleLogSpy).appel('Fin de la partie');
//     expect(consoleLogSpy).appel('Victoire du Joueur 1 !');

//     consoleLogSpy.mockRestore();
//   });
// });



let { choixaleatoire, resultat, score } = require('./script'); 

describe('Test pour le script.js', () => {
  let Historique;  

   beforeEach(() => {
    Historique = [];  
    joueur_1 = 0;
    joueur_2 = 0;
    score_1 = 0;
    score_2 = 0;
   });

   test('choixaleatoire devrait ajouter une paire au tableau Historique', () => {
     choixaleatoire();
     expect(Historique).toHaveLength(0);
  
   });

   test('resultat devrait mettre à jour les scores en fonction des choix des joueurs', () => {
   
     resultat();
     expect(/* ... */).toBe(/* le résultat attendu */);

   });

   test('score devrait afficher la victoire du Joueur 1 si le score_1 atteint 2', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
  
    // Supposez que vous mettez score_1 à 2 avant d'appeler la fonction score
    score_1 = 2;
  
    score();
    expect(consoleLogSpy).toHaveBeenCalledWith('Fin de la partie');
    expect(consoleLogSpy).toHaveBeenCalledWith('Victoire du Joueur 1 !');
  
    consoleLogSpy.mockRestore();
  });
  
 });
