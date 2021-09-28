function getText(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function(){
        document.getElementById("text").innerHTML = this.responseText;
    }

    xhttp.open("GET","https://simpleapigama.azurewebsites.net/api/Function1",true);

    xhttp.send();
}