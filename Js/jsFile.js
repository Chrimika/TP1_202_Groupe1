var heureActuelle = new Date();
var debutJour = new Date();
var debutNuit = new Date();

debutJour.setHours(6, 0, 0);
debutNuit.setHours(18, 0, 0);

if (heureActuelle >= debutJour && heureActuelle < debutNuit) {
  changerMode(true);
} else {
  changerMode(false);
}

function applyCss(codeCss, mode) {
  var styleELement = document.createElement("style");
  var csscode = codeCss;
  styleELement.appendChild(document.createTextNode(csscode));
  document.head.appendChild(styleELement);

  document.getElementById("mode").innerText = mode;
}

function changerMode(jour) {
  if (jour === true) {
    applyCss("body{background-image:url('img/body_bg.png');background-size: contain;background-repeat: no-repeat;background-position: center; color:black;}", "il fait jour");
  } else {
    applyCss("body{background-image:url('img/body_bg_night.png');background-size: contain;background-repeat: no-repeat;background-position: center; color:white;} *{background-color: #151616} .core{background-color: #151616} ", "il fait nuit");
  }
}
