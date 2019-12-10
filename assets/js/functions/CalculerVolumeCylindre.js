function CalculerVolumeCylindre(rayon, hauteur) {
    if ((!isNaN(rayon) && !isNaN(hauteur)) && (rayon >= 0 && hauteur >= 0)) {
        return hauteur * Math.PI * rayon ** 2;
    }
    else {
        return false;
    }
}