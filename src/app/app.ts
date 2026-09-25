import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class App {
  readonly firstName = 'Saikrishna';
  readonly lastName = 'Mungandi';
  readonly displayName = `${this.firstName} ${this.lastName}`;
  readonly linkedInUrl = 'https://www.linkedin.com/in/saikrishna-mungandi-25b1a8203';
  readonly instagramUrl = 'https://www.instagram.com/saikrishna_mungandi';
  readonly role = 'Digital Specialist Engineer L2';
  readonly employer = 'Infosys';
  readonly location = 'West Godavari, Andhra Pradesh, India';
  readonly skills = ['Java', 'Spring Boot', 'Microservices', 'Azure', 'AngularJS'];
  readonly experience = [
    {
      company: 'Infosys',
      role: 'Digital Specialist Engineer L2',
      dates: 'Apr 2026 – Present',
    },
    {
      company: 'Infosys',
      role: 'Digital Specialist Engineer L1',
      dates: 'Jan 2025 – Mar 2026',
    },
    {
      company: 'Infosys',
      role: 'Digital Specialist Engineer',
      dates: 'Oct 2021 – Jan 2025',
    },
    {
      company: 'Cognizant',
      role: 'Programmer Analyst Trainee',
      dates: 'Aug 2021 – Sep 2021',
    },
    {
      company: 'Cognizant',
      role: 'Software Development Intern',
      dates: 'Feb 2021 – Aug 2021',
    },
  ];
  readonly profileImages = [
    {
      src: 'assets/profile/IMG_20260806_220129_611.jpg',
      fileName: 'IMG_20260806_220129_611.jpg',
      alt: 'User-provided profile image; visual description not supplied.',
    },
    {
      src: 'assets/profile/9V2A8830~2.JPG',
      fileName: '9V2A8830~2.JPG',
      alt: 'User-provided profile image; visual description not supplied.',
    },
  ];
  readonly animatedImage = {
    src: 'assets/profile/20260116_181154-ANIMATION.gif',
    fileName: '20260116_181154-ANIMATION.gif',
  };
}
