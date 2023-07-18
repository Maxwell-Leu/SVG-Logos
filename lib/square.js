const shapes = require('./shapes')
const fs = require('fs');
const fileName = './examples/logo.svg'
class square extends shapes{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor)
    }

    codeBlockSquare() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="100" y="55" width="110" height= "110" fill=${this.getLogoColor()} />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.getTextColor()}>${this.getText()}</text>
      
      </svg>`
    }

    appendCode(){
        fs.appendFile(fileName, this.codeBlockSquare(), (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
    }
}

module.exports = square