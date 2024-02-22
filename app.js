const campo_texto = document.querySelector("#texto-original");
const mensaje_procesado = document.querySelector("#texto-procesado");
const mensaje_encriptado = [];

const matriz_cambio = [
    ["e", "enter"], //La letra "e" es convertida para "enter"
    ["i", "imes"],  //La letra "e" es convertida para "enter"
    ["a", "ai"],    //La letra "a" es convertida para "ai"
    ["o", "ober"],  //La letra "o" es convertida para "ober"
    ["u", "ufat"]   //La letra "u" es convertida para "ufat"
];


function btnEncriptar() {
    const texto = encriptarTexto(campo_texto.value);
    //console.log(texto);
}

function encriptarTexto(textoDesencriptado) {

     for (let i = 0; i < matriz_cambio.length; i++) {
        if(textoDesencriptado.includes(matriz_cambio[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                matriz_cambio[i][0],
                matriz_cambio[i][1]);
        }
    }
    console.log(textoDesencriptado);
    return textoDesencriptado;
}