import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AjoutComponent } from './exemple/ajout/ajout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AjoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-projet-hello-test-git';
}
