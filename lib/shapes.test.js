const shape = require('./shapes.js');


const Newshape = triangle ();
shape.setColor('blue');
expect(shape.render()).toEqual('<polygon points="70,180 150,20 230,180" fill="blue"/>');