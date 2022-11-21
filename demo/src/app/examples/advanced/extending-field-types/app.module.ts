import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'password',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'password',
              label: 'Default Password Field',
            },
          },
        },
      ],
    }),
  ],
  declarations: [AppComponent],
})
export class AppModule {}
