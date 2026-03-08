let reportes = [];

const datosGuardados = localStorage.getItem("reportes");

if(datosGuardados){
    reportes = JSON.parse(datosGuardados);
}

const lista = document.getElementById("listaReportes");

reportes.forEach(function(reporte){

    const nuevoReporte = document.createElement("li");

    nuevoReporte.textContent = reporte.nombre + ": " + reporte.problema;

    const botónEliminar = document.createElement("button");
    botónEliminar.textContent = "Eliminar";

    
    botónEliminar.addEventListener("click", function(){

        nuevoReporte.remove();

        reportes = reportes.filter(function(r){
            return !(r.nombre === reporte.nombre && r.problema === reporte.problema);
        });

        localStorage.setItem("reportes", JSON.stringify(reportes));
    });

    nuevoReporte.appendChild(botónEliminar);

    lista.appendChild(nuevoReporte);
});

const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event){
    
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const problema = document.getElementById("problema").value;

    const reporte ={
        nombre: nombre,
        problema: problema
    };

    reportes.push(reporte);
    localStorage.setItem("reportes", JSON.stringify(reportes));

    const lista = document.getElementById("listaReportes");

    const nuevoReporte = document.createElement("li");

    nuevoReporte.textContent = nombre + ": "+ problema;

    lista.appendChild(nuevoReporte);

    formulario.reset();
    document.getElementById("nombre").focus();
})