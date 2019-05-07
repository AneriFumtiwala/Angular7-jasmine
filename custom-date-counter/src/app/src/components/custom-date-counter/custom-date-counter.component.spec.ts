import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { CustomDateCounterComponent } from "./custom-date-counter.component";


describe('Component: CustomDateCounter', () => {

  let component: CustomDateCounterComponent;
  let fixture: ComponentFixture<CustomDateCounterComponent>;

  beforeEach(() => {

    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [CustomDateCounterComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(CustomDateCounterComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  //test case 1
  it('should have name as Custom Date Counter', () => {
    expect(component.name).toEqual('Custom Date Counter');
  });

  //test case 2
  it('form invalid when empty', () => {
    expect(component.dateForm.valid).toBeFalsy();
  });

  //test case 2
  it('date field validity', () => {
    let errors = {};
    let date = component.dateForm.controls['date'];
    expect(date.valid).toBeFalsy();

    // Set date to something
    date.setValue("10/22/2015");
    errors = date.errors || {};
    expect(errors['invalidDate']).toBeTruthy();

    // Set email to something correct
    date.setValue("10/11/2019");
    errors = date.errors || {};
    expect(errors['invalidDate']).toBeFalsy();
  });

  //test case 3
  it('date should be increased by 1 day', () => {
    expect(component.dateForm.valid).toBeFalsy();
    component.dateForm.controls['date'].setValue("10/10/2019");
    expect(component.dateForm.valid).toBeTruthy();

    // Trigger the login function
    component.addDays();

    // Now we can check to make sure the emitted value is correct
    expect(component.date).toBe("Fri, 11th Oct 2019");
    expect(component.dateForm.controls['date'].value).toBe("11/10/2019");
  });

  //test case 4
  it('date should be decreased by 1 day', () => {
    expect(component.dateForm.valid).toBeFalsy();
    component.dateForm.controls['date'].setValue("11/10/2019");
    expect(component.dateForm.valid).toBeTruthy();

    // Trigger the login function
    component.subtractDays();

    // Now we can check to make sure the emitted value is correct
    expect(component.date).toBe("Thu, 10th Oct 2019");
    expect(component.dateForm.controls['date'].value).toBe("10/10/2019");
  });
});