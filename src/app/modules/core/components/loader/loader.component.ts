import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/modules/core/services/loader/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  $showLoader: Observable<boolean>;
  color = 'primary';
  mode = 'indeterminate';

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.$showLoader = this.loaderService.$loaderVisibility;
  }

}
