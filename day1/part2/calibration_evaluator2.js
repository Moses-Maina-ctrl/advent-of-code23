function calibrate(){
    const [file] = document.querySelector('input[type=file]').files
    const reader = new FileReader() 
    reader.addEventListener('load', () =>{
        const contents=reader.result
        processFile(contents)
    }, false,)
    if (file){
        reader.readAsText(file)
    }
}
function processFile(content){
    const lines = content.split('\n');
    numberConverter(lines)
}
const digits = {one:'one1one', two:'two2two', three:'three3three', four:'four4four', five:'five5five',six:'six6six', seven:'seven7seven', eight:'eight8eight', nine: 'nine9nine'}
function numberConverter(content) {
    let result = '';
    for (let line of content){
        for( let num of Object.keys(digits)){
            line = line.replaceAll(num,digits[num] );
            
        }
        result += line + '\n';
    }
    console.log(result)
}
function extractValues(content){

} 
