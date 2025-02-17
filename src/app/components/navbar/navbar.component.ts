import { Component, inject, OnInit } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faBell, faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { User } from '@models/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{
  isOpen = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faAngleDown = faAngleDown;
  faClose = faClose;
  authService = inject(AuthService);
  router = inject(Router);
  user: User | null = null;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

  ngOnInit () {
    this.authService.getProfile()
      .subscribe(user => this.user = user)
  }

  logout () {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
