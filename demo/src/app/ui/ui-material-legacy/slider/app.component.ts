import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new UntypedFormGroup({});
  model: any = { Slider: 50 };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Slider',
      type: 'slider',
      props: {
        label: 'Slider label',
        placeholder: 'Slider Placeholder',
        thumbLabel: false,
        required: true,
        min: 0,
        max: 100,
      },
    },
  ];
}