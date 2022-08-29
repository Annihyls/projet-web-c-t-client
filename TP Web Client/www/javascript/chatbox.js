getMessage();
setInterval(getMessage, 1000);

function getMessage(){
    try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch(e) {
        xhr = new XMLHttpRequest();
    }
    xhr.open("GET", "../htbin/chatget.py");
    xhr.onload = function() {
        var listeMessage = JSON.parse(xhr.responseText);
        var html = listeMessage.map(function(message){
            return `
                <div class="message">
					<span class="date">${message.date}|</span>
                    <span class="heure">${message.time}|</span>
					<span class="auteur">${message.user} :</span>
					<span class="contenu">${message.msg}</span>
				</div>
            `
        }).join('');
        var Messages = document.querySelector('.Messages');
        Messages.innerHTML = html;
    }
    xhr.send();
}

 function setMessage(){
    // e.preventDefault();
    var contenu = document.querySelector('#msg');
    var data = new FormData(this);
    data.append('msg', contenu.value);
    
    try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch(e) {
        xhr = new XMLHttpRequest();
    }
    
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            msg.innerHTML = this.responseText;
            getMessage();
        }
        else if(this.readyState == 4 && this.status == 404){
            erreur.innerHTML="ERREUR 404 :/";
        }
    };
    xhr.open("POST", "../htbin/chatsend.py", true);
    xhr.responseType = "text";
    console.log(data);
    xhr.send(data);
    document.querySelector('#msg').value = null;
}

document.querySelector("form").addEventListener("submit", setMessage);