let validationMail = false;

onload = function () {
    console.log('Welcome page with mail of the user');
    var mailButton = this.document.getElementById("idButtonMail");
    mailButton.addEventListener('click', verifyMail); 
    document.getElementById("idButtonStartGame").disabled = true;
}

function verifyMail(){
    console.log("Veryfying mail adress");
    //Condition de vérification de l'adresse mail
    validationMail = true;
    if (validationMail == true){
        document.getElementById("idButtonStartGame").disabled = false;
    }
}