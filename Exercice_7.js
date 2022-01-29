function affichage() {
    // Sélectionner l'élément input et récupérer sa valeur
    var pointure = document.getElementById("shoeSize").value;
    var annee = document.getElementById("yearOfBirth").value;

    //calcul
    let calcul = (pointure*2+5)*50-annee+1766
    // Afficher le résultat du calcul
    alert(calcul);
}