/* ==========================================
   V3 GROUP OF BUSINESS
   HOME PAGE
========================================== */

const mobileNumber =
document.getElementById("mobileNumber");

const gamesCard =
document.getElementById("gamesCard");

const user =
JSON.parse(
localStorage.getItem("v3User")
);

if(user){

    mobileNumber.innerHTML =
    "📱 " + user.mobile;

}else{

    mobileNumber.innerHTML =
    "Guest User";

}

gamesCard.addEventListener(
"click",
function(){

    window.location.href =
    "games.html";

}
);
