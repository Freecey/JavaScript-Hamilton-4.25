/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    

    document.querySelector("#run").addEventListener("click", () => {
        

        let heroid = Number(document.getElementById("hero-id").value)

        fetch("http://localhost:3000/heroes")
          .then(function (dataHeroes) {
            
            return dataHeroes.json();
            
          })
          .then(function (dataHeroes) {

            const selecthero = dataHeroes.find( hero => hero.id === heroid);
            console.log(selecthero)


            removedataHeroes = dataHeroes.splice(selecthero.id-1 , 1);
            
            console.log(dataHeroes)




          });
      });
})();
