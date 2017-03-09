// import _ from 'lodash';
import '../css/theme.css';


// var moment = require('moment');
// console.log(moment().format());

console.log(Date.now())

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = 'Hello webpack'  //_.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());