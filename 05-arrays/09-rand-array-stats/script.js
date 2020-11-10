/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here




    document.getElementById("run").addEventListener("click", function () {

        let randnum = []
        let tennum = []

        for (i = 0; i < 10; i++) {
            randnum = Math.floor(Math.random() * 100);
            tennum.push(randnum);
            document.getElementById(`n-${i+1}`).innerHTML = randnum;
        }
        console.log(tennum); /* juste for check */

        order = tennum.sort();

        let smallest = Math.max(...tennum)
        let biggest  = Math.max(...tennum)
        let sum = tennum.reduce((a, b) => {
            return a + b;
        });
        let average = sum/10;

/*
        console.log(order[0])
        console.log(order[9])
        console.log(sum)
        console.log(average) */

        document.getElementById("min").innerHTML = smallest;
        document.getElementById("max").innerHTML = biggest;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;

    })

})();
