/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
/*
    const promiseGetPosts = new Promise(function(resolve, reject) {
        if (POSTS !== 'undefined') {
            resolve(POSTS);
        } else {
            reject(error);
        }
    });

    promiseGetPosts
*/





document.querySelector("#run").addEventListener("click", function () {
    window.lib.getPosts()
    .then((resolve) => {
        console.table(resolve);
    })
    .catch((reject) => {
        console.error(reject);
    });
    
    
  });
    

})();
