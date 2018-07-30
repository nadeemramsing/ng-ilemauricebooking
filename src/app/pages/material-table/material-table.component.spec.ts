
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableComponent } from './material-table.component';

describe('MaterialTableComponentComponent', () => {
  let component: MaterialTableComponent;
  let fixture: ComponentFixture<MaterialTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
