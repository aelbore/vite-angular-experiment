# vite-angular-experiment
Experiment Angular (Ivy) with Vite

Getting Started
------------
* Install dependencies
  ```
  git clone https://github.com/aelbore/vite-angular-experiment.git
  yarn install
  ```

Example
------------
* Run the Angular with `ngx-elements` without `NgModule`
  - `yarn serve` - run into browser `http://localhost:3000`
* Run the Angular with `NgModule`    
  - change the `script` tag in `index.html`
  ```html
   <script type="module" src="./src/angular/app.module.ts"></script>
  ```
  - `yarn serve` - run into browser `http://localhost:3000`

Note
------------
> Currently it is only supports single component (inline template and styles)  
> In Angular with NgModule, common modules are not working
