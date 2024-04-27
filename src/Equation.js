function resoudreEquationQuadratique(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    let solutions = [];
    let discriminantPositif = true;
    let vitesse=0;

    if (discriminant >= 0) {
        let x1=(-b + Math.sqrt(discriminant)) / (2 * a);
        let x2=(-b - Math.sqrt(discriminant)) / (2 * a);
        solutions.push(x1);
        solutions.push(x2);
        vitesse=Math.sqrt(x1*x1+x2*x2);
    } else {
        discriminantPositif = false;
        let x=-b/(2*a);
        let y=Math.sqrt(-discriminant) / (2 * a);
        let z1=x+' + i'+y;
        let z2=x+' - i'+y
        solutions.push(z1);
        solutions.push(z2);
        vitesse=Math.sqrt(x*x+y*y);
    }

    const resultat = {
        solutions: solutions,
        discriminantPositif: discriminantPositif,
        vitesse: vitesse
    };

    return resultat;
}

function resoudreEquation() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultat').textContent = 'Les coefficients doivent être des nombres réels.';
    } else {
        const resultat = resoudreEquationQuadratique(a, b, c);
        let message = '';

        if (resultat.discriminantPositif) {
            message = 'Solutions réelles : ' + resultat.solutions.join(' ; ')+'   Viteese = '+resultat.vitesse;
        } else {
            message = 'Solutions complexes : '+resultat.solutions.join(' ; ')+'   Viteese = '+resultat.vitesse;
        }
        document.getElementById('resultat').textContent = message;
        
    }
}