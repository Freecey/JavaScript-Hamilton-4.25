/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const cdate = new Date();
    const userLang = navigator.language || navigator.userLanguage; 

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:  "2-digit", minute: "2-digit" };

/*alert(cdate.toLocaleDateString('en-DK', options)); */
//document.getElementById("target").innerHTML = cdate.toLocaleDateString('en-BE', options);
document.getElementById("target").innerHTML = cdate.toLocaleDateString(userLang, options);




})();
