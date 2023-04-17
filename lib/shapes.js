function drawShape(data) {
    if (data.shapes === 'circle') {
        var makeShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${data.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text></svg>`
    }
    else if (data.shapes === 'square') {
        var makeShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${data.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text></svg>`
    }
    else if (data.shapes === 'triangle') {
        var makeShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="70,180 150,20 230,180" fill="${data.shapecolor}" /><text x="150" y="155" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text></svg>`
    }
    return makeShape;
}

class newShape {
    constructor(text, textcolor, shapes, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapes = shapes;
        this.shapecolor = shapecolor;
    }
}

class triangle extends newShape {
    constructor(text, textcolor, shapes, shapecolor) {
    super (text, textcolor, shapes, shapecolor)
    }
}

class square extends newShape {
    constructor(text, textcolor, shapes, shapecolor) {
        super (text, textcolor, shapes, shapecolor)
    }
}

class circle extends newShape {
    constructor(text, textcolor, shapes, shapecolor) {
        super (text, textcolor, shapes, shapecolor)
    }
}
module.exports = drawShape;

