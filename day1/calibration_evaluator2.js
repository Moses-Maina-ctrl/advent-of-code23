function calibration(){
    const [file] = document.querySelector('input[input=file]').files
    const reader = new FileReader() 
    reader.addEventListener('load', () =>{
        const contents=reader.results
        processFile(content)
    }, false,)
    if (file){
        reader.readAsText(file)
    }
}
function processFile(content){
    const lines = content.split('\n')
    extractValues(lines)
}

function extractValues(content){
    for (const str in content){
        let firstValue = (str) =>{
            const match = str.match()
        }
    }
}