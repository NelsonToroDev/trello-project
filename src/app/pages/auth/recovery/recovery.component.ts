import { Component } from '@angular/core';
import { BackgroundComponent } from "../../../components/background/backgroud.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { RecoveryFormComponent } from "../../../components/recovery-form/recovery-form.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [BackgroundComponent, HeaderComponent, RecoveryFormComponent, FooterComponent, RouterModule],
  templateUrl: './recovery.component.html'
})
export class RecoveryComponent {

}
