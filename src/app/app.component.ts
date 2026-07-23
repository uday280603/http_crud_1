import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './shared/service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading  : boolean= false;

  constructor(
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
  this.spinnerService.isLodingObs$.subscribe(flag => {
    setTimeout(() => {
      this.isLoading = flag;
    });
  });
}
}