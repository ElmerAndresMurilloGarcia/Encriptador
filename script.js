const cajaTexto = document.querySelector(".caja-texto");
const respuesta = document.querySelector(".respuesta");
const muneco = document.querySelector(".muneco")
const primerMensaje = document.querySelector(".primer-mensaje")
const segundoMensaje = document.querySelector(".segundo-mensaje")

function btnEncriptar(){
    ocultar();
    const textoEncriptado = encriptar(cajaTexto.value);
    respuesta.value = textoEncriptado;
    cajaTexto.value = "";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(cajaTexto.value);
    respuesta.value = textoDesencriptado
    cajaTexto.value = "";
}

function encriptar(stringEncriptado){
    let encriptarTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < encriptarTexto.length; i++){
        if(stringEncriptado.includes(encriptarTexto[i][0])){
            let regex = new RegExp(encriptarTexto[i][0], 'g');
            stringEncriptado = stringEncriptado.replace(regex, encriptarTexto[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let desencriptarTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < desencriptarTexto.length; i++){
        if(stringDesencriptado.includes(desencriptarTexto[i][1])){
            let regex = new RegExp(desencriptarTexto[i][1], 'g');
            stringDesencriptado = stringDesencriptado.replace(regex, desencriptarTexto[i][0])
        }
    }
    return stringDesencriptado
}

const btnCopiar = document.querySelector(".btn-copiar");
const textoCopiado = document.querySelector(".respuesta");

btnCopiar.addEventListener( 'click', copyTtext );

function copyTtext(e) {    
    e.preventDefault();
    
    navigator.clipboard.writeText(textoCopiado.value)
        .then( () => {
            btnCopiar.textContent = "Copiado";

            setTimeout( () => {
                btnCopiar.textContent = "Copiar";
            }, 3000)
        } )
}

function copyTtext(e) {    
    e.preventDefault();
    
    navigator.clipboard.writeText(textoCopiado.value)
        .then( () => {
            alert("Copiado al portapapeles: " + textoCopiado.value);
            textoCopiado.value = '';
        } )
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function ocultar (){
    muneco.classList.add("ocultar");
    primerMensaje.classList.add("ocultar");
    segundoMensaje.classList.add("ocultar");
}