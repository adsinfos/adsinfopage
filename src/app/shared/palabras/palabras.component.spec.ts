import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PalabrasComponent } from './palabras.component';

describe('InitComponent', () => {
  let component: PalabrasComponent;
  let fixture: ComponentFixture<PalabrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalabrasComponent]
    });
    fixture = TestBed.createComponent(PalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
