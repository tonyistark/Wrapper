import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizelyCodexComponent } from './optimizely-codex.component';

describe('OptimizelyCodexComponent', () => {
  let component: OptimizelyCodexComponent;
  let fixture: ComponentFixture<OptimizelyCodexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizelyCodexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizelyCodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
