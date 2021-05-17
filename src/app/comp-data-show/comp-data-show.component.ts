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

  dataResponse: any;
  vaxCenters: any[] = [];
  currInterval: any;
  currIntervalAlarm: any;

  constructor(private httpModule: HttpClient) { }

  ngOnInit(): void {
    this.currentTime = new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString();
    this.dataFetch();
    this.currInterval = setInterval(() => {
      this.currentTime = new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString();
      this.dataFetch()
    }, 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.currInterval);
    clearInterval(this.currIntervalAlarm);
  }

  goToHome() {
    this.toggleComponent.emit();
  }

  dataFetch() {
    if (this.urlForDataFetch != undefined) {
      this.httpModule.get(this.urlForDataFetch).subscribe((res) => {
        this.dataResponse = res;
        this.vaxCenters = this.dataResponse.centers;
        if (this.vaxCenters != null) {
          for (var i = 0; i < this.vaxCenters.length; i++) {
            if (this.vaxCenters[i].sessions[0].available_capacity > 0) {
              if (this.onlyEighteenPlusAgeGroup && this.vaxCenters[i].sessions[0].min_age_limit == 18) {
                this.playAudio();
                break;
              }
              else if (!this.onlyEighteenPlusAgeGroup) {
                this.playAudio();
                break;
              }
            }
          }
        }
      })
    }
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/daniel_simon.wav";
    audio.load();
    audio.play();
  }
}
