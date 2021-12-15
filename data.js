// info by videos
/*let movies = [
    {
      name: 'NodeJS',
      des: 'Lorem ipsum',
      image: 'images/logo01.png'
    },
    {
      name: 'PostgreSQL',
      des: 'Lorem ipsum amet',
      image: 'images/logo02.PNG'
    },
    {
      name: 'Express.js',
      des: 'Lorem ipsum dolor sit',
      image: 'images/logo03.PNG'
    },
    {
      name: 'Express.js',
      des: 'Lorem ipsum dolor sit',
      image: 'images/logo03.PNG'
    },
]
*/

var fs = require('fs');
var files = fs.readdirSync('./images/test/');

console.log(files);
