import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comp-data-show',
  templateUrl: './comp-data-show.component.html',
  styleUrls: ['./comp-data-show.component.css']
})
export class CompDataShowComponent implements OnInit, OnDestroy {

  @Input('url') urlForDataFetch: string | undefined;
  @Input('eighteenPlusAgeGroup') onlyEighteenPlusAgeGroup: boolean | undefined;

  @Output() toggleComponent = new EventEmitter();

  currentTime: string = '';
  audioAlarmSource: string = '../../../assets/audio/daniel_simon.wav';
  unauthorizedAccessHttp: number = 401;
  cowinLink: string = 'https://www.cowin.gov.in';

  dataResponse: any;
  vaxCenters: any[] = [];
  currInterval: any;

  calenderByApi: boolean = true;
  vaxFound: boolean = false;

  constructor(private httpModule: HttpClient) { }

  ngOnInit(): void {
    this.calenderByApi = true;
    this.currentTime = new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString();
    this.dataFetch();
    this.currInterval = setInterval(() => {
      this.currentTime = new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString();
      this.dataFetch()
    }, 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.currInterval);
  }

  goToHome() {
    this.toggleComponent.emit();
  }

  dataFetch() {
    if (this.urlForDataFetch != undefined) {
      this.httpModule.get(this.urlForDataFetch).subscribe(
        (res) => {
          this.dataResponse = res;
          this.vaxCenters = this.dataResponse.centers;
          if (this.vaxCenters != null) {
            for (var i = 0; i < this.vaxCenters.length; i++) {
              if (this.vaxCenters[i].sessions[0].available_capacity > 0) {
                if (this.onlyEighteenPlusAgeGroup && this.vaxCenters[i].sessions[0].min_age_limit == 18) {
                  this.playAudio();
                  this.vaxFound = true;
                  break;
                }
                else if (!this.onlyEighteenPlusAgeGroup) {
                  this.playAudio();
                  this.vaxFound = true;
                  break;
                }
              }
            }
          }
        },
        (error) => {
          if (error.status == this.unauthorizedAccessHttp) {
            if (this.calenderByApi) {
              this.urlForDataFetch = this.urlForDataFetch?.replace("calendar", "find");
              this.calenderByApi = !this.calenderByApi;
            }
            else {
              this.urlForDataFetch = this.urlForDataFetch?.replace("find", "calendar");
              this.calenderByApi = !this.calenderByApi;
            }

          }

        })
    }
  }

  playAudio() {
    let audio = new Audio();
    audio.src = this.audioAlarmSource;
    audio.load();
    audio.play();
  }

}