import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateTo(path: string): void {
    const userid=localStorage.getItem("userId")
    if(path=="rendez-vous" && userid)
      {
          if(userid){
            this.router.navigate([path],{ queryParams: { userid: userid } });

          }
      }
      else{
        this.router.navigate([path]);
      }    

  }


  isActive(path: string): boolean {
    return this.router.url.includes(path);
  }
}
