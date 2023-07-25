// How to use this code
// Go in terminal, type in cd, space, then drag 2.4 qr cod project into terminal
// type: node index.js
// Enter information for QR code 
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
// var qr = require('qr-image'); // can't use this code because you can't mix the different ways of using import. 
// Since we used "type": "module", we switch to import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message": "Type in your URL: ", 
    "name": "URL"
}]) // because it is a js object need {} around it
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });