const form3 = document.getElementById('FormSearch');

function ValidateSearch(){
  var Errores = 0;
  form3.classList.remove('is-invalid');
  
  // Recojo los valores del form y los guardo en las variables
  var Palabra = document.forms ["FormSearch"]["search"];

   // Condiciones de validacion
   if(Palabra.value == ""){
    Palabra.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Introduce a word to start the search"
    Errores ++; // si se cumple el if sumo 1 a errores
}if(!validar_palabra(Palabra.value)){
    Palabra.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Word must be at least 3 letters long"
    Errores ++; // si se cumple el if sumo 1 a errores
}
// si Errores es mayor a zero no se valida el formulario
if (Errores > 0){
    return false;
}else{
    return true;
}   
}
// EventListnere aplicado a todo el form

form3.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

// Validar palabra con 3+ caracters
function validar_palabra(palabra){
	var regex3 = /(?=.{3,})/;
	return regex3.test(palabra) ? true : false;
}
