function calcularTotal() {
    var formulario = document.getElementById("calcular")

    var nombre  = formulario.nombre.value;
    var email   = formulario.email.value;

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
    else if (marca === "honda") {
        
    }
    else if (marca === "nissan") {
    
    }
    else if (marca === "toyota") {
    }
    else if (marca === "mazda") {
    }
    else if (marca === "hyundai") {

    }
    else if (marca === "kia") {

    }
    else if (marca === "mitsubishi") {

    }
    else if (marca === "suzuki") {

    }



    


}