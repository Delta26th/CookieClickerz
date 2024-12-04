import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockieClickerComponent } from './cockie-clicker.component';

describe('CockieClickerComponent', () => {
  let component: CockieClickerComponent;
  let fixture: ComponentFixture<CockieClickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CockieClickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockieClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
