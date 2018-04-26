import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TitleService {

    text: BehaviorSubject<string> = new BehaviorSubject('');

    constructor(private translate: TranslateService) {
    }

    public set(key: string) {
        this.translate.get(key).subscribe((res: string) => {
            this.text.next(res);
        });

        this.translate.onLangChange.subscribe(() => {
            this.translate.get(key).subscribe((res: string) => {
                this.text.next(res);
            });
        });
    }
}
