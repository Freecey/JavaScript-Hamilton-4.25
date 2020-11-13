/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
            let template = document.getElementById("tpl-hero").content;            
            let location = document.getElementById("target");


            const selecthero = dataHeroes.find( hero => hero.id === heroid);

            let templateClone = template.cloneNode(true);
    
            templateClone.querySelector(".name").innerHTML = selecthero.name;
            templateClone.querySelector(".alter-ego").innerHTML = selecthero.alterEgo;
            templateClone.querySelector(".powers").innerHTML = selecthero.abilities.join(", ");
            location.appendChild(templateClone);

          });
      });
})();
