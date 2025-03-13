import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMovComponent } from './pagina-mov.component';

describe('PaginaMovComponent', () => {
  let component: PaginaMovComponent;
  let fixture: ComponentFixture<PaginaMovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMovComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
