# Angular BoilerPlate

## Todo

1. [ ] Error Handlers
2. [ ] Modules & Route
3. [ ] Layout
4. [ ] I18n Support

### 1. Route

- https://angular-2-training-book.rangle.io/routing/child_routes

### 4. I18n Support

```bash

```

## Architecture

## Includes

1. [Angular Material](https://material.angular.io/)
2. [NgRx](https://ngrx.io/guide/store/install)
3. [Ngx Translate](https://github.com/ngx-translate/core)

## References

### Safety load ngx-translate

- https://stackoverflow.com/questions/50250523/angular-location-initialized-what-is-it-and-why-use-it
- https://github.com/ngx-translate/core/issues/517#issuecomment-299637956

```javascript
export function appInitializerTranslationsFactory(translate: TranslateService) {
return () => new Promise<any>((resolve: any) => {
        const langToSet = 'en';
        translate.setDefaultLang('en');
        translate.use(langToSet).subscribe(() => {}, err => {}, () => {
            resolve(null);
        });
});
```

### App Initializer

- https://itnext.io/how-does-app-initializer-work-so-what-do-you-need-to-know-about-dynamic-configuration-in-angular-718e7c345971
- https://www.tektutorialshub.com/angular/angular-how-to-use-app-initializer/

### Guarding your angular modules

- https://timdeschryver.dev/blog/guarding-your-angular-modules

### SlashScreen

- https://itnext.io/simple-splash-screen-for-your-angular-web-apps-and-pwas-f4fbf897540b
- https://medium.com/@tomastrajan/how-to-style-angular-application-loading-with-angular-cli-like-a-boss-cdd4f5358554
- https://netbasal.com/optimize-user-experience-while-your-angular-app-loads-7e982a67ff1a
- https://nativescript.org/blog/angular-launch-animations/

```html
<body>
  <app-root>
    <div class="splash">...</div>
  </app-root>
</body>
```

### Loading Spinner

- https://stackoverflow.com/questions/49385369/angular-show-spinner-for-every-http-request-with-very-less-code-changes
- https://www.freakyjolly.com/http-global-loader-progress-bar-using-angular-interceptors/#.X6O9HYgzZaQ
- https://github.com/ngrx/platform/tree/95dd2dc2c870477572784044b0be46a2876ef43b/example-app
- https://github.com/aitboudad/ngx-loading-bar

**Recommend** : https://github.com/aitboudad/ngx-loading-bar

### Decision Tree

- https://rxjs-dev.firebaseapp.com/operator-decision-tree
