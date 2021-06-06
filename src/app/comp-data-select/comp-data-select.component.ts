import { Component, OnInit } from '@angular/core';
import { DataDistrict } from './data-district.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-comp-data-select',
  templateUrl: './comp-data-select.component.html',
  styleUrls: ['./comp-data-select.component.css']
})
export class CompDataSelectComponent implements OnInit {

  inputPinCode: string = '';
  textHintPinCode: string = 'ডাক-সূচাংক';
  selectedDistrict: DataDistrict = new DataDistrict();
  todayDate: string = '';
  dataFetchBaseUrl: string = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public';
  //dataFetchBaseUrl: string = 'http://localhost:9000';
  dataFetchUrl: string = '';

  showDataShowComp: boolean = false;
  onlyEighteenPlusAgeGroup: boolean = false;

  districtData: DataDistrict[] = [];

  constructor() { }

  ngOnInit() {
    this.dataFetchUrl = '';
    this.inputPinCode = '';
    this.selectedDistrict = new DataDistrict();
    this.showDataShowComp = false;
    this.todayDate = formatDate(new Date(), 'dd-MM-yyyy', 'en-IN');
    this.onlyEighteenPlusAgeGroup = false;
    this.districtData = [
      { id: 46, name: 'বাক্সা' },
      { id: 47, name: 'বৰপেটা' },
      { id: 765, name: 'বিশ্বনাথ' },
      { id: 57, name: 'বঙাইগাওঁ' },
      { id: 66, name: 'কাছাৰ' },
      { id: 766, name: 'চৰাইদেউ' },
      { id: 58, name: 'চিৰাং' },
      { id: 48, name: 'দৰং' },
      { id: 62, name: 'ধেমাজি' },
      { id: 59, name: 'ধুবুৰী' },
      { id: 43, name: 'ডিব্ৰুগড়' },
      { id: 67, name: 'ডিমা হাচাও' },
      { id: 60, name: 'গোৱালপাৰা' },
      { id: 53, name: 'গোলাঘাট' },
      { id: 68, name: 'হাইলাকান্দি' },
      { id: 764, name: 'হোজাই' },
      { id: 54, name: 'যোৰহাট' },
      { id: 49, name: 'কামৰূপ মহানগৰ' },
      { id: 50, name: 'কামৰূপ গ্ৰাম্য' },
      { id: 51, name: 'কাৰ্বি আংলং' },
      { id: 69, name: 'কৰিমগঞ্জ' },
      { id: 61, name: 'কোকৰাঝাৰ' },
      { id: 63, name: 'লক্ষীমপুৰ' },
      { id: 767, name: 'মাজুলী' },
      { id: 55, name: 'মৰিগাওঁ' },
      { id: 56, name: 'নগাওঁ' },
      { id: 52, name: 'নলবাৰী' },
      { id: 44, name: 'শিৱসাগৰ' },
      { id: 64, name: 'শোণিতপুৰ' },
      { id: 768, name: 'দক্ষিণ শালমাৰা মানকাচৰ' },
      { id: 45, name: 'তিনিচুকীয়া' },
      { id: 65, name: 'ওদালগুৰি' },
      { id: 769, name: 'পশ্চিম কাৰ্বি আংলং' }
    ];
  }

  onPinSubmit() {
    this.dataFetchUrl = this.dataFetchBaseUrl + '/calendarByPin?pincode='
      + this.inputPinCode + '&date='
      + this.todayDate;

    this.showDataShowComp = true;
  }

  onDistSubmit() {
    this.dataFetchUrl = this.dataFetchBaseUrl + '/calendarByDistrict?district_id='
      + this.selectedDistrict.id + '&date='
      + this.todayDate;

    this.showDataShowComp = true;
  }

  toggleCheckBox() {
    this.onlyEighteenPlusAgeGroup = !this.onlyEighteenPlusAgeGroup;
    console.log(this.onlyEighteenPlusAgeGroup)
  }
}
