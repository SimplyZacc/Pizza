import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.hide();
  }

}
