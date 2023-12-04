function calibrate(){
    const values = document.querySelector('.values')
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
    reader.addEventListener('load',() =>{
        const content =reader.result;
        processFileContent(content)
    },
    false,);
    if (file){
        reader.readAsText(file);
    }
}
function processFileContent(content){
    const lines = content.split('\n');
    const trimmedLines = lines.map(line => line.trim());
    console.log(trimmedLines)
    extractValues(trimmedLines)
}
function  extractValues(content){
    sum = 0
    for (const str of content){
        let firstValue = (str) => {
        const match = str.match(/\d/);
        if (match){
            return parseInt(match[0],10);
        }
        return null;
        }
        let lastValue = (str) => {
            let originalArray = Array.from(String(str),Number);
            reverseArray = originalArray.slice().reverse();
            reverseString = reverseArray.join('');
            const match = reverseString.match(/\d/);
            if (match){
            return parseInt(match[0],10);
            }
            return null;
        }
        console.log(firstValue(str))
        console.log(lastValue(str))
        let CalibrationValue = parseInt(firstValue(str)+''+lastValue(str)+'');
        console.log(CalibrationValue)
        sum += CalibrationValue;
        console.log(sum)

    }
}

