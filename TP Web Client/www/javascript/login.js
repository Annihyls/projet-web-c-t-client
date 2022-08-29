document.getElementById("login").addEventListener("submit", function(e) {
    e.preventDefault();

    var donnee = new FormData(this);
    var zoneText = document.getElementById("texte");
    try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch(e) {
        xhr = new XMLHttpRequest();
    }

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            zoneText.innerHTML = this.responseText;
        }
        else if(this.readyState == 4 && this.status == 404){
            zoneText.innerHTML="ERREUR 404 :/";
        }
    };

    xhr.open("POST", "../htbin/login.py", true);
    xhr.responseType = "text";
    xhr.send(donnee);
    
});


document.getElementById('login').addEventListener('keyup', function(e) {
    if (e.code === 'Enter'){
        e.preventDefault();
        document.querySelector('login').submit();
    }
});