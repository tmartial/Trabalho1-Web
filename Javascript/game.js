onload = function () {
    console.log('Page Game Started');
    var figura = document.getElementById("idImageHangHim");
    var alphabet = generateAlphabet();
    console.log(alphabet);
    var wordsMedium = ['CHAIR', 'TABLE', 'STARS'];
    var wordToFind = chooseWordsAleatory(wordsMedium);
    var wordInfos = generateWordToFind(wordToFind);
    var listLetter = wordInfos[0];
    var listNodeLetter = wordInfos[1];
    var listButton = generateButtonAlphabet(alphabet, listLetter, listNodeLetter);
}

//Image list
var imagesPath = ['IMG\1-HangHim.jpg','IMG\2-HangHim.jpg', 'IMG\3-HangHim.jpg', 'IMG\4-HangHim.jpg', 'IMG\5-HangHim.jpg',
                    'IMG\6-HangHim.jpg', 'IMG\7-HangHim.jpg', 'IMG\8-HangHim.jpg',]



function chooseWordsAleatory(listWord) {
    var lengthListWord = listWord.length;
    console.log(lengthListWord)
    var random = Math.floor(Math.random()*lengthListWord)
    console.log('The random number is :', random)
    var wordToFind = listWord[random];
    console.log(wordToFind);
    return wordToFind;
}


function generateAlphabet() {
    var alphabet = [];
    for (var i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}

function generateButtonAlphabet(alphabet, listLetter, listNodeLetter ){
    var listButton = []
    var containerButton = this.document.getElementById("idAlphabetButton");
    for (var i = 0; i < alphabet.length; i++ ){
        var button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = alphabet[i];
        button.id = "idButton"+i;
        button.addEventListener("click", function() {
            this.style.backgroundColor = "grey";
            this.style.color = 'white';
            letter = getTextButton(this.id);
            compareLetterToWord(letter, listLetter, listNodeLetter)
          });
        listButton.push(button);
        containerButton.appendChild(listButton[i]);     
    }
    return listButton
 }

 function generateWordToFind(word){
    var listLetter = []
    var listNodeLetter = []
    var containerWord = this.document.getElementById("idWordToFind");
    for (var i = 0; i < word.length; i++ ){
        var nodeLetter = document.createTextNode(word[i]);
        nodeLetter.id = nodeLetter[i]
        nodeLetter.textContent = `_ `;
        listLetter.push(word[i]);
        listNodeLetter.push(nodeLetter);
        console.log(listLetter);
        containerWord.appendChild(nodeLetter);  
    }
    return [listLetter, listNodeLetter];
 }

 function getTextButton(idButton){
    console.log(idButton)
    var containerButtonCliqued = this.document.getElementById("idButtonCliqued");
    letter = document.getElementById(idButton).textContent;
    nodeLetter = document.createTextNode(letter); 
    containerButtonCliqued.appendChild(nodeLetter)
    return letter
 }

function compareLetterToWord(letter, listLetter, listNodeLetter){
    for (var i = 0; i < listNodeLetter.length; i++){
        console.log(letter)
        console.log(listNodeLetter[i].textContent)
        console.log(listLetter[i])
        if (letter == listLetter[i]){
            listNodeLetter[i].textContent = letter
        }
   }
}
