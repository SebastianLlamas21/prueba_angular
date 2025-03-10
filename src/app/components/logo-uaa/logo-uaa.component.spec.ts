import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoUaaComponent } from './logo-uaa.component';

describe('LogoUaaComponent', () => {
  let component: LogoUaaComponent;
  let fixture: ComponentFixture<LogoUaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoUaaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoUaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
