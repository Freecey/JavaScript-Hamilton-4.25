/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    const img = document.querySelector("img")

    var x = img.getAttribute("src"); 
    var y = img.getAttribute("data-hover"); 
    //console.log(x);

    img.addEventListener("mouseover", () => {
        img.src = y;
    });
    img.addEventListener("mouseout", () => {
        img.src = x;
    });

    //console.log(img2);

    //const himage = document.getElementsByTagName("IMG");
    //console.log(himage)
  //  himage.src = document.getElementsByTagName("IMG").getAttribute("data-hover");
//    [0].currentSrc
    //document.getElementById("target").appendChild(himage);
    //document.getElementById("source").remove();

})();
