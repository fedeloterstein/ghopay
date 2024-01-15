export function copyText(text: string) {
    // Crear un elemento de texto temporal
    var elementoTemp = document.createElement("textarea");
    // Asignar el texto al elemento temporal
    elementoTemp.value = text;
    // Asegurarse de que el elemento no sea visible
    elementoTemp.style.position = "absolute";
    elementoTemp.style.left = "-9999px";
    // Agregar el elemento al DOM
    document.body.appendChild(elementoTemp);
    // Seleccionar y copiar el texto al portapapeles
    elementoTemp.select();
    document.execCommand("copy");
    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemp);
}