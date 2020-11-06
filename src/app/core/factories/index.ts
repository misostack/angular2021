import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCATION_INITIALIZED } from '@angular/common';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  // const VERSION = Date.now(); //#I18N
  // return new TranslateHttpLoader(httpClient, `${environment.I18N_ENDPOINT}`, `?version=${VERSION}`) //#I18N;
  return new TranslateHttpLoader(httpClient, `/assets/i18n/`, '.json');
}

export function appInitializerFactory(
  translate: TranslateService,
  injector: Injector
): any {
  return () =>
    new Promise<any>((resolve: any) => {
      setTimeout(() => {
        const locationInitialized = injector.get(
          LOCATION_INITIALIZED,
          Promise.resolve(null)
        );
        locationInitialized.then(() => {
          const langToSet = 'en';
          translate.setDefaultLang('en');
          translate.use(langToSet).subscribe(
            () => {
              console.info(
                `Successfully initialized '${langToSet}' language.'`
              );
            },
            (err) => {
              document.write(
                `Problem with '${langToSet}' language initialization.'`
              );
            },
            () => {
              resolve(null);
            }
          );
        });
      }, 1000);
    });
}
