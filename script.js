function capturarDatos() {
    //Hacemos referencia a los valores introducidos en cada input del formulario
    const nombre = document.getElementById("nombre").value
    const sexo = document.getElementById("sexo").value
    const edad = document.getElementById("edad").value
    const direccion = document.getElementById("direccion").value
    const curp = document.getElementById("curp").value
    const rfc = document.getElementById("rfc").value

    //Creamos constantes con arrays por cada resultado de valor
    const resultadoNombre = "Nombre: " + nombre;
    const resultadoSexo = "Genero: " + sexo;
    const resultadoEdad = "edad: " + edad;
    const resultadoDireccion = "Vives en: " + direccion;
    const resultadoCurp = "Curp: " + curp;
    const resultadoRfc = "RFC: " +  rfc;

    //Validamos cada valor ingresado
    const regnom = /^[a-zA-ZÀ-ÿ\s]+$/;//Que el nombre sean solo letras
    const regeda = /^(?:[1-9]|[1-9]\d|99)$/;//Que la edad sea un numero del 1 al 99
    const regcur =/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;//Que el curp tenga un formato oficial
    const regrfc = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/;//que el rfc tenga un formato oficial

    if (nombre.match(regnom)) {//Si la validación es verdadera:
        document.getElementById("resultadoNombre").innerHTML = resultadoNombre;//imprimimos el array en pantalla
        mensajeError("Exito")
    }
    else {//si no es verdadera:
        document.getElementById("resultadoNombre").innerHTML = ("Eso no es un nombre");//Mostramos el error en pantalla
    mensajeError("Me quieres ver la cara de estupida?")
    }

    if (edad.match(regeda)) {
        document.getElementById("resultadoEdad").innerHTML = resultadoEdad;
    } else {
        document.getElementById("resultadoEdad").innerHTML=("Introduce tu edad")
        mensajeError("Me quieres ver la cara de estupida?")
    }

    if (sexo != "") {
        document.getElementById("resultadoSexo").innerHTML = resultadoSexo;
    } else {
        document.getElementById("resultadoSexo").innerHTML=("Introducete está")
    }

    if (direccion != "") {
        document.getElementById("resultadoDireccion").innerHTML = resultadoDireccion;
    } else {
        document.getElementById("resultadoDireccion").innerHTML=("¿Donde vives?")
        mensajeError("Me quieres ver la cara de estupida?")
    }

    if (curp.match(regcur)) {
        document.getElementById("resultadoCurp").innerHTML = resultadoCurp;
    } else {
        document.getElementById("resultadoCurp").innerHTML=("Introduce un curp valido")
        mensajeError("Me quieres ver la cara de estupida?")
    }

    if (rfc.match(regrfc)) {
        document.getElementById("resultadoRfc").innerHTML = resultadoRfc;
    } else {
        document.getElementById("resultadoRfc").innerHTML=("Introduce un RFC valido")
        mensajeError("Me quieres ver la cara de estupida?")
    }
}

function mensajeError(mensaje) {
    // Obtener el modal
    const modal = document.getElementById("miModal");
    

    // Obtener el elemento de mensaje dentro del modal
    const mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = mensaje;

    // Mostrar el modal
    modal.style.display = "block";

    // Asignar un evento para cerrar el modal al hacer clic en la "x"
    const cerrar = document.getElementsByClassName("close")[0];
    cerrar.onclick = function() {
        modal.style.display = "none";
    }
}

