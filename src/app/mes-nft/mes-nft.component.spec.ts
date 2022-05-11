import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesNftComponent } from './mes-nft.component';

describe('MesNftComponent', () => {
  let component: MesNftComponent;
  let fixture: ComponentFixture<MesNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
