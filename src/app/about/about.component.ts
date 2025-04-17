import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { CdBackComponent } from '../shared/cd-back/cd-back.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet, RouterLink, CdBackComponent],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '../../styles.css'
  ]
})
export class AboutComponent implements OnInit {
  currentDate!: string;

  constructor(private titleService: Title) {
    this.titleService.setTitle('MS Portfolio | About 📖');
  }

  ngOnInit(): void {
    // Set the current date in the format: "Tue Apr 17 2025"
    this.currentDate = new Date().toDateString();
  }
}
