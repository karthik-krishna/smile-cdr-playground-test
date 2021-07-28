import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[HttpClientModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fhir-app-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fhir-app-test');
  });

  it(` ngoninit should exist`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.ngOnInit).toBeDefined()
  });

  it("should scroll to top of the page on route change", function() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    var expectedY = 0;
    var expectedX = 0;

    // scroll the window
    app.onActivate();
    var actualY = window.pageYOffset;
    var actualX = window.pageXOffset;

    expect(actualX).toBe(expectedX);
    expect(actualY).toBe(expectedY);
  });

});
