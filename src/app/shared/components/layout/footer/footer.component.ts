import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { config } from '@utils/constants/config';

@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
    appName = config.appName;
}
