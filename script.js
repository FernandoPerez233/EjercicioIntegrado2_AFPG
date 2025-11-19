function calcularTotal() {
    var formulario = document.getElementById("calcular");

    var nombre  = formulario.nombre.value;
    var email   = formulario.correo.value;

    if (nombre === "" || email === "") {
        alert("Por favor, complete los campos de Nombre y Email.");
        return;
    }

    var financiamiento = formulario.financiamiento.value;

    if(financiamiento !== "credito" && financiamiento !== "contado"){
        alert("Por favor, seleccione una opción de financiamiento.");
        return;
    }

    
    var extras = document.querySelectorAll('input[name="extras"]:checked');
    if (extras.length > 0) {
        alert("Has seleccionado " + extras.length + " extra(s). /r/n  Tus extras son :" + extras);
    }

    var marca = formulario.marca.value;
    if (marca === "") {
        alert("Por favor, seleccione una marca de vehículo.");
        return;
    }

    var totalExtras = 0;
    var textExtras = "";

    if (document.getElementById("aire").checked) {
        totalExtras = totalExtras;
        textExtras = textExtras + "- Aire acondicionado";
    }
    if (document.getElementById("gps").checked) {
        totalExtras = totalExtras;
        textExtras = textExtras + "- GPS";
    }
    if (document.getElementById("seguro").checked) {
        totalExtras = totalExtras;
        textExtras = textExtras + "- Incluir Seguro";
    }
    if (document.getElementById("quemacocos").checked) {
        totalExtras = totalExtras;
        textExtras = textExtras + "- Quemacocos";
    }
    if (document.getElementById("camara-trasera").checked) {
        totalExtras = totalExtras;
        textExtras = textExtras + "- Cámara trasera";
    }
    if (document.getElementById("camara-frontal").checked) {
        totalExtras = totalExtras;
        textExtras = textExtras + "- Cámara frontal";
    }

    var mensaje = "===== COTIZACIÓN =====\n\n" +
                  "Nombre: " + nombre + "\n" +
                  "Email: " + email + "\n" +
                  "Marca: " + marca + "\n" +
                  "Financiamiento: " + financiamiento + "\n\n" ;

    if (textExtras !== "") {
        mensaje = mensaje + "\nExtras:\n" + textExtras;
    } else {
        mensaje = mensaje + "Extras: Ninguno\n";
    }


    var html = "<p>" + mensaje.replace(/\n/g, "<br>") + "</p>";
    document.getElementById('contenido-cotizacion').innerHTML = html;
    document.getElementById('cotizacion-resultado').style.display = 'block';

}