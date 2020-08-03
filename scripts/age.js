// Date de naissance
var dateNaissance = new Date(2002, 10, 22, 0, 0, 0, 0);

// Date du jour
var dateActuelle = new Date();

// Age en annees
var age = dateActuelle.getFullYear() - dateNaissance.getFullYear();

// Mois 
var mois = dateActuelle.getMonth() - dateNaissance.getMonth();

// Jour
var jour = dateActuelle.getDate() - dateNaissance.getDate();


if ( mois < 0 || mois == 0 && jour < 0 ) {
    age--;
}

document.getElementById("age").innerHTML = age;    