# Flights
This is appcation for booking flights tickets.

## Live Demo
[Click here](https://arkbog.github.io/flights/)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [How to run locally (Angular)](#how-to-run-locally-(Angular))
* [Project Status](#project-status)
* [Contact](#contact)

## General Information
The major goal of this project was create an application for booking flights tickets. Prject was created as a semester project for postgraduate studies.

## Technologies Used
- Angular,
- TypeScript,
- JavaScript,
- SCSS / CSS,
- HTML.

## Features
In the first screen, user can see the form for choose basic flight data. Inputs "Origin", "Destination", "Departre" and "Number of passangers" are required. If the form is validate, user can go to next stage. In this stage, user should fill forms with passagner datas. Fields "Name", "Surname", "Date of birth" and "Seat" are required. To choose seat, user has to click at button "Choose your seat". After that, antother component is activated. In this component user can see a airplane board and choose seat. If user fills forms for all passagners, he will see message "Everything fine. Go to basket". At this stage, user should click cart icon. In the cart screen user can see summary of them products. If everything is fine, user should click "Confirm & Pay now" button. If user is logged, he will be direct to payments component. If not, user will be redirect to login component. To check how this application works, you can use login "test" and password "test". Users databse is in json file named "users.json". This is a simulation of backend.
In the navbar, user can see a few tabs. The first one is "Flights". In this tab, user can see every flight directs. User can filter them by countries. The second tab is "Sale". In this tab user can see current sales and discounts. The next tab is "About us". In this tab user can read about company. The last one tab is "Contact". In this tab, user can find contact information.      

## How to run locally (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Status
Project status: done

## Contact
Created by [@ArkBog](https://github.com/ArkBog). Feel free to contact with me.
