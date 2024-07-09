import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ToolsComponent } from './tools/tools.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, TopNavigationComponent,
     ToolsComponent, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'portfolio';

}
