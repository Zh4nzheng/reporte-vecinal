const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const problema = document.getElementById("problema").value;

    const lista = document.getElementById("listaReportes");

    const nuevoReporte = document.createElement("p");

    nuevoReporte.textContent = nombre + ": "+ problema;

    lista.appendChild(nuevoReporte);

    alert("Reporte enviado correctamente");

    formulario.reset();
    document.getElementById("nombre").focus();
})