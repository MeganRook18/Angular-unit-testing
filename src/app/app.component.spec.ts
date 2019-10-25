import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: "app-nav",
  template: "<p> NAV TEST COMPONENT </p>",
})
export class MockNavComponent { }

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        MockNavComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();

  });

});
