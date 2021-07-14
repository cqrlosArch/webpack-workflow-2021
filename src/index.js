//scss
import './scss/styles.scss';
//images
import './assets/images/img.jpg';
import './assets/images/code.png';
import './assets/images/dog.jpg';
import './assets/images/favicons/apple-touch-icon180.png';
import './assets/images/favicons/favicon_16x16.png';
import './assets/images/favicons/favicon.ico';
//vendors
import './vendors/jquery-3.5.1.min.js';

//Modules
import getData from './common/module';



// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

getData().then((data) => console.log(data));

console.log('Hello!!!');
