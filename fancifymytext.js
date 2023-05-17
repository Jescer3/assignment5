document.getElementById("biggerButton").onclick = function() {
    document.getElementById("inputText").style.fontSize = "24pt";
};

document.getElementById("fancyShmancy").onchange = function() {
    if (this.checked) {
        let inputText = document.getElementById("inputText");
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration = "underline";
    }
};

document.getElementById("boringBetty").onchange = function() {
    if (this.checked) {
        let inputText = document.getElementById("inputText");
        inputText.style.fontWeight = "normal";
        inputText.style.color = "black";
        inputText.style.textDecoration = "none";
    }
};

document.getElementById("mooButton").onclick = function() {
    let inputText = document.getElementById("inputText");
    inputText.value = inputText.value.toUpperCase();
    let sentences = inputText.value.split('.');
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim();
        let words = sentences[i].split(' ');
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = words.join(' ');
    }
    inputText.value = sentences.join('. ');
};
