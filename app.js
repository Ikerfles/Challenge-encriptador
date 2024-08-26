// Encriptado
function encriptar(){
    // Declaración de variables

    let texto = document.getElementById("encriptador__entrada__texto").value.trim();
    let textoConFuncion = "";

    const vocales = ["a", "e", "i", "o", "u"];
    const vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
    const textoConMayusculas = /[A-Z]/.test(texto);
    const textoConAcentos = /[áéíóúüÁÉÍÓÚÜ]/.test(texto);

    // Si no hay texto no se hace ninguna operación
    if (texto === ""){
        alert("No se ha ingresado ningún texto");
        return;
    }

    // Si existen mayúsculas se manda una alerta y no se hace ninguna operación
    else if (textoConMayusculas) {
        alert("No se permiten letras mayúsculas en el texto.");
        return;
    }

    // Si existen acentos se manda una alerta y no se hace ninguna operación
    else if (textoConAcentos) {
        alert("No se permiten acentos en el texto.");
        return;
    }

    // Iniciando lectura del texto ingresado para verificar coincidencias
    for (let i = 0; i < texto.length; i++){
        let coincidencia = false;

        // Si encuentra coincidencias se reemplaza las vocales por vocales encriptadas
        for (let j = 0; j < vocales.length; j++){
            if (texto[i] === vocales[j]){
                textoConFuncion += vocalesEncriptadas[j];
                coincidencia = true;
                break;
            }
        }

        // Si no hay coincidencias el texto se mantiene igual
        if (!coincidencia){
            textoConFuncion += texto[i];
        }
    }   
    
    // Visualización de encriptado y del botón de copiar
    document.getElementById("encriptador__salida__texto").style.display = "block";
    document.getElementById("encriptador__salida__texto").textContent = textoConFuncion;
    document.getElementById("encriptador__salida__boton").style.display = "block";
    document.getElementById("encriptador__salida__boton__copiar").style.display = "block";
    document.getElementById("encriptador__salida__mensaje").style.display= "none";
}

// Desencriptar
function desencriptar(){
    // Declaración de variables

    let texto = document.getElementById("encriptador__entrada__texto").value.trim();
    let textoConFuncion = "";

    const vocales = ["a", "e", "i", "o", "u"];
    const vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
    const textoConMayusculas = /[A-Z]/.test(texto);
    const textoConAcentos = /[áéíóúüÁÉÍÓÚÜ]/.test(texto);

    // Si no hay texto no se hace ninguna operación
    if (texto === ""){
        alert("No se ha ingresado ningún texto");
        return;
    }
    // Si existen mayúsculas se manda una alerta y no se hace ninguna operación
    else if (textoConMayusculas) {
        alert("No se permiten letras mayúsculas en el texto.");
        return;
    }

    // Si existen acentos se manda una alerta y no se hace ninguna operación
    else if (textoConAcentos) {
        alert("No se permiten acentos en el texto.");
        return;
    }

    // Iniciando lectura del texto indicado para verificar coincidencias
    for (let i = 0; i < texto.length; i++){
        let coincidencia = false;

    // Si encuentra coincidencias se reemplaza las vocales por vocales encriptadas
        for (let j = 0; j < vocalesEncriptadas.length; j++){
            if (texto.slice(i, i + vocalesEncriptadas[j].length) === vocalesEncriptadas[j]){
                textoConFuncion += vocales[j];
                i += vocalesEncriptadas[j].length - 1;
                coincidencia = true;
                break;
            }
        }

    // Si no hay coincidencias el texto se mantiene igual
        if (!coincidencia){
            textoConFuncion += texto[i];
        }
    }   
    
    // Visualización de desencriptado y del botón de copiar
    document.getElementById("encriptador__salida__texto").style.display = "block";
    document.getElementById("encriptador__salida__texto").textContent = textoConFuncion;
    document.getElementById("encriptador__salida__boton").style.display = "block";
    document.getElementById("encriptador__salida__boton__copiar").style.display = "block";
    document.getElementById("encriptador__salida__mensaje").style.display= "none";
}

// Limpiar texto cuando se cargue la página
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("encriptador__entrada__texto").value = "";
});

// Copiar texto al portapapeles
function copiarTexto() {
    let texto = document.getElementById("encriptador__salida__texto").textContent;
    navigator.clipboard.writeText(texto);
}

// Botones
function botones(){
    // Botón Encriptar
    document.addEventListener("DOMContentLoaded",function(){
        const botonEncriptar = document.getElementById("encriptador__entrada__botones__boton__encriptar");
        botonEncriptar.addEventListener("click", encriptar); 
    });

    // Botón Desencriptar
    document.addEventListener("DOMContentLoaded",function(){
        const botonDesencriptar = document.getElementById("encriptador__entrada__botones__boton__desencriptar");
        botonDesencriptar.addEventListener("click", desencriptar);  
    });

    // Botón Copiar  
    document.addEventListener("DOMContentLoaded",function(){
        const botonCopiar = document.getElementById("encriptador__salida__boton__copiar");
        botonCopiar.addEventListener("click", copiarTexto);
    });
}

botones();