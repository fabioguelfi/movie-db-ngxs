import { OnInit, Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
    selector: 'sidenav',
    styleUrls: ['sidenav.component.scss'],
    templateUrl: 'sidenav.component.html'
})
export class SidenavComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';
  
    close(reason: string) {
      this.reason = reason;
      this.sidenav.close();
    }
  
    public ngOnInit(): void {}
}