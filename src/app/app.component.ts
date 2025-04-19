import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd ,RouterLink, RouterLinkActive,} from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-web';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !['/login'].includes(event.urlAfterRedirects);
      }
    });
  }

}
