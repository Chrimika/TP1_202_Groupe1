var heureActuelle = new Date();
var debutJour = new Date();
var debutNuit = new Date();

debutJour.setHours(6, 0, 0);
debutNuit.setHours(19, 0, 0);

if (heureActuelle >= debutJour && heureActuelle < debutNuit) {
  document.body.style.backgroundImage = "url('img/savana.png')";
} else {
  document.body.style.backgroundImage = "url('img/savana_night.png')";
}
