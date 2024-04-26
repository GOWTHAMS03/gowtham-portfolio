import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatidoComponent } from './whatido.component';

describe('WhatidoComponent', () => {
  let component: WhatidoComponent;
  let fixture: ComponentFixture<WhatidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
