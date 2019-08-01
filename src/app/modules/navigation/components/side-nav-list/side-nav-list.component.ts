import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { Category } from 'src/app/domain/model/Category';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent {
  @Input() categories: Category[] = [];
  @Input() showItemsHorizontal = false;
  @Input() showSubHeaders = true;
  @Output() categorySelected = new EventEmitter<{ id: number, name: string }>();
  @Output() closeSideNav = new EventEmitter<void>();

  constructor(public authService: AuthService) { }
}
