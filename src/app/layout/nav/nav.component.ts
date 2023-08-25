import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from '@core/service/theme.service';
import { environment } from '@env';
import { CONFIG } from '@app/shared/configs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;
  public repoUrl = 'https://github.com/kamin3/pnpai-backend-offline-v2.git';

  public isDarkTheme$: Observable<boolean>;

  navItems = [
    { link: CONFIG.dashboard.children.home.route, title: CONFIG.dashboard.children.home.name },
    { link: CONFIG.about.route, title: CONFIG.about.name },
    { link: '/contact', title: 'Contact' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.getDarkTheme();
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
