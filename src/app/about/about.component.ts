import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.hide();
  }

}
