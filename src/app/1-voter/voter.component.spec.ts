import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent],
    })
      .compileComponents;

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  }));

  it('should render  total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    // DebugElement is type any. not sure why Angular team has set this property as any
    // instead of type HTMLElement. This means when you type de.nativeElement. (dot) you won't
    // get the intellisense. Work around this set a new variable as type HTMLElement.
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');

  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });


  it('should increase total votes when I click the upVote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });


});
