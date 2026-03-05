const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const problema = document.querySelector("#problema").value;

    console.log(nombre);
    console.log(problema);
    
    alert("Reporte enviado correctamente");
})