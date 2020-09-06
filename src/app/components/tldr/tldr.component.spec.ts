import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLDRComponent } from './tldr.component';

describe('TLDRComponent', () => {
  let component: TLDRComponent;
  let fixture: ComponentFixture<TLDRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLDRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
