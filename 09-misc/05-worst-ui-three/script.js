/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
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

    let fpart1 = document.getElementById("fix-part-one");
    let fpart2 = document.getElementById("fix-part-two");
    let fpart3 = document.getElementById("fix-part-three");
    let fpart4 = document.getElementById("fix-part-four");

    let cvalue1 = "000"
    let cvalue2 = "00"
    let cvalue3 = "00"
    let cvalue4 = "00"

    let partX
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

   function randx(fpartX, partX) {
            setInterval(function(){ 
//           
            min = parseInt(partX.getAttribute("data-min"))
            max = parseInt(partX.getAttribute("data-max")) 
            //console.log(max)
            //console.log(min)
            randnum = getRandomInt(min, max)
            console.log("rand val = "+randnum)
            if ( randnum.toString().length == 1)
                { randnum = "0"+randnum;
                partX.value = randnum; 
            }
            else {
                partX.value = randnum; 
            }

            fpart1.addEventListener("click", function() {
            clearInterval()
            cvalue1 = part1.value
            target.innerHTML = "+32-"+cvalue1+"-"+cvalue2+"."+cvalue3+"."+cvalue4;
            })

            fpart2.addEventListener("click", function() {
            clearInterval()
            cvalue2 = part2.value
            target.innerHTML = "+32-"+cvalue1+"-"+cvalue2+"."+cvalue3+"."+cvalue4;
            })

            fpart3.addEventListener("click", function() {
            clearInterval()
            cvalue3 = part3.value
            target.innerHTML = "+32-"+cvalue1+"-"+cvalue2+"."+cvalue3+"."+cvalue4;
            })
        
            fpart4.addEventListener("click", function() {
            clearInterval()
            cvalue4 = part4.value
            target.innerHTML = "+32-"+cvalue1+"-"+cvalue2+"."+cvalue3+"."+cvalue4;
            })


      } ,100)
    }



//console.log(part3)

    randx(fpart1, part1)
    randx(fpart2, part2)
    randx(fpart3, part3)
    randx(fpart4, part4)

//toto = getRandomInt(25, 50)
//console.log(toto)

/*
    partX.addEventListener("click", function() {
        act_value = parseInt(partX.innerText)
        min = parseInt(partX.getAttribute("data-min"))
        max = parseInt(partX.getAttribute("data-max")) 
        new_value = parseInt(partX.innerText)
        new_value = new_value+1
        if ( new_value <= max) {
            if ( new_value.toString().length == 1 )
                { new_value = "0"+new_value}
            partX.innerText = new_value;
            target.innerText = "+32-"+part1.innerText+"-"+part2.innerText+"."+part3.innerText+"."+part4.innerText;
            new_value = parseInt(new_value)
            console.log("val actuel = "+new_value)
        }
        else {new_value = min}
    })
    }

    coolone(part1)
    coolone(part2)
    coolone(part3)
    coolone(part4)
    
*/

})();
