import { Component, OnInit } from '@angular/core';
import { TitleService } from './shared/services/title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(public title: TitleService, private translate: TranslateService) {
        this.translate.setDefaultLang('en-US');
        this.translate.use('en-US');

        let lang;
        
        if (lang) {
            this.translate.use(lang);
        } else {
            this.translate.use('en-US');
            //cookies.set('lang', 'en-US');
        }
    }

    ngOnInit() {
        this.title.set('CONTENT.PUBLIC_MENU_ITEM');
    }
}
