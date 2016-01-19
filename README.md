# Hello World 

## Objectives

- Create a Controller
- Create an element for Controller binding
- Create a public $scope method
- Display the $scope value in the View

## Instructions

Setup the directory structure as follows:

- js/
  - app/
    - controllers/
  - angular.js
- index.html

You can find `index.html` and `angular.js` in this repo.

Create a new module in `js/app/app.js`, named `app`.

Create a controller named `MainController` inside `js/app/controllers/MainController.js` and attach it to a module named `app`. The function should take one parameter - `$scope`.

In our HTML, initiate our module `app` using `ng-app` on a HTML element.

Initiate our controller `MainController` using `ng-controller` on a HTML element inside our previous one.
 
Inside `MainController`, assign some values to the `$scope` object.

Display these values inside our HTML using `{{ }}`.