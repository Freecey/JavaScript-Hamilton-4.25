/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    // Store
    
    // Retrieve
    
    let tvalue = localStorage.getItem("count");
    console.log(tvalue)
    

    let target = document.getElementById("target")
    /* tvalue = document.getElementById("target").innerText */
    let button = document.getElementById("increment")

    target.innerText = tvalue

    button.addEventListener("click", function(){
        tvalue++
        console.log(tvalue)
        target.innerText = tvalue
        localStorage.setItem("count", tvalue);

    }
)



})();
