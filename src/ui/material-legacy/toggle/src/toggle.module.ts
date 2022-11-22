import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { FormlyMatFormFieldModule } from '@ngx-formly/material-legacy/form-field';

import { FormlyFieldToggle } from './toggle.type';

@NgModule({
  declarations: [FormlyFieldToggle],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'toggle',
          component: FormlyFieldToggle,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyMatToggleModule {}