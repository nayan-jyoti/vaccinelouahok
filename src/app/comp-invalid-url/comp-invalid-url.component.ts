import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-invalid-url',
  templateUrl: './comp-invalid-url.component.html',
  styleUrls: ['./comp-invalid-url.component.css']
})
export class CompInvalidUrlComponent implements OnInit {

  error_message_title: string = 'ভুল ঠিকনা!'
  error_message:string= 'অহ অ\'!! কিবা ভুল হৈছে৷ অনুগ্ৰহ কৰি মুখ্যপৃষ্ঠালৈ যাওঁক৷';
  constructor() { }

  ngOnInit(): void {
  }

}
