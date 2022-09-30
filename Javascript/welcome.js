onload = function () {
    console.log('Welcome page with mail of the user');
    var levelGamePriplanusian = this.document.getElementById("idGameLevel").value
}



function verifyMailAndForm(){
    var validationMail = false;
    var validationName = false;
    var mailPriplanusian = this.document.getElementById("idUserMail").value
    var namePriplanusian = this.document.getElementById("idUserName").value
    var priplanusMailFormat = /^\\([b-df-hj-np-tv-z]+)\[((([b-df-hj-np-tv-z]+)\|)*)([b-df-hj-np-tv-z]+)\]$/
    console.log("Veryfying mail adress and name");
    //Condition de vérification de l'adresse mail
    if(mailPriplanusian.match(priplanusMailFormat)){
        validationMail = true
    }else{
        alert("You have entered an invalid email address!");
    }
    if(namePriplanusian!=''){
        validationName = true;
    }else{
        alert("You have to enter a user name!");
    }
    if (validationMail == true && validationName == true ){
        this.document.location.href='gamePage.html';
    }
}

