function resoudreEquation() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("resultat").textContent =
      "Les coefficients doivent être des nombres réels.";
  } else {
    const resultat = resoudreEquationQuadratique(a, b, c);
    let message = "";
    let speed = "";
    var x1 = "";
    var x2 = "";
    const vitesse = resultat.vitesse;
    console.log(vitesse);
    localStorage.setItem("vitesse", vitesse);
    if (resultat.discriminantPositif) {
      speed = resultat.vitesse;
      x1 = resultat.solutions[0];
      x2 = resultat.solutions[1];
      window.location.href = "dino.html";
    } else {
      speed = resultat.vitesse;
      x1 = resultat.solutions[0];
      x2 = resultat.solutions[1];
      window.location.href = "ptero.html";
    }
    document.getElementById("vitesse").textContent = speed;
    document.getElementById("x1").textContent = x1;
    document.getElementById("x2").textContent = x2;
  }
}

function resoudreEquationQuadratique(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  let solutions = [];
  let discriminantPositif = true;
  let vitesse = 0;

  if (discriminant >= 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    solutions.push(x1);
    solutions.push(x2);
    vitesse = Math.sqrt(x1 * x1 + x2 * x2);
  } else {
    discriminantPositif = false;
    let x = -b / (2 * a);
    let y = Math.sqrt(-discriminant) / (2 * a);
    let z1 = x + " + i" + y;
    let z2 = x + " - i" + y;
    solutions.push(z1);
    solutions.push(z2);
    vitesse = Math.sqrt(x * x + y * y);
  }

  const resultat = {
    solutions: solutions,
    discriminantPositif: discriminantPositif,
    vitesse: vitesse,
  };

  return resultat;
}

/*parcours du dino*/
var elem = document.getElementById("telem");
var position = 0;
var vitesse = localStorage.getItem('vitesse');

moveElement();

function moveElement() {
  position += parseInt(vitesse);
  elem.style.left = position + "px";
  requestAnimationFrame(moveElement);
}


/*parcours du ptero*/
var vitessePtera = parseInt(vitesse)*3;
var pelem = document.getElementById("elem");
var Duration = vitessePtera+'s';
console.log(Duration);
pelem.style.animationDuration = Duration;