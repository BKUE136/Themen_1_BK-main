// var3: ausnutzen von generischen fkt

output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    return arr.join(GAP) + PUNCT;
};

function output(outputStr) {
    console.log(outputStr);
};
