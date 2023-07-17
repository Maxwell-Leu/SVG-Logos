const fs = require('fs');

class shapes{
    constructor(data){
        text = data.text
        textColor = data.textColor
        logoColor = data.logoColor
        shape = data.shape
    }

    createFile(){
        fs.writeFile(fileName, '', function(err){
            if(err) throw err;
        });
    }
}

class triangle extends shapes{
    constructor(){

    }

    codeBlock() {
        return
    }
}

class circle extends shapes{
    constructor(){

    }

    codeBlock() {
        return
    }
}

class square extends shapes{
    constructor(){

    }

    codeBlock() {
        return
    }
}