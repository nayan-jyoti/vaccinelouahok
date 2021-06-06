import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-home',
  templateUrl: './comp-home.component.html',
  styleUrls: ['./comp-home.component.css']
})
export class CompHomeComponent implements OnInit {

  timeDelay: string = '১০';
  toolTitle: string = 'ভেকচিন লওঁ আহক';
  toolDescription: string = 'এই সঁজুলিবিধ ব্যৱহাৰকাৰীক অসমৰ বিভিন্ন কেন্দ্ৰত টীকা উপলভ্যতাৰ তথ্য সম্বন্ধে জ্ঞাত হোৱা সহজ কৰি তোলাৰ' +
    'এক ক্ষুদ্ৰ প্ৰয়াস৷ এই সঁজুলিবিধে আজিৰ দিনটোৰ পৰা এসপ্তাহলৈকে টীকাৰ উপলভ্যতাৰ বিষয়ে তথ্য দিব পাৰে৷ ই প্ৰত্যেক '
    + this.timeDelay + ' ছেকেণ্ডৰ মূৰে মূৰে টীকা উপলভ্যতাৰ তথ্য নৱীকৰণ কৰি থাকে৷';
  toolWelcome: string = 'লৈ স্বাগতম';
  toolInstruction: string = 'নিম্নোক্ত বাচনিৰ পৰা জিলা বাচনি কৰি বা ডাক-সূচাংক প্ৰৱিষ্ট কৰি কাষৰ বুটামটো টিপি প্ৰয়োজনীয় তথ্য লাভ ' +
    ' কৰিব পাৰিব৷';

  showDataSelectComp: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.showDataSelectComp = true;
  }

  toggleShowComp() {
    this.showDataSelectComp = !this.showDataSelectComp;
  }
}
