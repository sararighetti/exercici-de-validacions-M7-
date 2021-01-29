const form = document.getElementById('myForm');

function registerValidate() {
var Errores = 0;
form.classList.remove('is-invalid');

// Recojo los valores del form y los guardo en las variables
var inputUsername = document.forms["myForm"]["inputUsername"];
var inputEmail = document.forms["myForm"]["inputEmail"];
var inputPassword = document.forms["myForm"]["inputPassword"];
var inputPassword2 = document.forms["myForm"]["inputPassword2"];
var inputProvince = document.forms["myForm"]["inputProvince"];

// Username no vacio
	if(inputUsername.value == ""){
		inputUsername.classList.add("is-invalid");
		document.getElementById("usernameError").textContent ="This field is required";
		Errores ++; // si se cumple el "if" sumo 1 a errores
	}
// Email no vacio
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "This field is required";
	  Errores ++;
// Formato correcto del mail
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Invalid email format";
		Errores ++; 
	}
// Password no vacio
    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "This field is required";
		Errores ++;
	}
// Passowrd minimo 8 caracteres, 1 numero e 1 Mayuscula
	else if(!validar_password(inputPassword.value)){
    	inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "At least 8 characters, a number and a uppercase letter";
		Errores ++;
  }
  // Confirmation Password no vacio
  if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "This field is required";
		Errores ++;
// Confirmation Password igual a Password
	}else if(inputPassword2.value !== inputPassword.value){
    inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Confirmation password must be the same as password";
		Errores ++;
  }
// Provincia no vacio
    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "This field is required";
		Errores ++;
	}
    if (Errores > 0){
        return false;
    }else{
		return true;
	}
}
// EventListnere aplicado a todo el form
form.addEventListener('blur', (event) => {
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