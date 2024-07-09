import { Component } from '@angular/core';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
  faJava = faJava;

}
