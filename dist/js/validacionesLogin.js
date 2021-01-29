const form1 = document.getElementById('FormLogin');

function LoginValidate(){
  var Errores = 0;
  form1.classList.remove('is-invalid');
  
  // Recojo los valores del form y los guardo en las variables
  var Username = document.forms ["FormLogin"]["username"];
	var Email = document.forms["FormLogin"]["Email"];
  var Password = document.forms["FormLogin"]["Password1"]; 

  // Condiciones de validacion

  // Username no vacio
  if(Username.value == ""){
    Username.classList.add("is-invalid");
    document.getElementById("errorUsername").textContent = "This field is required"
    Errores ++; // si se cumple el if sumo 1 a errores
  }
  // Email no vacio
  if(Email.value == "") {
		Email.classList.add("is-invalid");
		document.getElementById("errorEmail1").textContent = "This field is required";
      Errores ++; //si se cumple el if sumo 1 a errores

  // Correcto formato del mail - llamo a la funcion validar mail
    }else if(!validar_email(Email.value)){
		Email.classList.add("is-invalid");
		document.getElementById("errorEmail1").textContent = "Invalid email format";
		Errores ++; //si se cumple el else if sumo 1 a errores
	}
// Password no vacio
    if(Password.value == "") {
		Password.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "This field is required";
    Errores ++; //si se cumple el if sumo 1 a errores

// Password debe tener minimo 8 caracteres
	}else if(!validar_password(Password.value)){
    Password.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "At least 8 characters, a number and a uppercase letter";
		Errores ++; // si se cumple el else if sumo 1 a errores
  }
// si Errores es mayor a zero no se valida el formulario
    if (Errores > 0){
        return false;
    }else{
		return true;
	}
}
// EventListnere aplicado a todo el form
form1.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);
// Validacion formato mail 
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
// Validar password con 8+ caracters, 1 mayuscula y 1 numero
function validar_password(password){
	var regex2 = /(?=.*[A-Z])+(?=.*[0-9])+(?=.{8,})/;
	return regex2.test(password) ? true : false;
}
 
  