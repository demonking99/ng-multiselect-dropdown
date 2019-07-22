import { Component, Type, ViewChild, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MultiSelectComponent, IDropdownSettings } from './../src';
import { createTestingModule, tickAndDetectChanges } from './helper';

@Component({
  template: ``
})
class MultiSelectDropdownMultipleSelectDefaultPlaceHolderTextComponent {
  @ViewChild(MultiSelectComponent, { static: false }) select: MultiSelectComponent;
  cities = [];
  selectedItem = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
}

const NO_DATA_AVAILABLE = 'NO DATA AVAILABLE';
@Component({
  template: ``
})
class MultiSelectDropdownMultipleSelectCustomPlaceHolderTextComponent {
  @ViewChild(MultiSelectComponent, { static: false }) select: MultiSelectComponent;
  cities = [];
  selectedItem = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: true,
    noDataAvailablePlaceholderText: NO_DATA_AVAILABLE
  };
}
describe('ng-multiselect-component: default placeholder when no data is available to show', function() {
  let fixture: ComponentFixture<MultiSelectDropdownMultipleSelectDefaultPlaceHolderTextComponent>;
  beforeEach(fakeAsync(() => {
    fixture = createTestingModule(
      MultiSelectDropdownMultipleSelectDefaultPlaceHolderTextComponent,
      `<div class='container'>
          <ng-multiselect-dropdown name="city" [data]="cities"
      [(ngModel)]="selectedItem" [settings]="dropdownSettings"
      (onSelect)="onItemSelect($event)"
      [disabled]="disabled">
    </ng-multiselect-dropdown>
    </div>`
    );
  }));

  it('should have default placeholder when no data is available to show', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('.no-data'));
    const el = de.nativeElement;
    expect(el.textContent).toContain('No data available');
  });
});
describe('ng-multiselect-component: custom placeholder when no data is available to show', function() {
  let fixture: ComponentFixture<MultiSelectDropdownMultipleSelectCustomPlaceHolderTextComponent>;
  beforeEach(fakeAsync(() => {
    fixture = createTestingModule(
      MultiSelectDropdownMultipleSelectCustomPlaceHolderTextComponent,
      `<div class='container'>
          <ng-multiselect-dropdown name="city" [data]="cities"
      [(ngModel)]="selectedItem" [settings]="dropdownSettings"
      (onSelect)="onItemSelect($event)"
      [disabled]="disabled">
    </ng-multiselect-dropdown>
    </div>`
    );
  }));

  it('should have custom placeholder when no data is available to show', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('.no-data'));
    const el = de.nativeElement;
    expect(el.textContent).toContain(NO_DATA_AVAILABLE);
  });
});
