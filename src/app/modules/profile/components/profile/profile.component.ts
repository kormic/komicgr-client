import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/modules/core/services/user-service/user-service';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // TODO: This doesn't look so good. Maybe create a
  // service to get this data from or pass it an http interceptor
  environment = environment;
  userProfile: any;
  time = new Date().getTime() + Math.random() * 100;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.userProfile = data.profileData;
    });
  }

  fileUploadInputChanged(event: any) {
    if (event.srcElement.files[0].size <= 200000) {
      console.log(event.srcElement.files[0]);
      this.userService.uploadProfileImage(event.srcElement.files[0]).subscribe(response => {
        if (response.success) {
          this.time = new Date().getTime();
          console.log(this.time);
        } else {
          this._snackBar.open(response.errorMessage, 'Dismiss', { duration: 3 * 1000 });
        }
      });
    } else {
      this._snackBar.open('File is too large, please select a smaller file.', 'Dismiss', { duration: 3 * 1000 });
    }
  }
}
