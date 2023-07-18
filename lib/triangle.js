const shapes = require('./shapes')
const fs = require('fs');
const fileName = './examples/logo.svg'
class triangle extends shapes{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor)
    }

    codeBlockTriangle() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="0,0 300,0 150,200" fill=${this.getLogoColor()} />
      
        <text x="150" y="100" font-size="60" text-anchor="middle" fill=${this.getTextColor()}>${this.getText()}</text>
      
      </svg>`
    }

    appendCode(){
        fs.appendFile(fileName, this.codeBlockTriangle(), (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
    }
}

module.exports = triangle