//capturamos los datos ingresados por el usuario

function capturarDatos() {
    const nombre = document.getElementById("nombre").value
    const sexo = document.getElementById("sexo").value
    const edad = document.getElementById("edad").value
    const direccion = document.getElementById("direccion").value
    const curp = document.getElementById("curp").value
    const rfc = document.getElementById("rfc").value

console.log("Hola desde " + nombre);
console.log("Hola desde " + sexo);
console.log("Hola desde " + edad);
console.log("Hola desde " + direccion);
console.log("Hola desde " + curp);
console.log("Hola desde " + rfc);
}