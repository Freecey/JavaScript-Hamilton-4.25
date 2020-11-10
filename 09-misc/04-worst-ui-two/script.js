/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let part1 = document.getElementById("part-one");
    let part2 = document.getElementById("part-two");
    let part3 = document.getElementById("part-three");
    let part4 = document.getElementById("part-four");
    let target = document.getElementById("target");
      

    let new_value
    

    function coolone(partX) {


    partX.addEventListener("click", function() {
        act_value = parseInt(partX.innerText)
        min = parseInt(partX.getAttribute("data-min"))
        max = parseInt(partX.getAttribute("data-max")) 

        if ( new_value == max) 
            { new_value = min  }
        else {
            new_value = parseInt(partX.innerText)
            new_value = new_value+1 
        }

        if ( new_value <= max) {
            if ( new_value.toString().length == 1 )
                { new_value = "0"+new_value}
            
            partX.innerText = new_value;
            target.innerText = "+32-"+part1.innerText+"-"+part2.innerText+"."+part3.innerText+"."+part4.innerText;
            new_value = parseInt(new_value)
            console.log("val actuel = "+new_value)
        }

    })
    }

    coolone(part1)
    coolone(part2)
    coolone(part3)
    coolone(part4)
    

    

})();
