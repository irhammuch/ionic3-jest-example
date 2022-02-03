import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NavController } from "ionic-angular";

import { HomePage } from "./home";

describe("HomePage", () => {
  let fixture: ComponentFixture<HomePage>;
  let instance: HomePage;

  /**
   * To make simpler component configuration,
   * use temporary subtitution for some providers instead of real one.
   */
  const navControllerStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomePage],
      providers: [
        {
          provide: NavController,
          useValue: navControllerStub,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    instance = fixture.debugElement.componentInstance;
  });

  it("HomePage should be created", () => {
    expect(instance).toBeTruthy();
  });
});
