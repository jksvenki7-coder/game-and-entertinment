/* ==========================================
   V3 GROUP OF BUSINESS
   LOGIN PAGE
========================================== */

const loginBtn = document.getElementById("loginBtn");

const mobileInput = document.getElementById("mobile");

loginBtn.addEventListener("click", loginUser);

mobileInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        loginUser();

    }

});

function loginUser(){

    const mobile = mobileInput.value.trim();

    if(mobile === ""){

        alert("Please enter your mobile number.");

        mobileInput.focus();

        return;

    }

    if(!/^[6-9][0-9]{9}$/.test(mobile)){

        alert("Please enter a valid 10-digit mobile number.");

        mobileInput.focus();

        return;

    }

    const user = {

        mobile : mobile

    };

    localStorage.setItem(
        "v3User",
        JSON.stringify(user)
    );

    window.location.href = "home.html";

}
