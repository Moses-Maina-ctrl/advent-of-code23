function calibration(){
    const [file] = document.querySelector('input[input=file]').files
    const reader = new FileReader() 
    reader.addEventListener('load', () =>{
        const contents=reader.results
        processFile(contents)
    }, false,)
    if (file){
        reader.readAsText(file)
    }
}
function processFile(content){
    const lines = content.split('\n')
    extractValues(lines)
}
const digits = {one:'1one', two:'2two', three:'3three', four:'4four', five:'5five',six:'6six', seven:'7seven', eight:'8eight', nine: '9nine'}
function numberConverter(content) {

    
}
function extractValues(content){

} 
