import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.footerService.hide();
  }

}
