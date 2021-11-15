import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestorDeVuelosRodriguez';
  langs: string[] = [];

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = translate.getLangs();
    this.translate.use('es');
  }
}
