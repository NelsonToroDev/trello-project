import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faTrello = faTrello;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  faAngleDown = faAngleDown;

  items = [
    {
      label: 'Personal Boards',
      items: [
        {
          label: 'My Boards',
        },
        {
          label: 'Starred Boards',
        }
      ]
    },
    {
      label: 'Team Boards',
      items: [
        {
          label: 'Team 1',
        },
        {
          label: 'Team 2',
        }
      ]
    },
    {
      label: 'Templates',
      items: [
        {
          label: 'Create from Template',
        },
        {
          label: 'Team Templates',
        }
      ]
    },
    {
      label: 'More',
      items: [
        {
          label: 'Archived Items',
        },
        {
          label: 'Activity',
        },
        {
          label: 'Settings',
        }
      ]
    }
  ]
}
