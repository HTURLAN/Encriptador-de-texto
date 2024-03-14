const campo_texto = document.querySelector(".campo_texto");
const mensaje_procesado = document.querySelector(".campoMensaje");

const matriz_cambio = [
    ["e", "enter"], //La letra "e" es convertida para "enter"
    ["i", "imes"],  //La letra "e" es convertida para "enter"
    ["a", "ai"],    //La letra "a" es convertida para "ai"
    ["o", "ober"],  //La letra "o" es convertida para "ober"
    ["u", "ufat"]   //La letra "u" es convertida para "ufat"
];

function btnEncriptar() {
    const texto = encriptarTexto(campo_texto.value);
    console.log(texto);
    mensaje_procesado.value = texto;
    campo_texto.value = "";
}

function btnDesencriptar() {
    const texto = desencriptarTexto(campo_texto.value);
    //console.log(texto);
    mensaje_procesado.value = texto;
    campo_texto.value = "";
}

function btnCopiar() {
    campo_texto.value = mensaje_procesado.value;
    console.log(campo_texto.value);
    mensaje_procesado.value = "";
}

function encriptarTexto(textoDesencriptado) {

     for (let i = 0; i < matriz_cambio.length; i++) {
        if(textoDesencriptado.includes(matriz_cambio[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                matriz_cambio[i][0],
                matriz_cambio[i][1]);
        }
    }
    //console.log(textoDesencriptado);
    return textoDesencriptado;
}

function desencriptarTexto(textoEncriptado) {
    for (let i = matriz_cambio.length - 1 ; i > -1; i--) {
        if(textoEncriptado.includes(matriz_cambio[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_cambio[i][1],
                matriz_cambio[i][0]);
        }
    }
    //console.log(textoEncriptado);
    return textoEncriptado;
}
