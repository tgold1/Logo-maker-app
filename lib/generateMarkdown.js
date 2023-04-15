function generateMarkdown (data) {
    return `
    ${data.text}
    
    ${data.textcolor}
    
    ${data.shapes}
    
    ${data.shapecolor}
    `;
}

module.exports = generateMarkdown;