# DEMO Ideas

Early parts of this based on <http://aurelia.io/get-started.html>

## Setup 
Show Skeleton app on github - <https://github.com/aurelia/skeleton-navigation>

- **DOWNLOAD** and use a starting point
- **RENAME** to aureliaDemo
- **DELETE** index.html and src/

From the command prompt in project directory:

- npm install
- jspm install -y

>#### CALL OUTS
>- Talk a bit about JSPM - not required. Packages on Bower as well.


## Index.html

**COPY** index.html in to project root and **VIEW**

Points to hit on:
- inclusion on system.js
- System.config (sets up output locastion of compiled JS code)
- System.import('aurelia-bootstrapper'); - get this party started!

>#### CALL OUTS
>- System.JS, which is also not required - require or dojo can be used
>- aurelia-bootstrapper looks for "aurelia-app" and **by convention** will load app.js and app.html


## MVVM

An aurelia UI element is comprised of **VIEW** and **VIEWMODEL** pairs

Let's create an app view model and view

> By convention, system.js looks for an app.js file for bootstrapping

**COPY** app.js to src

- This is ES6/7 - transpiled to ES 5.  
- We'll look at TypeScript later


**COPY** app.html to src

> #### First look at binding
> - value.bind
> - submit.delegate
> 
> #### Other thoughts
> - Mention .delegate vs. .trigger
> - .bind is _adaptive_. Compare to .one-way, .two-way, .one-time

Now let's add another screen and explore more binding options


Ahead:
- *Thing* class?
- Custom element (maybe later?)
- Routing
- Navbar custom element
- Second screen
- CRUD *Thing*
- Child routers?
- TypeScript
- Visual Studio and/or ASP.NET
