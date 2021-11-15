import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translatePipe: TranslatePipe) {
    // Constiuctor de home
  }

  ngOnInit(): void {
    // ngOnit
  }

}
