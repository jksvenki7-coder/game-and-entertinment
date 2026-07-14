/* ======================================
   V3 GROUP OF BUSINESS
   HOME PAGE
====================================== */

*{

    margin:0;

    padding:0;

    box-sizing:border-box;

    font-family:Arial, Helvetica, sans-serif;

}

body{

    background:linear-gradient(
        135deg,
        #0f172a,
        #1e3a8a,
        #2563eb
    );

    min-height:100vh;

    padding:20px;

}

.container{

    max-width:1200px;

    margin:auto;

}

header{

    text-align:center;

    margin-bottom:30px;

}

header h1{

    color:#ffffff;

    font-size:34px;

    margin-bottom:10px;

}

header p{

    color:#dbeafe;

    font-size:18px;

}

.welcome{

    background:rgba(255,255,255,.15);

    backdrop-filter:blur(15px);

    border-radius:20px;

    padding:20px;

    text-align:center;

    margin-bottom:30px;

    border:1px solid rgba(255,255,255,.2);

}

.welcome h2{

    color:#ffffff;

    margin-bottom:10px;

}

#mobileNumber{

    color:#dbeafe;

    font-size:18px;

    font-weight:bold;

}

.menu{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

    gap:20px;

}

.card{

    background:rgba(255,255,255,.15);

    backdrop-filter:blur(15px);

    border-radius:20px;

    padding:25px;

    cursor:pointer;

    transition:.3s;

    border:1px solid rgba(255,255,255,.2);

    text-align:center;

}

.card:hover{

    transform:translateY(-8px);

    background:rgba(255,255,255,.22);

}

.card h3{

    color:#ffffff;

    margin-bottom:12px;

    font-size:22px;

}

.card p{

    color:#dbeafe;

    font-size:16px;

}

.coming{

    opacity:.8;

}

@media(max-width:768px){

    header h1{

        font-size:28px;

    }

    .menu{

        grid-template-columns:1fr;

    }

}
