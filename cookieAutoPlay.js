//cookie bot: auto-play-through cookie clicker
// Here, we just find the last stable release and load it.
console.log("### COOKIE clicker STABLE - linking to latest release"); 
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/repos/rahidz/CookieBot/releases/latest', false);
xhr.send();
var response = JSON.parse(xhr.responseText);
var latest = "https://cdn.jsdelivr.net/rahidz/CookieBot/" + response.tag_name + "/cookieAutoPlayBeta.js"
console.log("### LOADING FROM " + latest); 
Game.LoadMod(latest);
