var validationMail = false;

onload = function () {
    console.log('Welcome page with mail of the user');
    document.getElementById("idButtonStartGame").disabled = true;
    var mailButton = this.document.getElementById("idButtonMail"); 
}



function verifyMail(){
    var mailPriplanusian = this.document.getElementById("idUserMail").value
    var priplanusMailFormat = /^\\([b-df-hj-np-tv-z]+)\[((([b-df-hj-np-tv-z]+)\|)*)([b-df-hj-np-tv-z]+)\]$/
    console.log("Veryfying mail adress");
    //Condition de vérification de l'adresse mail
    if(mailPriplanusian.match(priplanusMailFormat)){
        validationMail = true
    }
    else{
        alert("You have entered an invalid email address!");
    }
    if (validationMail == true){
        document.getElementById("idButtonStartGame").disabled = false;
    }
}