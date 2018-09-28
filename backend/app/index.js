const express = require('express');
const GenerationEngine = require('./generation/engine.js');

const app = express();
const engine = new GenerationEngine();



 engine.start();

 app.get('/dragon/new', (req, res) => {
     res.json({ dragon: engine.generation.newDragon() });
 });




 module.exports = app;


 // setTimeout(() => {
 //     engine.stop();
 // }, 20000);


// For building purposes step 2
/*const Generation = require('./index.js');

 const generation = new Generation();

 console.log('generation', generation);

 const gooby = generation.newDragon();

 console.log('gooby', gooby);

 setTimeout(() => {
     const mimar = generation.newDragon();
     console.log('mimar', mimar);
 }, 15000);*/




// For building purposes step 1
 /*const Dragon = require('./dragon.js');

 const fooey = new Dragon({
     birthdate: new Date(),
     nickname: 'fooey'
 });

 const baloo = new Dragon({
     birthdate: new Date(),
     nickname: 'baloo',
     traits: [
         { traitType: 'backgroundColor', traitValue: 'green'}
     ]
 });

 const mimar = new Dragon();

 setTimeout(() => {
     const gooby = new Dragon();
     console.log('gooby', gooby);
 }, 3000);



 console.log('fooey', fooey);
 console.log('baloo', baloo);
 console.log('mimar', mimar);
*/