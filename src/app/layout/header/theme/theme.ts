import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: true,
  templateUrl: './theme.html',
  styleUrls: ['./theme.scss']
})
export class Theme implements OnInit {
  isDark = false;

  ngOnInit() {
    // Check saved theme in localStorage
    this.isDark = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  toggleTheme(event: Event) {
    this.isDark = (event.target as HTMLInputElement).checked;
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDark);
  }
}
