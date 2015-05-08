# DEMO Ideas

Early parts of this based on <http://aurelia.io/get-started.html>

## Setup
Show Skeleton app on github - <https://github.com/aurelia/skeleton-navigation>


 - npm install -g yo generator-aurelia
 - yo aurelia


From the command prompt in project directory:

- npm install
- jspm install -y

>#### CALL OUTS
>- Talk a bit about JSPM - not required. Packages on Bower as well.


## Index.html

Points to hit on:
- inclusion of system.js
- System.config (sets up output locastion of compiled JS code)
- System.import('aurelia-bootstrapper'); - get this party started!

>#### CALL OUTS
>- System.JS, which is also not required - require or dojo can be used
>- aurelia-bootstrapper looks for "aurelia-app" and **by convention** will load app.js and app.html

## Routing

> By convention, system.js looks for an app.js file for bootstrapping

Look at app.js

- This is ES6/7 - transpiled to ES 5.  
- We'll look at TypeScript later

To set up routing:
- implement configureRouter method
    - Aurelia's config object as well as the router is passed in
- route: the url pattern to match
- moduleId: the view model (JS) to handle the route (relative path)
- nav: include this in the navigatable links on the router?
- title: friendly name for display

> ** you can add other fields to customize (we'll do this later) **

Add a new route:
> { route: ['movies'],  moduleId: './movies',      nav: true, title:'Awesome Movies' },


## MVVM

An aurelia UI element is comprised of **VIEW** and **VIEWMODEL** pairs

Let's create one for our Movies route

- **COPY** movies.js and movies.html to src/
- **LOOK AT** movies.js

> ES 6 code - simple list management

- **ADD TO** movies.html

> - Simple string interpolation: ${heading}
>   - can have simple expressions (${flag?'one':'two'})
>   - Value Converters (UpperValueConverter in welcome.js)
> - Databinding: value.bind="movieText" on movie input text
>   - alternates: value.one-way, .two-way, .one-time
>   - Aurelia has **ADAPTIVE** data binding
>   - Binding to complex objects - introduce rating
>       - **GRAB NEW VERSIONS** of movies.js and movies.html
>   - ref binding
> - Databinding: click.delegate="addMovie"
>   - alternate: click.trigger (event method, rather than delgation to page level)
>   - modify addMOvie to take arg, change html to addMovie(movieText)
>   - Now slap a ref="foo" on the input and pass foo.value to the function in html
> - Extensions:
>   - repeat (repeat.for="movie in movies")
>   - within repeat:
>       - $parent, $index, $first, $last, $even, $odd
> - Other Extensions
>   - if (removes element if false)
>   - show (effects visability)


## Custom Elements

**COPY** movie-widget.js and movie-widget.html

- add <require from="./movie-widget"></require> to the view
- <movie-widget movie.bind="movie"></movie-widget>
- How easy is that?
- Show the navbar custom element as well


## Screen Activation Lifecycle

- canActivate (params, routeConfig)
- activate (params, routeConfig)
- canDeactivate
    - Add check for text in movieText and prevent
- deactivated

## Routing Pipeline (route filters)
> extensibility points:
> - authorize
> - bindmodel

see authorize-step.js


 ## PushState

 In configureRouter:  config.options.pushState = true;

Add <base> tag to head:

<base href="http://localhost:9000/index.html">

 for node:
 - npm install --save connect-history-api-fallback
 - in build/tasks folder, serve task:
 - var historyApiFallback = require('connect-history-api-fallback')
        gulp.task('serve', ['build'], function(done) {
            browserSync({
                open: false,
                port: 9000,
                server: {
                    baseDir: ['.'],
                    middleware: [historyApiFallback, function (req, res, next) { // it's the first one in the array
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                    }]
                }
            }, done);
        });


for ASP.NET:

        public class ApplicationController : Controller {
          public ActionResult Index() {
            return View();
          }
        }
 routing config (in MVC):

        context.MapRoute(
          name: "AureliaRouting",
          url: "{*.}",
          defaults: new { controller = "Application", action = "Index" }
        );


## TypeScript
*To-Do*
