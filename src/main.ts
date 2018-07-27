import { enableProdMode, ApplicationRef } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(module => {
    if (environment.production)
      return;
    let
      applicationRef = module.injector.get(ApplicationRef),
      appComponent = applicationRef.components[0];

    enableDebugTools(appComponent);
  })
  .catch(err => console.error(err));
