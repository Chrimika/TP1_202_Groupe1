var heureActuelle=new Date();
var debutJour=new Date();
var debutNuit=new Date();

debutJour.setHours(6,0,0);
debutNuit.setHours(19,0,0);

if(heureActuelle>=debutJour && heureActuelle<debutNuit){ changerMode(true);}
else { changerMode(false);}

function applyCss(codeCss, mode){
    var styleELement=document.createElement("style");
    var csscode = codeCss;
    styleELement.appendChild(document.createTextNode(csscode));
    document.head.appendChild(styleELement);

    document.getElementById("mode").innerText=mode;
}

function changerMode(jour){
    if(jour===true){applyCss("*{background:white; color:black;}", "il fait jour");}
    else{applyCss("*{background:black; color:white;}", "il fait nuit");}
}

