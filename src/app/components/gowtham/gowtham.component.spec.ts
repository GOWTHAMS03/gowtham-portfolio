import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GowthamComponent } from './gowtham.component';

describe('GowthamComponent', () => {
  let component: GowthamComponent;
  let fixture: ComponentFixture<GowthamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GowthamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GowthamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
