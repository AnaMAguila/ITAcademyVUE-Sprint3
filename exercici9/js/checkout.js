
//He quitado el onclick del botón
//hago un listener del formulario

window.addEventListener('load', ()=> {
    var form = document.querySelector('.form');

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  


	form.addEventListener('submit', (e) => {
			e.preventDefault();
			validate();
	})

	// Exercise 6
	function validate() {
		var error = 0;	

		// Validate fields entered by the user: name, phone, password, and email

		//Validate name and lastname
		var validLetters = /^[A-Za-z\s]+$/;

		if(fName.value.length < 3 || !validLetters.test(fName.value)){
			error++;
			// errorName.style.display = "block";
			fName.classList.add('is-invalid');
		}else{
			fName.classList.remove('is-invalid');
		}

		if(fLastN.value.length < 3 || !validLetters.test(fLastN.value)){
			error++;
			fLastN.classList.add('is-invalid');
		}else{
			fLastN.classList.remove('is-invalid');
		}

		//Validate email
		var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
				
		if(fEmail.value.length < 3 || !validEmail.test(fEmail.value)){
			error++;
			fEmail.classList.add('is-invalid');
		}else{
			fEmail.classList.remove('is-invalid');
		}

		//Validate address
		if(fAddress.value.length < 3){
			error++;
			fAddress.classList.add('is-invalid');
		}else{
			fAddress.classList.remove('is-invalid');
		}

		//Validate password
		var validPassword = /^[a-zA-Z0-9]+$/;

		if(fPassword.value.length < 3 || !validPassword.test(fPassword.value)){
			error++;
			fPassword.classList.add('is-invalid');
		}else{
			fPassword.classList.remove('is-invalid');
		}

		//Validate phone
		var validPhone = /^[0-9]+$/;

		if(fPhone.value.length < 3 || !validPhone.test(fPhone.value)){
			error++;
			fPhone.classList.add('is-invalid');
		}else{
			fPhone.classList.remove('is-invalid');
		}

		//Checkout inform is all is valid
		if(error==0){
			alert("Successful checkout");
		}
	}
})