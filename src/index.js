import './index.html';
import './styles/index.scss';
import './img/mountain-bike.png';
import './img/womens-bike.png';

import tabs from './modules/tabs-plug-in/tabs';
import formHandler from './modules/formHandler';
import extraHandler from './modules/extraHandler';

tabs({extra: '.extra', extraHandler: extraHandler([], document.querySelector('.input'))});
formHandler();
