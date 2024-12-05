import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexHeaderComponent } from './index-header/index-header.component';
import { IndexMainComponent } from './index-main/index-main.component';
import { IndexInformationSectionComponent } from './index-information-section/index-information-section.component';
import { IndexFooterComponent } from './index-footer/index-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexHeaderComponent, IndexMainComponent, IndexInformationSectionComponent, IndexFooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'avoante-digital';
}
