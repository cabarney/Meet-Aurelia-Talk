// ADD to app.js: import {Redirect} from 'aurelia-router';

// ADD to config: config.addPipelineStep('authorize', AuthorizeStep);
// MODIFY route: { route: ['movies'],  moduleId: './movies',      nav: true, title:'Awesome Movies', auth: true },



class AuthorizeStep {
  run(routingContext, next) {
    if (routingContext.nextInstructions.some(i => i.config.auth)) {
      var isLoggedIn = checkCredentials();

      if (!isLoggedIn) {
        return next.cancel(new Redirect('login'));
      }
    }

    checkCredentials(){
        // whatever...
        return false;
    }

    return next();
  }
