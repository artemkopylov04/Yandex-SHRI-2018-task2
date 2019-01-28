

import navbar from './helpers/navbar';
import filters from './helpers/filters';
import arrowsScripts from './helpers/arrowsScripts';
import arrowsDevices from './helpers/arrowsDevices';
import popups from './helpers/popups';
import others from './helpers/others';

document.addEventListener('DOMContentLoaded', () => {
  navbar();
  filters();
  arrowsScripts();
  arrowsDevices();
  popups();
  others();
});
