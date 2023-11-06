import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfeSesionPage } from './profe-sesion.page';

describe('ProfeSesionPage', () => {
  let component: ProfeSesionPage;
  let fixture: ComponentFixture<ProfeSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfeSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
