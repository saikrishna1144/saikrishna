import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render verified profile details, experience, and supplied gallery images', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Saikrishna Mungandi');
    expect(compiled.querySelector('.button-primary')?.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/saikrishna-mungandi-25b1a8203',
    );
    expect(compiled.querySelector('#about')?.textContent).toContain('4+ years');
    expect(compiled.querySelector('#about-title')?.textContent).toContain('Spring Boot');
    expect(compiled.querySelector('#images h2')?.textContent).toBe('Gallery');
    expect(compiled.textContent).not.toContain('Selected images');
    expect(compiled.querySelector('#about .section-index')?.textContent?.trim()).toBe('ABOUT');
    const experienceDetails = compiled.querySelector<HTMLDetailsElement>('.experience-disclosure');
    expect(experienceDetails?.open).toBe(false);
    expect(experienceDetails?.closest('#about')).toBeTruthy();
    expect(compiled.querySelector('.career-section')).toBeNull();
    expect(experienceDetails?.querySelector('summary')?.textContent).toContain('Professional experience');
    experienceDetails?.querySelector('summary')?.click();
    expect(experienceDetails?.open).toBe(true);
    expect(experienceDetails?.textContent).toContain('Digital Specialist Engineer L2');
    expect(experienceDetails?.textContent).toContain('Cognizant');
    expect(compiled.querySelector('#about .platinum-recognition')?.textContent).toContain('Infosys Platinum Club');
    expect(compiled.querySelector('#about .platinum-recognition')?.textContent).toContain('FY27');
    expect(compiled.querySelector('.achievement-band')).toBeNull();
    expect(compiled.querySelector('#about .platinum-recognition')?.nextElementSibling?.textContent).toContain('SRKR Engineering College');
    expect(compiled.querySelector('#about .about-education')?.textContent).toContain('B.Tech, Computer Science');
    expect(compiled.querySelector('.credentials-section')).toBeNull();
    expect(compiled.textContent).not.toContain('GitHub Foundations');
    expect(compiled.querySelectorAll('.gallery-item img')).toHaveLength(2);
    expect(compiled.querySelector('.portrait-panel img')?.getAttribute('src')).toContain('9V2A8789~3.JPG');
    expect(compiled.querySelector('#about .about-gif')?.getAttribute('src')).toContain('.gif');
    expect(compiled.querySelector('#images .about-gif')).toBeNull();
    expect(compiled.querySelector('.gallery-grid .animation-item')).toBeNull();
  });
});
