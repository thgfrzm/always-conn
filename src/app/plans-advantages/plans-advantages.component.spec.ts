import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAdvantagesComponent } from './plans-advantages.component';

describe('PlansAdvantagesComponent', () => {
  let component: PlansAdvantagesComponent;
  let fixture: ComponentFixture<PlansAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
