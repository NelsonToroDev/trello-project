import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit{
  authService = inject(AuthService);

  ngOnInit () {
    this.authService.getProfile()
      .subscribe();
  }
}
