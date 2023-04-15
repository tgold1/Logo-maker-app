function drawShape(data) {
    if (data.shapes === 'circle') {
        var makeShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${data.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text></svg>`
    }
    else if (data.shapes === 'square') {
        var makeShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${data.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text></svg>`
    }
    return makeShape;
}

module.exports = drawShape;