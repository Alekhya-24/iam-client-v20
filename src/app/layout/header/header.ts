import { Component, Renderer2 } from '@angular/core';
import { Search } from './search/search';
import { User } from './user/user';
import { Theme } from './theme/theme';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Search, User, Theme,CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  public isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  public toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.renderer[this.isDarkMode ? 'addClass' : 'removeClass'](document.documentElement, 'dark');
  }



}
