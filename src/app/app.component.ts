import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ToolsComponent } from './tools/tools.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProjectsComponent } from './projects/projects.component';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, TopNavigationComponent,
     ToolsComponent, SocialMediaComponent, ProjectsComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'portfolio';
  faJava = faJava;

  
  constructor(
    library: FaIconLibrary,
 ) {
   library.addIconPacks(fas, far);
 }
}
