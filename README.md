A simple Angular 16 application demonstrating component architecture, state management using NgRx ComponentStore, Angular Material UI components, and cookie handling using `ngx-cookie-service`.
  Angular 16 project structure
- State management with NgRx ComponentStore
- Angular Material UI components
- Cookie management (`ngx-cookie-service`)
- Reactive forms and routing setup
- Modular and scalable folder structure

Architectural Approach 
Component-Based Structure – UI divided into reusable, isolated Angular components.
NgRx ComponentStore – Lightweight, reactive state management at the component level.
Service Layer – All API and business logic handled using dedicated Angular services.
Module Organization – Feature modules for scalability and clean separation.
Angular Material UI – Consistent, responsive design using Material components.
Cookie-Based Session Handling – Auth/session data stored and cleared using ngx-cookie-service.
Reactive Programming – RxJS for async flows, side effects, and data streams.


Install Node.js →
 Version 16+

Install project dependencies 
npm install

Run the local development server
ng s

Request Body for login
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}