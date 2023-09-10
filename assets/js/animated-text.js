const texts = ["¡Bienvenido al futuro!", "Tu visión, nuestra misión", "Tecnología, Pasión y Visión"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typed-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Este tiempo es el que esperará antes de empezar a escribir el siguiente texto.
    } else {
        setTimeout(type, 120); // Este tiempo controla la rapidez con la que se escriben las letras.
    }
}());
