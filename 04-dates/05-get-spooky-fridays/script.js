/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

  

    document.getElementById("run").addEventListener("click", function () {


        let sel_year = document.getElementById("year").value;


        function numberOfFridaythe13thsIn(syear) {
            var count = 0;
            for (var month=0; month<12; month++) {
                var d = new Date(syear,month,13);
                if(d.getDay() == 5){
                    console.log(d)
                  count++;
               }
            }
            return count;                            
        }
        
        console.log(numberOfFridaythe13thsIn(sel_year));
        

/*
        let d = new Date();
        d.setDate(13);
        d.setMonth(0);
        d.setFullYear(sel_year)
        d = d.addMonths(1)
        console.log("year tested :"+d);
        
        for ( d.setMonth=0; d.setMonth<12; d.addMonths(1) ) {
            console.log("checked date :"+d);
            if (d.getDay = 5)
            { console.log(d.getDay)}

        }
*/

    })

})();


