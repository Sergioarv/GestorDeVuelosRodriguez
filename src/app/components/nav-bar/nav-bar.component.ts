import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private translatePipe: TranslatePipe
    ) {
    // Constructor de nav-bar
  }

  ngOnInit(): void {
    // ngOnit
  }

  changeLang(lang: string){
    this.translate.use(lang);
  }

}
