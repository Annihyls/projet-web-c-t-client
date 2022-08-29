document.getElementById("lastname").addEventListener("input", nom);
document.getElementById("firstname").addEventListener("input", prenom);
document.getElementById("username").addEventListener("input", bonUserName);
document.getElementById("userpwd").addEventListener("input", bonMotDePasse);
document.getElementById("useremail").addEventListener("input", bonneAdresseMail);
document.getElementById("birthdate").addEventListener("input", dateAnniversaire);
document.getElementById("formulaire").addEventListener("submit", check);

function check(e){
	var ERROR;
	var username = document.getElementById('username');
	var motDePasse = document.getElementById('userpwd');
	var adrMail = document.getElementById('useremail');
	var lastname = document.getElementById('lastname');
	var firstname = document.getElementById('firstname');
	var birthdate = document.getElementById('birthdate');

	if(!username.value){
		ERROR = "Veuillez remplir le champs nom d'utilisateur !";
	}
	
	if(!motDePasse.value){
		ERROR = "Veuillez remplir le champs mot de passe !";
	}
	
	if(!adrMail.value){
		ERROR = "Veuillez remplir le champs adresse mail !";
	}
	
	if(!lastname.value){
		ERROR = "Veuillez remplir le champs de votre nom !";
	}
	
	if(!firstname.value){
		ERROR = "Veuillez remplir le champs de votre prénom !";
	}
	
	if(ERROR){
		e.preventDefault();
		document.getElementById("erreur").innerHTML = ERROR;
		return false;
	}
	else{
		if(bonUserName() === true && bonMotDePasse() === true && bonneAdresseMail() === true && dateAnniversaire() === true){
			return true;
		}
		else if(bonUserName() === true && bonMotDePasse() === true && bonneAdresseMail() === true && dateAnniversaire() === false){
			alert("La date de naissance est incorrecte ! Veuillez taper une date valide !");
		}
		else{
			alert("Veillez à ce que tous les champs soit validés !");
			return false;
		}
	}
}

function bonMotDePasse(){
	var motDePasse = document.getElementById('userpwd');
	var unBonMotDePasse = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.*[0-9])(?=.*[a-z])");
	
	if (motDePasse.value.match(unBonMotDePasse)){
		document.getElementById("erreur").innerHTML = "";
		return true;
	}
	else{ 
		document.getElementById("erreur").innerHTML = "Le mot de passe est invalide ! Il doit contenir :\n -au moins 8 caractère\n -au moins 1 caractère spécial, \n -au moins 1 chiffre\n -au moins 1 majuscule\n -au moins 1 minuscule";
		return false;
	}
}

function bonneAdresseMail(){
	var adrMail = document.getElementById('useremail');
	var unBonEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{1,6}[^0-9]$/g;	
	
	if (adrMail.value.match(unBonEmail)){ 
		document.getElementById("erreur").innerHTML = "";
		return true;
	}
	else{
		document.getElementById("erreur").innerHTML = "L'adresse E-Mail est invalide !";
		return false;
	}
}

function bonUserName(){
	var username = document.getElementById('username');
	var unBonUserName = /^(?=.{6,})/g;
	if (username.value.match(unBonUserName)){ 
		document.getElementById("erreur").innerHTML = "";
		return true;
	}
	else{
		document.getElementById("erreur").innerHTML = "Le nom d'utilisateur est invalide ! Il doit contenir au moins 6 caractères !";
		return false;
	}
}

function nom(){
	var nom = document.getElementById('lastname');	
	if (nom.value){
		document.getElementById("erreur").innerHTML = "";
		return true;
	}
	else{ 
		document.getElementById("erreur").innerHTML = "Veuillez remplir le champs de votre nom !";
		return false;
	}
}

function prenom(){
	var prenom = document.getElementById('firstname');	
	if (prenom.value){
		document.getElementById("erreur").innerHTML = "";
		return true;
	}
	else{ 
		document.getElementById("erreur").innerHTML = "Veuillez remplir le champs de votre prénom !";
		return false;
	}
}

function dateAnniversaire(){
	var anniversaire = document.getElementById('birthdate').value;
	if(!birthdate.value){
		return true
	}
	var uneBonneDate = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/; //problème : date ne peut être > 2099
	if(uneBonneDate.test(anniversaire)){
		var parts = anniversaire.split("/");
		var DA = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
		var dateActuelle = new Date();
		if(dateActuelle.getTime() > DA.getTime()){
			document.getElementById("erreur").innerHTML = "";
			return true;
		}
		else{
			document.getElementById("erreur").innerHTML = "La date de naissance ne peut pas être dans le futur !";
			return false;
		}
	}
	else{
		document.getElementById("erreur").innerHTML = "La date de naissance n'est pas valide !";
		return false;
	}
}