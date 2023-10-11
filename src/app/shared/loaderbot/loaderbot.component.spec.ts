import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderbotComponent } from './loaderbot.component';

describe('LoaderbotComponent', () => {
  let component: LoaderbotComponent;
  let fixture: ComponentFixture<LoaderbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderbotComponent]
    });
    fixture = TestBed.createComponent(LoaderbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
