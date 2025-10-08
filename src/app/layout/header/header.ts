import { Component } from '@angular/core';
import { Search } from './search/search';
import { User } from './user/user';
import { Theme } from './theme/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Search, User, Theme],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {}
