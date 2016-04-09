document.getElementsByTagName('html')[0].classList.remove('no-js');

import settings from './constants/settings';
import $ from 'jquery';

class App {
    constructor(options) {
        this.options = options;

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });
    }
}

$(() => {
  const app = new App(settings);
  console.log(app);

  const $body = $('body');
  console.log($body);
});
