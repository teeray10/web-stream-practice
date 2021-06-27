# Web Stream Practice

I think let's create a separate directory for each of our UIs. Thoughts?
### Docker
run `docker pull teeraydvt/employees:latest` to download my api image  
cd To the directory with "docker-compose.yml"  
run `docker compose up`

Server should now be listening on localhost:8080
### Endpoints

##### Note: An OpenAPI Specification document will be added soon

For now here are a list of endpoints exposed on localhost:8080

/employees  
Method: GET  

/employee/{employeeId}  
Method: GET  

/employee/add  
Method: POST  
Request Body: JSON object  
Example:   
{
    "employeeId" : "5",
    "name" : "greg",
    "annualGrossSalary" : 16000
}

/employee/{employeeId}/delete  
Method: DELETE  

/employee/update  
Method: PUT  
Request Body: JSON object  
Example:  
{
    "employeeId" : "5",
    "name" : "greg",
    "annualGrossSalary" : 11000
}
# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Soccer leaderboard web app

Please view latest changes on branch **taylor**

## Environment
I have used the npm package *http-server* to serve files  
Run `npm install -g http-server` to install  
Switch to the directory where **"index.html"** is located.  
Run `http-server -c-1` to start server listening on **localhost:8080** with cache disabled
