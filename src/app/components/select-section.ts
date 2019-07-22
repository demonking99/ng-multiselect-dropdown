import { Component } from '@angular/core';

const tabDesc: any = {
  single: {
    heading: 'Single'
  }
  ,
  multiple1: {
    heading: 'Multiple-Example1'
  }
};

@Component({
  selector: 'app-select-section',
  template: `
    <section>
      <div class="row">
        <div class="col-md-12">
          <tabset>
            <tab heading="Multiple">
              <app-sample-section [desc]="tabDesc.multiple1"><app-multiple-demo></app-multiple-demo></app-sample-section>
            </tab>
            <tab heading="Single">
              <app-sample-section [desc]="tabDesc.single"><app-single-demo></app-single-demo></app-sample-section>
            </tab>
          </tabset>
        </div>
      </div>
    </section>
  `
})
export class SelectSectionComponent {
  public currentHeading = 'Single';
  public tabDesc: any = tabDesc;
}
