import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.hide();
  }

}
