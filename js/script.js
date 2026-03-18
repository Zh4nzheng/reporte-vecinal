let reportes = [];

// Cargar datos del localStorage
const datosGuardados = localStorage.getItem("reportes");

if(datosGuardados){
    reportes = JSON.parse(datosGuardados);
}

// Función para crear y mostrar reportes
function crearReporte(reporte){
    const lista = document.getElementById("listaReportes");

    const nuevoReporte = document.createElement("li");
    nuevoReporte.textContent = reporte.nombre + ": " + reporte.problema;

    const botónEliminar = document.createElement("button");
    botónEliminar.textContent = "Eliminar";

    
    botónEliminar.addEventListener("click", function(){

        nuevoReporte.remove();

        reportes = reportes.filter(function(r){
            return !(r.id == reporte.id);
        });

        localStorage.setItem("reportes", JSON.stringify(reportes));
    });

    const botónEstado = document.createElement("button");
    botónEstado.textContent = "Marcar como resuelto";

    if(reporte.estado === "resuelto"){
        nuevoReporte.classList.add("resuelto");
        botónEstado.textContent = "Marcar como pendiente";
    }

    botónEstado.addEventListener("click",function(){

        if(reporte.estado === "pendiente"){
            reporte.estado = "resuelto";
            botónEstado.textContent = "Marcar como pendiente";
            nuevoReporte.classList.add("resuelto");
          } else {
            reporte.estado = "pendiente";
            botónEstado.textContent = "Marcar como resuelto";
            nuevoReporte.classList.remove("resuelto");
        }

        localStorage.setItem("reportes", JSON.stringify(reportes));
    })

    nuevoReporte.appendChild(botónEstado);
    nuevoReporte.appendChild(botónEliminar);
    lista.appendChild(nuevoReporte);
};

// Mostrar reportes guardados al cargar la página
reportes.forEach(function (reporte){
    crearReporte(reporte);
});

// Capturar formulario
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event){
    
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const problema = document.getElementById("problema").value;
    // Crear objeto con ID único
    const reporte ={
        id: Date.now(),
        nombre: nombre,
        problema: problema,
        estado: "pendiente"
    };
    // Guardar en array y localStorage
    reportes.push(reporte);
    localStorage.setItem("reportes", JSON.stringify(reportes));

    // Mostrar en pantalla
    crearReporte(reporte);

    // Resetear formulario
    formulario.reset();
    document.getElementById("nombre").focus();
})