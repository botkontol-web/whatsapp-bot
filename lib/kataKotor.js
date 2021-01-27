const sastrawi = require('sastrawijs');

const kataKasar = [
    'anjing',
    'kontol',
    'memek',
    'jembut'
    'kntl'
    'meki'
    'kimak'
    'pikimak'
    'tlol'
    'lol'
    'anak dajjal'
    'qontol'
    'asu'
    'asw'
    'cocote'
    'combrote'
    'aso'
    'Islam'
    'Kristen'
    'opm'
    'babi'
    'bangsat'
    'bgsd'
    'khontols'
    'khontolzzz'
    'pukimaknya'
    'phukimaknya'
    'jawa babi'
    'bdo'
    'lawaks?'
    'peak'
    'haram'
    'memeks'
    'jembot'
    'jembut'
    'jembod'
    'kentod'
    'kentot'
    'titid'
    'jembud'
    'jmbd'
    'telaso'
    'hahahahanjing'
    'anjing'
    'pidong'
    'lonte'
    'lonet'
    //Tambahin Sendiri
];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})
