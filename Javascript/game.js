var words = [['CAR', 'TEA', 'CUP', 'YES', 'CAT'], ['CHAIR', 'TABLE', 'STARS', 'PARIS', 'NOTES' ],['AMAZING', 'EXPLOSE', 'MIRRORS', 'PROGRAM', 'COMFORT']]
var wordsSublist = words[0]
var numeroImg = 0;
var numberLetterFound = 0;
var alphabet = generateAlphabet();
var levelChoosen = false

onload = function () {
    console.log('Page Game Started');
    var figura = document.getElementById("idImageHangHim");
}


//Image list
var imagesPath = ['../IMG/1-HangHim.jpg','../IMG/2-HangHim.jpg', '../IMG/3-HangHim.jpg', '../IMG/4-HangHim.jpg', '../IMG/5-HangHim.jpg',
                    '../IMG/6-HangHim.jpg', '../IMG/7-HangHim.jpg', '../IMG/8-HangHim.jpg', '../IMG/9-HangHim.jpg' ]




function chooseWordsAleatory(listWord) {
    var lengthListWord = listWord.length;
    console.log(lengthListWord)
    var random = Math.floor(Math.random()*lengthListWord)
    console.log('The random number is :', random)
    var wordToFind = listWord[random];
    console.log(wordToFind);
    return wordToFind
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
        listButton.push(button);
        containerButton.appendChild(listButton[i]);      
        button.addEventListener("click", function() {
            letter = getTextButton(this.id);
            compareLetterToWord(letter, listLetter, listNodeLetter)
            document.getElementById(this.id).remove();
          }); 
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
    var letterIsPresent = false;
    
    for (var i = 0; i < listNodeLetter.length; i++){
        console.log(letter);
        console.log(listNodeLetter[i].textContent);
        console.log(listLetter[i]);
        if (letter == listLetter[i]){
            listNodeLetter[i].textContent = letter;
            letterIsPresent = true
            numberLetterFound += 1;
        }
    }
    if (letterIsPresent == false){
            numeroImg += 1;
            document.getElementById("idImageHangHim").src = imagesPath[numeroImg];
            if (numeroImg == (imagesPath.length-1)){
                alert('Game Lost');
                this.document.location.href='endPageLost.html'
            }
    }
    console.log("Test")
    console.log(listLetter.length)
    console.log(numberLetterFound)
    if (numberLetterFound == (listLetter.length)){
        alert('Game Won')
        this.document.location.href='endPageWin.html'
    }
}

function changeGameLevel(){
    var wordsDifficulty = words[0]
    levelGame = this.document.getElementById("idGameLevel").value
    this.document.getElementById("idGameLevel").disabled = true
    this.document.getElementById("idButtonWord").hidden = true
    
    console.log(levelGame)
    if (levelGame == 1){
        wordsDifficulty = words[0]
        console.log(wordsDifficulty)
    }
    if (levelGame == 2){
        wordsDifficulty = words[1]
        console.log(wordsDifficulty)
    }
    if (levelGame == 3){
        wordsDifficulty = words[2]
        console.log(wordsDifficulty)
    }
    var wordToFind = chooseWordsAleatory(wordsDifficulty);
    var wordInfos = generateWordToFind(wordToFind);
    var listLetter = wordInfos[0];
    var listNodeLetter = wordInfos[1];
    var listButton = generateButtonAlphabet(alphabet, listLetter, listNodeLetter);
    return wordsDifficulty
}
