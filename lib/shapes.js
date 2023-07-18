const fs = require('fs');
const fileName = './examples/logo.svg'

class shapes{
    constructor(text, textColor, logoColor){
        this.text = text
        this.textColor = textColor
        this.logoColor = logoColor
    }

    setLogoColor(color){
        this.logoColor = color
    }

    setTextColor(color){
        this.textColor = color
    }
    setText(text){
        this.text = text
    }

    getLogoColor(){
        return this.logoColor
    }

    getText(){
        return this.text;
    }

    getTextColor(){
        return this.textColor;
    }

    createFile(){
        fs.writeFile(fileName ,'', function(err){
            if(err) throw err;
        });
    }
}

module.exports = shapes